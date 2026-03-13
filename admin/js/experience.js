// Experience CRUD Operations

// Check authentication
checkAuth().then((user) => {
    if (user) {
        document.getElementById('userEmail').textContent = user.email;
        loadExperiences();
    }
});

// Load all experiences
async function loadExperiences() {
    try {
        const experiencesSnapshot = await db.collection('experiences')
            .orderBy('order', 'asc')
            .get();

        const experiencesList = document.getElementById('experiencesList');
        experiencesList.innerHTML = '';

        if (experiencesSnapshot.empty) {
            experiencesList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-briefcase"></i>
                    <p>Aucune expérience trouvée</p>
                    <button class="btn btn-primary" onclick="showExperienceModal()">
                        <i class="fas fa-plus"></i> Ajouter une expérience
                    </button>
                </div>
            `;
            return;
        }

        experiencesSnapshot.forEach(doc => {
            const experience = doc.data();
            const experienceCard = createExperienceCard(doc.id, experience);
            experiencesList.appendChild(experienceCard);
        });

    } catch (error) {
        console.error('Error loading experiences:', error);
        showNotification('Erreur lors du chargement des expériences', 'error');
    }
}

// Create experience card
function createExperienceCard(id, experience) {
    const card = document.createElement('div');
    card.className = 'experience-card';

    const tasksList = Array.isArray(experience.tasks)
        ? experience.tasks.map(task => `<li>${task}</li>`).join('')
        : '';

    const tagsList = Array.isArray(experience.tags)
        ? experience.tags.map(tag => `<span class="tag">${tag}</span>`).join('')
        : '';

    card.innerHTML = `
        <div class="experience-header">
            <div class="experience-main-info">
                <h3>${experience.title}</h3>
                <h4 class="company">${experience.company}</h4>
                <span class="period">${experience.period}</span>
                ${experience.current ? '<span class="badge badge-success">En cours</span>' : ''}
                <span class="order-badge">Ordre: ${experience.order}</span>
            </div>
            <div class="experience-actions">
                <button class="btn-icon" onclick="editExperience('${id}')" title="Modifier">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-danger" onclick="deleteExperience('${id}', '${experience.company}')" title="Supprimer">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        <div class="experience-content">
            <p class="description">${experience.description}</p>
            ${tasksList ? `<ul class="tasks-list">${tasksList}</ul>` : ''}
            <div class="tags-container">
                ${tagsList}
            </div>
        </div>
    `;

    return card;
}

// Show modal for adding/editing experience
function showExperienceModal(experienceId = null) {
    const modal = document.getElementById('experienceModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('experienceForm');

    form.reset();
    document.getElementById('tasksContainer').innerHTML = '';

    if (experienceId) {
        modalTitle.textContent = 'Modifier l\'expérience';
        loadExperienceData(experienceId);
        form.dataset.experienceId = experienceId;
    } else {
        modalTitle.textContent = 'Ajouter une expérience';
        delete form.dataset.experienceId;
        addTaskField(); // Add one empty task field by default
    }

    modal.style.display = 'flex';
}

// Load experience data for editing
async function loadExperienceData(experienceId) {
    try {
        const doc = await db.collection('experiences').doc(experienceId).get();
        if (doc.exists) {
            const experience = doc.data();

            document.getElementById('expTitle').value = experience.title;
            document.getElementById('expCompany').value = experience.company;
            document.getElementById('expPeriod').value = experience.period;
            document.getElementById('expDescription').value = experience.description;
            document.getElementById('expOrder').value = experience.order;
            document.getElementById('expCurrent').checked = experience.current || false;

            // Load tags
            if (Array.isArray(experience.tags)) {
                document.getElementById('expTags').value = experience.tags.join(', ');
            }

            // Load tasks
            const tasksContainer = document.getElementById('tasksContainer');
            tasksContainer.innerHTML = '';

            if (Array.isArray(experience.tasks)) {
                experience.tasks.forEach(task => {
                    addTaskField(task);
                });
            }
        }
    } catch (error) {
        console.error('Error loading experience:', error);
        showNotification('Erreur lors du chargement', 'error');
    }
}

// Close modal
function closeExperienceModal() {
    document.getElementById('experienceModal').style.display = 'none';
}

// Add task field
function addTaskField(task = '') {
    const tasksContainer = document.getElementById('tasksContainer');
    const taskField = document.createElement('div');
    taskField.className = 'task-field';
    taskField.innerHTML = `
        <input type="text" class="form-control task-input" placeholder="Tâche ou réalisation" value="${task}" required>
        <button type="button" class="btn-icon btn-danger" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    tasksContainer.appendChild(taskField);
}

// Save experience
async function saveExperience(event) {
    event.preventDefault();

    const form = event.target;
    const experienceId = form.dataset.experienceId;

    // Get form data
    const title = document.getElementById('expTitle').value;
    const company = document.getElementById('expCompany').value;
    const period = document.getElementById('expPeriod').value;
    const description = document.getElementById('expDescription').value;
    const order = parseInt(document.getElementById('expOrder').value);
    const current = document.getElementById('expCurrent').checked;

    // Get tags
    const tagsInput = document.getElementById('expTags').value;
    const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);

    // Get tasks
    const taskFields = document.querySelectorAll('.task-input');
    const tasks = Array.from(taskFields)
        .map(field => field.value.trim())
        .filter(task => task);

    if (tasks.length === 0) {
        showNotification('Ajoutez au moins une tâche', 'error');
        return;
    }

    const experienceData = {
        title,
        company,
        period,
        description,
        tasks,
        tags,
        order,
        current,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        if (experienceId) {
            // Update existing experience
            await db.collection('experiences').doc(experienceId).update(experienceData);
            showNotification('Expérience mise à jour avec succès', 'success');
        } else {
            // Create new experience
            experienceData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
            await db.collection('experiences').add(experienceData);
            showNotification('Expérience ajoutée avec succès', 'success');
        }

        closeExperienceModal();
        loadExperiences();
    } catch (error) {
        console.error('Error saving experience:', error);
        showNotification('Erreur lors de la sauvegarde', 'error');
    }
}

// Edit experience
function editExperience(experienceId) {
    showExperienceModal(experienceId);
}

// Delete experience
async function deleteExperience(experienceId, company) {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer l'expérience chez "${company}" ?`)) {
        return;
    }

    try {
        await db.collection('experiences').doc(experienceId).delete();
        showNotification('Expérience supprimée avec succès', 'success');
        loadExperiences();
    } catch (error) {
        console.error('Error deleting experience:', error);
        showNotification('Erreur lors de la suppression', 'error');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

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

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('experienceModal');
    if (event.target === modal) {
        closeExperienceModal();
    }
}
