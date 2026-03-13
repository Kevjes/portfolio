// Settings Page JavaScript

// Check authentication
checkAuth().then((user) => {
    if (user) {
        document.getElementById('userEmail').textContent = user.email;
        loadSettings();
    }
});

// Load current settings from Firestore
async function loadSettings() {
    try {
        const settingsDoc = await db.collection('settings').doc('site').get();
        if (settingsDoc.exists) {
            const settings = settingsDoc.data();

            // Profile
            if (settings.profile) {
                document.getElementById('profileName').value = settings.profile.name || '';
                document.getElementById('profileEmail').value = settings.profile.email || '';
                document.getElementById('profilePhone').value = settings.profile.phone || '';
                document.getElementById('profileBio').value = settings.profile.bio || '';
            }

            // Site Settings
            if (settings.site) {
                document.getElementById('siteTitle').value = settings.site.title || '';
                document.getElementById('siteDescription').value = settings.site.description || '';
                document.getElementById('contactEmail').value = settings.site.contactEmail || '';
            }

            // Social Media
            if (settings.social) {
                document.getElementById('linkedinUrl').value = settings.social.linkedin || '';
                document.getElementById('githubUrl').value = settings.social.github || '';
                document.getElementById('twitterUrl').value = settings.social.twitter || '';
                document.getElementById('portfolioUrl').value = settings.social.portfolio || '';
            }
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
}

// Save Profile
async function saveProfile() {
    try {
        const profileData = {
            name: document.getElementById('profileName').value,
            email: document.getElementById('profileEmail').value,
            phone: document.getElementById('profilePhone').value,
            bio: document.getElementById('profileBio').value
        };

        await db.collection('settings').doc('site').set({
            profile: profileData
        }, { merge: true });

        showNotification('Profil mis à jour avec succès', 'success');
    } catch (error) {
        console.error('Error saving profile:', error);
        showNotification('Erreur lors de la mise à jour du profil', 'error');
    }
}

// Change Password
async function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!currentPassword || !newPassword || !confirmPassword) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }

    if (newPassword !== confirmPassword) {
        showNotification('Les mots de passe ne correspondent pas', 'error');
        return;
    }

    if (newPassword.length < 6) {
        showNotification('Le mot de passe doit contenir au moins 6 caractères', 'error');
        return;
    }

    try {
        const user = auth.currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            currentPassword
        );

        // Re-authenticate
        await user.reauthenticateWithCredential(credential);

        // Update password
        await user.updatePassword(newPassword);

        // Clear fields
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';

        showNotification('Mot de passe mis à jour avec succès', 'success');
    } catch (error) {
        console.error('Error changing password:', error);
        if (error.code === 'auth/wrong-password') {
            showNotification('Mot de passe actuel incorrect', 'error');
        } else {
            showNotification('Erreur lors du changement de mot de passe', 'error');
        }
    }
}

// Save Site Settings
async function saveSiteSettings() {
    try {
        const siteData = {
            title: document.getElementById('siteTitle').value,
            description: document.getElementById('siteDescription').value,
            contactEmail: document.getElementById('contactEmail').value
        };

        await db.collection('settings').doc('site').set({
            site: siteData
        }, { merge: true });

        showNotification('Paramètres du site mis à jour', 'success');
    } catch (error) {
        console.error('Error saving site settings:', error);
        showNotification('Erreur lors de la sauvegarde', 'error');
    }
}

// Save Social Media
async function saveSocialMedia() {
    try {
        const socialData = {
            linkedin: document.getElementById('linkedinUrl').value,
            github: document.getElementById('githubUrl').value,
            twitter: document.getElementById('twitterUrl').value,
            portfolio: document.getElementById('portfolioUrl').value
        };

        await db.collection('settings').doc('site').set({
            social: socialData
        }, { merge: true });

        showNotification('Réseaux sociaux mis à jour', 'success');
    } catch (error) {
        console.error('Error saving social media:', error);
        showNotification('Erreur lors de la sauvegarde', 'error');
    }
}

