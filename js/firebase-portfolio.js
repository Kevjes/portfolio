// Firebase Portfolio - Dynamic Data Loading

// Firebase Configuration
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
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// Wait for sections to load
document.addEventListener('sectionsLoaded', () => {
    console.log('🔥 Firebase Portfolio: Loading dynamic data...');
    loadAllData();
});

// Load all data from Firestore
async function loadAllData() {
    try {
        await Promise.all([
            loadProjects(),
            loadSkills(),
            loadExperiences()
        ]);
        console.log('✅ All data loaded from Firestore');
    } catch (error) {
        console.error('Error loading data:', error);
        // If Firestore fails, fall back to static content
        console.warn('⚠️ Using static content as fallback');
    }
}

// Load Projects from Firestore
async function loadProjects() {
    try {
        const projectsSnapshot = await db.collection('projects')
            .orderBy('order', 'asc')
            .get();

        if (projectsSnapshot.empty) {
            console.warn('No projects found in Firestore');
            return;
        }

        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        // Clear existing projects
        projectsGrid.innerHTML = '';

        projectsSnapshot.forEach(doc => {
            const project = doc.data();
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });

        // Re-initialize project interactions
        setTimeout(() => {
            if (typeof initProjectsInteractions !== 'undefined') {
                initProjectsInteractions();
            }
        }, 100);

        console.log(`✅ Loaded ${projectsSnapshot.size} projects`);
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Create Project Card Element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = Array.isArray(project.category) ? project.category.join(' ') : project.category || '';

    // Get links
    const playStoreLink = project.links?.find(l => l.type === 'playstore');
    const appStoreLink = project.links?.find(l => l.type === 'appstore');
    const websiteLink = project.links?.find(l => l.type === 'website');
    const githubLink = project.links?.find(l => l.type === 'github');

    // Build overlay links
    let overlayLinks = '';
    if (playStoreLink) {
        overlayLinks += `<a href="${playStoreLink.url}" class="project-link" target="_blank"><i class="fab fa-google-play"></i></a>`;
    }
    if (appStoreLink) {
        overlayLinks += `<a href="${appStoreLink.url}" class="project-link" target="_blank"><i class="fab fa-app-store-ios"></i></a>`;
    }
    if (websiteLink) {
        overlayLinks += `<a href="${websiteLink.url}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>`;
    }
    if (githubLink) {
        overlayLinks += `<a href="${githubLink.url}" class="project-link" target="_blank"><i class="fab fa-github"></i></a>`;
    }

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-overlay">
                ${overlayLinks}
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${Array.isArray(project.tags) ? project.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
            </div>
        </div>
    `;

    return card;
}

// Reinitialize project interactions after dynamic load
function initProjectsInteractions() {
    const projectCards = document.querySelectorAll('.project-card');

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        cardObserver.observe(card);
    });
}

// Load Skills from Firestore
async function loadSkills() {
    try {
        const skillsSnapshot = await db.collection('skills')
            .orderBy('order', 'asc')
            .get();

        if (skillsSnapshot.empty) {
            console.warn('No skills found in Firestore');
            return;
        }

        const skillsCategories = document.querySelector('.skills-categories');
        if (!skillsCategories) return;

        // Clear existing skills
        skillsCategories.innerHTML = '';

        skillsSnapshot.forEach(doc => {
            const skillCategory = doc.data();
            const categoryElement = createSkillCategory(skillCategory);
            skillsCategories.appendChild(categoryElement);
        });

        console.log(`✅ Loaded ${skillsSnapshot.size} skill categories`);
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

// Create Skill Category Element
function createSkillCategory(skillCategory) {
    const category = document.createElement('div');
    category.className = 'skill-category';
    category.dataset.category = skillCategory.category;

    const skillBars = Array.isArray(skillCategory.skills) ? skillCategory.skills.map(skill => `
        <div class="skill-item">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-width="${skill.level}"></div>
            </div>
        </div>
    `).join('') : '';

    category.innerHTML = `
        <div class="category-icon">
            <i class="fas ${skillCategory.icon}"></i>
        </div>
        <h3 class="category-title">${skillCategory.title}</h3>
        <div class="skill-bars">
            ${skillBars}
        </div>
    `;

    return category;
}

// Load Experiences from Firestore
async function loadExperiences() {
    try {
        const experiencesSnapshot = await db.collection('experiences')
            .orderBy('order', 'asc')
            .get();

        if (experiencesSnapshot.empty) {
            console.warn('No experiences found in Firestore');
            return;
        }

        const experienceGrid = document.querySelector('.experience-grid');
        if (!experienceGrid) return;

        // Clear existing experiences
        experienceGrid.innerHTML = '';

        experiencesSnapshot.forEach((doc, index) => {
            const experience = doc.data();
            const experienceElement = createExperienceItem(experience, index);
            experienceGrid.appendChild(experienceElement);
        });

        console.log(`✅ Loaded ${experiencesSnapshot.size} experiences`);
    } catch (error) {
        console.error('Error loading experiences:', error);
    }
}

// Create Experience Item Element
function createExperienceItem(experience, index) {
    const item = document.createElement('div');
    item.className = 'experience-item';
    item.dataset.index = index;

    const tasksList = Array.isArray(experience.tasks) ? experience.tasks.map(task => `
        <li>${task}</li>
    `).join('') : '';

    const tagsList = Array.isArray(experience.tags) ? experience.tags.map(tag => `
        <span class="tag">${tag}</span>
    `).join('') : '';

    item.innerHTML = `
        <div class="experience-number">${String(index + 1).padStart(2, '0')}</div>
        <div class="experience-content">
            <div class="experience-header">
                <div class="experience-period">${experience.period}</div>
                <h3 class="experience-title">${experience.title}</h3>
                <h4 class="experience-company">${experience.company}</h4>
            </div>
            <p class="experience-description">${experience.description}</p>
            <ul class="experience-list">
                ${tasksList}
            </ul>
            <div class="experience-tags">
                ${tagsList}
            </div>
        </div>
    `;

    return item;
}

// Export functions for use in other scripts
window.portfolioData = {
    loadProjects,
    loadSkills,
    loadExperiences,
    reload: loadAllData
};

console.log('🔥 Firebase Portfolio script loaded');
