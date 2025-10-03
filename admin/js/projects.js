// Projects CRUD Operations

// Check authentication
checkAuth().then((user) => {
    if (user) {
        document.getElementById('userEmail').textContent = user.email;
        loadProjects();
    }
});

// Load all projects
async function loadProjects() {
    try {
        const projectsSnapshot = await db.collection('projects')
            .orderBy('order', 'asc')
            .get();

        const projectsList = document.getElementById('projectsList');
        projectsList.innerHTML = '';

        if (projectsSnapshot.empty) {
            projectsList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-folder-open"></i>
                    <p>Aucun projet trouvé</p>
                    <button class="btn btn-primary" onclick="showProjectModal()">
                        <i class="fas fa-plus"></i> Ajouter un projet
                    </button>
                </div>
            `;
            return;
        }

        projectsSnapshot.forEach(doc => {
            const project = doc.data();
            const projectCard = createProjectCard(doc.id, project);
            projectsList.appendChild(projectCard);
        });

    } catch (error) {
        console.error('Error loading projects:', error);
        showNotification('Erreur lors du chargement des projets', 'error');
    }
}

// Create project card
function createProjectCard(id, project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const categories = Array.isArray(project.category) ? project.category.join(', ') : project.category;
    const tags = Array.isArray(project.tags) ? project.tags.join(', ') : '';

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+non+disponible'">
        </div>
        <div class="project-details">
            <h3>${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <span class="badge">${categories}</span>
                <span class="order-badge">Ordre: ${project.order}</span>
            </div>
            <div class="project-tags">
                ${tags}
            </div>
        </div>
        <div class="project-actions">
            <button class="btn-icon" onclick="editProject('${id}')" title="Modifier">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon btn-danger" onclick="deleteProject('${id}', '${project.title}')" title="Supprimer">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    return card;
}

// Show modal for adding/editing project
function showProjectModal(projectId = null) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('projectForm');

    form.reset();

    if (projectId) {
        modalTitle.textContent = 'Modifier le projet';
        loadProjectData(projectId);
        form.dataset.projectId = projectId;
    } else {
        modalTitle.textContent = 'Ajouter un projet';
        delete form.dataset.projectId;
    }

    modal.style.display = 'flex';
}

// Load project data for editing
async function loadProjectData(projectId) {
    try {
        const doc = await db.collection('projects').doc(projectId).get();
        if (doc.exists) {
            const project = doc.data();

            document.getElementById('projectTitle').value = project.title;
            document.getElementById('projectDescription').value = project.description;
            document.getElementById('projectImage').value = project.image;
            document.getElementById('projectOrder').value = project.order;
            document.getElementById('projectFeatured').checked = project.featured || false;

            // Categories
            if (Array.isArray(project.category)) {
                project.category.forEach(cat => {
                    const checkbox = document.querySelector(`input[name="category"][value="${cat}"]`);
                    if (checkbox) checkbox.checked = true;
                });
            }

            // Tags
            if (Array.isArray(project.tags)) {
                document.getElementById('projectTags').value = project.tags.join(', ');
            }

            // Links
            const linksContainer = document.getElementById('projectLinks');
            linksContainer.innerHTML = '';
            if (Array.isArray(project.links)) {
                project.links.forEach(link => {
                    addLinkField(link.type, link.url);
                });
            }
        }
    } catch (error) {
        console.error('Error loading project:', error);
        showNotification('Erreur lors du chargement du projet', 'error');
    }
}

// Close modal
function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Add link field
function addLinkField(type = '', url = '') {
    const linksContainer = document.getElementById('projectLinks');
    const linkField = document.createElement('div');
    linkField.className = 'link-field';
    linkField.innerHTML = `
        <select class="form-control link-type">
            <option value="playstore" ${type === 'playstore' ? 'selected' : ''}>Play Store</option>
            <option value="appstore" ${type === 'appstore' ? 'selected' : ''}>App Store</option>
            <option value="website" ${type === 'website' ? 'selected' : ''}>Site Web</option>
            <option value="github" ${type === 'github' ? 'selected' : ''}>GitHub</option>
        </select>
        <input type="url" class="form-control link-url" placeholder="URL" value="${url}">
        <button type="button" class="btn-icon btn-danger" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    linksContainer.appendChild(linkField);
}

// Save project
async function saveProject(event) {
    event.preventDefault();

    const form = event.target;
    const projectId = form.dataset.projectId;

    // Get form data
    const title = document.getElementById('projectTitle').value;
    const description = document.getElementById('projectDescription').value;
    const image = document.getElementById('projectImage').value;
    const order = parseInt(document.getElementById('projectOrder').value);
    const featured = document.getElementById('projectFeatured').checked;

    // Get selected categories
    const categories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);

    // Get tags
    const tagsInput = document.getElementById('projectTags').value;
    const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);

    // Get links
    const linkFields = document.querySelectorAll('.link-field');
    const links = Array.from(linkFields).map(field => ({
        type: field.querySelector('.link-type').value,
        url: field.querySelector('.link-url').value
    })).filter(link => link.url);

    const projectData = {
        title,
        description,
        image,
        category: categories,
        tags,
        links,
        order,
        featured,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        if (projectId) {
            // Update existing project
            await db.collection('projects').doc(projectId).update(projectData);
            showNotification('Projet mis à jour avec succès', 'success');
        } else {
            // Create new project
            projectData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
            await db.collection('projects').add(projectData);
            showNotification('Projet ajouté avec succès', 'success');
        }

        closeProjectModal();
        loadProjects();
    } catch (error) {
        console.error('Error saving project:', error);
        showNotification('Erreur lors de la sauvegarde', 'error');
    }
}

// Edit project
function editProject(projectId) {
    showProjectModal(projectId);
}

// Delete project
async function deleteProject(projectId, projectTitle) {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer le projet "${projectTitle}" ?`)) {
        return;
    }

    try {
        await db.collection('projects').doc(projectId).delete();
        showNotification('Projet supprimé avec succès', 'success');
        loadProjects();
    } catch (error) {
        console.error('Error deleting project:', error);
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
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
}