// Backup Data
async function backupData() {
    try {
        showNotification('Création de la sauvegarde...', 'info');

        const backup = {
            timestamp: new Date().toISOString(),
            projects: [],
            skills: [],
            experiences: [],
            settings: {}
        };

        // Get all collections
        const projectsSnapshot = await db.collection('projects').get();
        projectsSnapshot.forEach(doc => {
            backup.projects.push({ id: doc.id, ...doc.data() });
        });

        const skillsSnapshot = await db.collection('skills').get();
        skillsSnapshot.forEach(doc => {
            backup.skills.push({ id: doc.id, ...doc.data() });
        });

        const experiencesSnapshot = await db.collection('experiences').get();
        experiencesSnapshot.forEach(doc => {
            backup.experiences.push({ id: doc.id, ...doc.data() });
        });

        const settingsSnapshot = await db.collection('settings').get();
        settingsSnapshot.forEach(doc => {
            backup.settings[doc.id] = doc.data();
        });

        // Download as JSON
        const dataStr = JSON.stringify(backup, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `portfolio-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);

        showNotification('Sauvegarde créée avec succès', 'success');
    } catch (error) {
        console.error('Error backing up data:', error);
        showNotification('Erreur lors de la sauvegarde', 'error');
    }
}

// Restore Data
async function restoreData(input) {
    const file = input.files[0];
    if (!file) return;

    if (!confirm('Êtes-vous sûr de vouloir restaurer cette sauvegarde ? Les données actuelles seront remplacées.')) {
        input.value = '';
        return;
    }

    try {
        showNotification('Restauration en cours...', 'info');

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const backup = JSON.parse(e.target.result);

                // Restore projects
                if (backup.projects) {
                    for (const project of backup.projects) {
                        const { id, ...data } = project;
                        await db.collection('projects').doc(id).set(data);
                    }
                }

                // Restore skills
                if (backup.skills) {
                    for (const skill of backup.skills) {
                        const { id, ...data } = skill;
                        await db.collection('skills').doc(id).set(data);
                    }
                }

                // Restore experiences
                if (backup.experiences) {
                    for (const experience of backup.experiences) {
                        const { id, ...data } = experience;
                        await db.collection('experiences').doc(id).set(data);
                    }
                }

                // Restore settings
                if (backup.settings) {
                    for (const [docId, data] of Object.entries(backup.settings)) {
                        await db.collection('settings').doc(docId).set(data);
                    }
                }

                showNotification('Données restaurées avec succès', 'success');
                setTimeout(() => location.reload(), 2000);
            } catch (error) {
                console.error('Error parsing backup:', error);
                showNotification('Fichier de sauvegarde invalide', 'error');
            }
        };
        reader.readAsText(file);
    } catch (error) {
        console.error('Error restoring data:', error);
        showNotification('Erreur lors de la restauration', 'error');
    }

    input.value = '';
}

// Confirm Reset
function confirmReset() {
    const confirmed = confirm(
        'ATTENTION : Cette action va supprimer toutes les données de manière irréversible.\n\n' +
        'Êtes-vous absolument sûr de vouloir continuer ?'
    );

    if (confirmed) {
        const doubleCheck = prompt('Tapez "SUPPRIMER" pour confirmer :');
        if (doubleCheck === 'SUPPRIMER') {
            resetAllData();
        }
    }
}

// Reset All Data
async function resetAllData() {
    try {
        showNotification('Suppression des données...', 'info');

        // Delete all projects
        const projectsSnapshot = await db.collection('projects').get();
        const projectDeletes = projectsSnapshot.docs.map(doc => doc.ref.delete());
        await Promise.all(projectDeletes);

        // Delete all skills
        const skillsSnapshot = await db.collection('skills').get();
        const skillDeletes = skillsSnapshot.docs.map(doc => doc.ref.delete());
        await Promise.all(skillDeletes);

        // Delete all experiences
        const experiencesSnapshot = await db.collection('experiences').get();
        const expDeletes = experiencesSnapshot.docs.map(doc => doc.ref.delete());
        await Promise.all(expDeletes);

        showNotification('Toutes les données ont été supprimées', 'success');
        setTimeout(() => location.reload(), 2000);
    } catch (error) {
        console.error('Error resetting data:', error);
        showNotification('Erreur lors de la réinitialisation', 'error');
    }
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .settings-container {
        max-width: 900px;
        margin: 0 auto;
    }

    .settings-section {
        margin-bottom: 30px;
    }

    .section-title {
        font-size: 20px;
        color: #c59764;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .settings-card {
        background: #1a1a1a;
        border: 1px solid #2a2a2a;
        border-radius: 12px;
        padding: 25px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        color: #e0e0e0;
        font-weight: 500;
        font-size: 14px;
    }

    .form-group label i {
        margin-right: 8px;
        color: #c59764;
    }

    .form-control {
        width: 100%;
        padding: 12px 15px;
        background: #0a0a0a;
        border: 1px solid #2a2a2a;
        border-radius: 8px;
        color: #e0e0e0;
        font-size: 14px;
        transition: all 0.3s;
    }

    .form-control:focus {
        outline: none;
        border-color: #c59764;
        box-shadow: 0 0 0 3px rgba(197, 151, 100, 0.1);
    }

    textarea.form-control {
        resize: vertical;
        font-family: inherit;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .btn-primary {
        background: linear-gradient(135deg, #c59764, #d4af37);
        color: #0a0a0a;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(197, 151, 100, 0.3);
    }

    .btn-secondary {
        background: #2a2a2a;
        color: #e0e0e0;
        border: 1px solid #3a3a3a;
    }

    .btn-secondary:hover {
        background: #3a3a3a;
    }

    .btn-danger {
        background: #ef4444;
        color: white;
    }

    .btn-danger:hover {
        background: #dc2626;
    }

    .data-actions {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .action-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background: #0a0a0a;
        border: 1px solid #2a2a2a;
        border-radius: 8px;
    }

    .action-item.danger {
        border-color: #ef4444;
    }

    .action-item h3 {
        margin: 0 0 5px 0;
        color: #e0e0e0;
        font-size: 16px;
    }

    .action-item p {
        margin: 0;
        color: #9a9a9a;
        font-size: 13px;
    }

    @media (max-width: 768px) {
        .action-item {
            flex-direction: column;
            gap: 15px;
            text-align: center;
        }

        .btn {
            width: 100%;
            justify-content: center;
        }
    }
`;
document.head.appendChild(style);
