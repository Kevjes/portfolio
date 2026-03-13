// Skills CRUD Operations

// Check authentication
checkAuth().then((user) => {
    if (user) {
        document.getElementById('userEmail').textContent = user.email;
        loadSkills();
    }
});

// Load all skills
async function loadSkills() {
    try {
        const skillsSnapshot = await db.collection('skills')
            .orderBy('order', 'asc')
            .get();

        const skillsList = document.getElementById('skillsList');
        skillsList.innerHTML = '';

        if (skillsSnapshot.empty) {
            skillsList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-code"></i>
                    <p>Aucune compétence trouvée</p>
                    <button class="btn btn-primary" onclick="showSkillModal()">
                        <i class="fas fa-plus"></i> Ajouter une catégorie
                    </button>
                </div>
            `;
            return;
        }

        skillsSnapshot.forEach(doc => {
            const skillCategory = doc.data();
            const categoryCard = createSkillCategoryCard(doc.id, skillCategory);
            skillsList.appendChild(categoryCard);
        });

    } catch (error) {
        console.error('Error loading skills:', error);
        showNotification('Erreur lors du chargement des compétences', 'error');
    }
}

// Create skill category card
function createSkillCategoryCard(id, skillCategory) {
    const card = document.createElement('div');
    card.className = 'skill-category-card';

    const skillsList = Array.isArray(skillCategory.skills)
        ? skillCategory.skills.map(skill => `
            <div class="skill-bar-preview">
                <span>${skill.name}</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${skill.level}%">${skill.level}%</div>
                </div>
            </div>
        `).join('')
        : '';

    card.innerHTML = `
        <div class="category-header">
            <div class="category-info">
                <i class="fas ${skillCategory.icon} category-icon"></i>
                <div>
                    <h3>${skillCategory.title}</h3>
                    <span class="badge">${skillCategory.category}</span>
                    <span class="order-badge">Ordre: ${skillCategory.order}</span>
                </div>
            </div>
            <div class="category-actions">
                <button class="btn-icon" onclick="editSkillCategory('${id}')" title="Modifier">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-danger" onclick="deleteSkillCategory('${id}', '${skillCategory.title}')" title="Supprimer">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        <div class="skills-list">
            ${skillsList}
        </div>
    `;

    return card;
}

// Show modal for adding/editing skill category
function showSkillModal(categoryId = null) {
    const modal = document.getElementById('skillModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('skillForm');

    form.reset();
    document.getElementById('skillsContainer').innerHTML = '';

    if (categoryId) {
        modalTitle.textContent = 'Modifier la catégorie';
        loadSkillCategoryData(categoryId);
        form.dataset.categoryId = categoryId;
    } else {
        modalTitle.textContent = 'Ajouter une catégorie';
        delete form.dataset.categoryId;
        addSkillField(); // Add one empty skill field by default
    }

    modal.style.display = 'flex';
}

// Load skill category data for editing
async function loadSkillCategoryData(categoryId) {
    try {
        const doc = await db.collection('skills').doc(categoryId).get();
        if (doc.exists) {
            const category = doc.data();

            document.getElementById('categoryName').value = category.title;
            document.getElementById('categorySlug').value = category.category;
            document.getElementById('categoryIcon').value = category.icon;
            document.getElementById('categoryOrder').value = category.order;

            // Load skills
            const skillsContainer = document.getElementById('skillsContainer');
            skillsContainer.innerHTML = '';

            if (Array.isArray(category.skills)) {
                category.skills.forEach(skill => {
                    addSkillField(skill.name, skill.level);
                });
            }
        }
    } catch (error) {
        console.error('Error loading skill category:', error);
        showNotification('Erreur lors du chargement', 'error');
    }
}

// Close modal
function closeSkillModal() {
    document.getElementById('skillModal').style.display = 'none';
}

// Add skill field
function addSkillField(name = '', level = '') {
    const skillsContainer = document.getElementById('skillsContainer');
    const skillField = document.createElement('div');
    skillField.className = 'skill-field';
    skillField.innerHTML = `
        <input type="text" class="form-control skill-name" placeholder="Nom de la compétence" value="${name}" required>
        <input type="number" class="form-control skill-level" placeholder="Niveau (0-100)" min="0" max="100" value="${level}" required>
        <button type="button" class="btn-icon btn-danger" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    skillsContainer.appendChild(skillField);
}

// Save skill category
async function saveSkillCategory(event) {
    event.preventDefault();

    const form = event.target;
    const categoryId = form.dataset.categoryId;

    // Get form data
    const title = document.getElementById('categoryName').value;
    const category = document.getElementById('categorySlug').value;
    const icon = document.getElementById('categoryIcon').value;
    const order = parseInt(document.getElementById('categoryOrder').value);

    // Get skills
    const skillFields = document.querySelectorAll('.skill-field');
    const skills = Array.from(skillFields).map(field => ({
        name: field.querySelector('.skill-name').value,
        level: parseInt(field.querySelector('.skill-level').value)
    })).filter(skill => skill.name && skill.level);

    if (skills.length === 0) {
        showNotification('Ajoutez au moins une compétence', 'error');
        return;
    }

    const categoryData = {
        title,
        category,
        icon,
        skills,
        order,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        if (categoryId) {
            // Update existing category
            await db.collection('skills').doc(categoryId).update(categoryData);
            showNotification('Catégorie mise à jour avec succès', 'success');
        } else {
            // Create new category
            categoryData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
            await db.collection('skills').add(categoryData);
            showNotification('Catégorie ajoutée avec succès', 'success');
        }

        closeSkillModal();
        loadSkills();
    } catch (error) {
        console.error('Error saving skill category:', error);
        showNotification('Erreur lors de la sauvegarde', 'error');
    }
}

// Edit skill category
function editSkillCategory(categoryId) {
    showSkillModal(categoryId);
}

// Delete skill category
async function deleteSkillCategory(categoryId, categoryTitle) {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer la catégorie "${categoryTitle}" ?`)) {
        return;
    }

    try {
        await db.collection('skills').doc(categoryId).delete();
        showNotification('Catégorie supprimée avec succès', 'success');
        loadSkills();
    } catch (error) {
        console.error('Error deleting category:', error);
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
    const modal = document.getElementById('skillModal');
    if (event.target === modal) {
        closeSkillModal();
    }
}
