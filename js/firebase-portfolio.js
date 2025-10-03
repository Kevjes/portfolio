// Firebase Configuration for Portfolio (Frontend)
const firebaseConfig = {
  apiKey: "AIzaSyA5CAKLdJhjLKYJRZD44t40E4rujoibnHo",
  authDomain: "kevin-portfolio-ff759.firebaseapp.com",
  projectId: "kevin-portfolio-ff759",
  storageBucket: "kevin-portfolio-ff759.firebasestorage.app",
  messagingSenderId: "375485286350",
  appId: "1:375485286350:web:1d05bfb69f7975e985cd9f",
  measurementId: "G-TX04ZCSQ3G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Load projects from Firestore
async function loadProjectsFromFirebase() {
    try {
        const snapshot = await db.collection('projects').orderBy('createdAt', 'desc').get();

        if (snapshot.empty) {
            console.log('No projects in Firestore, using static content');
            return;
        }

        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';

        snapshot.forEach(doc => {
            const project = doc.data();
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });

        // Re-initialize animations
        if (typeof initProjectsAnimations === 'function') {
            initProjectsAnimations();
        }
    } catch (error) {
        console.error('Error loading projects from Firebase:', error);
    }
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category || '');

    const tags = Array.isArray(project.tags) ? project.tags : [];
    const links = Array.isArray(project.links) ? project.links : [];

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.imageUrl}" alt="${project.title}">
            <div class="project-overlay">
                ${links.map(link => `
                    <a href="${link.url}" class="project-link" target="_blank">
                        <i class="${link.icon}"></i>
                    </a>
                `).join('')}
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

// Load skills from Firestore
async function loadSkillsFromFirebase() {
    try {
        const snapshot = await db.collection('skills').orderBy('category').get();

        if (snapshot.empty) {
            console.log('No skills in Firestore, using static content');
            return;
        }

        // Group skills by category
        const skillsByCategory = {};
        snapshot.forEach(doc => {
            const skill = doc.data();
            if (!skillsByCategory[skill.category]) {
                skillsByCategory[skill.category] = [];
            }
            skillsByCategory[skill.category].push(skill);
        });

        const skillsContainer = document.querySelector('.skills-categories');
        if (!skillsContainer) return;

        skillsContainer.innerHTML = '';

        for (const [category, skills] of Object.entries(skillsByCategory)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';

            const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
            categoryDiv.innerHTML = `
                <h3 class="category-title">${categoryTitle}</h3>
                <div class="skills-grid">
                    ${skills.map(skill => `
                        <div class="skill-item">
                            ${skill.icon ? `<i class="${skill.icon}"></i>` : ''}
                            <span class="skill-name">${skill.name}</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: ${skill.level}%"></div>
                            </div>
                            <span class="skill-level">${skill.level}%</span>
                        </div>
                    `).join('')}
                </div>
            `;

            skillsContainer.appendChild(categoryDiv);
        }
    } catch (error) {
        console.error('Error loading skills from Firebase:', error);
    }
}

// Load experiences from Firestore
async function loadExperiencesFromFirebase() {
    try {
        const snapshot = await db.collection('experiences').orderBy('createdAt', 'desc').get();

        if (snapshot.empty) {
            console.log('No experiences in Firestore, using static content');
            return;
        }

        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        timeline.innerHTML = '';

        snapshot.forEach((doc, index) => {
            const exp = doc.data();
            const technologies = Array.isArray(exp.technologies) ? exp.technologies : [];

            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3 class="experience-title">${exp.title}</h3>
                    <h4 class="experience-company">${exp.company}</h4>
                    <p class="experience-period">${exp.period}</p>
                    <p class="experience-description">${exp.description}</p>
                    ${technologies.length > 0 ? `
                        <div class="experience-tags">
                            ${technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            `;

            timeline.appendChild(item);
        });
    } catch (error) {
        console.error('Error loading experiences from Firebase:', error);
    }
}

// Initialize Firebase data loading
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for sections to load
    setTimeout(() => {
        loadProjectsFromFirebase();
        loadSkillsFromFirebase();
        loadExperiencesFromFirebase();
    }, 1000);
});
