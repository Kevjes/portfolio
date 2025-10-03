// Projects Section JavaScript
(function() {
    'use strict';

    // Initialize projects section
    function initProjects() {
        const projectsSection = document.querySelector('.projects');
        const projectCards = document.querySelectorAll('.project-card');

        if (!projectsSection) return;

        // Intersection Observer for scroll animations
        observeProjectCards();

        // Add modal functionality
        initProjectModals();

        // Add filter functionality
        initProjectFilters();

        // Add parallax effect
        if (window.innerWidth > 768) {
            addParallaxEffect();
        }

        // Add hover tilt effect
        addTiltEffect();

        // Add lazy loading for images
        lazyLoadImages();
    }

    // Observe project cards for scroll animations
    function observeProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');

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

    // Initialize project modals
    function initProjectModals() {
        const projectCards = document.querySelectorAll('.project-card');
        const infoButtons = document.querySelectorAll('.project-info-btn');

        // Create modal container
        const modal = createModal();
        document.body.appendChild(modal);

        infoButtons.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = projectCards[index];
                showProjectModal(card, modal);
            });
        });

        // Close modal on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    }

    // Create modal element
    function createModal() {
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.innerHTML = `
            <div class="project-modal-content">
                <button class="project-modal-close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="project-modal-body"></div>
            </div>
        `;

        const closeBtn = modal.querySelector('.project-modal-close');
        closeBtn.addEventListener('click', () => closeModal(modal));

        return modal;
    }

    // Show project modal
    function showProjectModal(card, modal) {
        const title = card.querySelector('.project-title').textContent;
        const description = card.querySelector('.project-description').textContent;
        const tags = Array.from(card.querySelectorAll('.project-tags .tag'))
            .map(tag => tag.textContent);
        const image = card.querySelector('.project-image img').src;

        const modalBody = modal.querySelector('.project-modal-body');
        modalBody.innerHTML = `
            <div class="modal-image" style="margin-bottom: 30px; border-radius: 15px; overflow: hidden;">
                <img src="${image}" alt="${title}" style="width: 100%; height: auto; display: block;">
            </div>
            <h2 style="font-size: 32px; color: #c59764; margin-bottom: 20px;">${title}</h2>
            <p style="font-size: 16px; line-height: 1.8; color: #b0b0b0; margin-bottom: 25px;">${description}</p>
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 18px; color: #e0e0e0; margin-bottom: 15px;">Technologies utilisées</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    ${tags.map(tag => `
                        <span style="padding: 8px 16px; background: rgba(197, 151, 100, 0.1);
                                     border: 1px solid rgba(197, 151, 100, 0.3); border-radius: 20px;
                                     font-size: 13px; color: #c59764; font-weight: 600;">${tag}</span>
                    `).join('')}
                </div>
            </div>
            <div style="margin-top: 30px;">
                <h3 style="font-size: 18px; color: #e0e0e0; margin-bottom: 15px;">Caractéristiques principales</h3>
                <ul style="list-style: none; padding: 0;">
                    ${generateFeatures(title).map(feature => `
                        <li style="padding: 10px 0 10px 25px; position: relative; color: #9a9a9a; line-height: 1.6;">
                            <i class="fas fa-check-circle" style="position: absolute; left: 0; color: #c59764;"></i>
                            ${feature}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Generate features based on project title
    function generateFeatures(title) {
        const features = {
            'Sosan Med': [
                'Téléconsultation en temps réel avec vidéo HD',
                'Gestion intelligente des rendez-vous',
                'Prescriptions électroniques sécurisées',
                'Historique médical complet',
                'Notifications push en temps réel'
            ],
            'Générateur de CV': [
                'Interface intuitive de création de CV',
                'Multiples templates professionnels',
                'Export PDF haute qualité',
                'Système de gestion utilisateur',
                'API RESTful complète'
            ],
            'GPS Pour Tous': [
                'Géolocalisation en temps réel',
                'Système de matching intelligent',
                'Paiement intégré sécurisé',
                'Historique des trajets',
                'Chat en temps réel'
            ],
            'Chatbot WhatsApp': [
                'Réponses automatisées 24/7',
                'Intelligence artificielle avancée',
                'Intégration multi-plateformes',
                'Analytics et reporting',
                'Support multilingue'
            ],
            'Marketplace Mobile': [
                'Catalogue produits dynamique',
                'Panier et commandes en ligne',
                'Multiples méthodes de paiement',
                'Suivi de livraison en temps réel',
                'Système de notation et avis'
            ],
            'Application Bancaire': [
                'Sécurité bancaire renforcée',
                'Transactions instantanées',
                'Virements et paiements',
                'Gestion multi-comptes',
                'Notifications de transactions'
            ]
        };

        return features[title] || [
            'Architecture moderne et scalable',
            'Interface utilisateur intuitive',
            'Performance optimisée',
            'Tests automatisés',
            'Documentation complète'
        ];
    }

    // Initialize project filters
    function initProjectFilters() {
        const projectsSection = document.querySelector('.projects');
        const container = projectsSection.querySelector('.container');
        const sectionHeader = projectsSection.querySelector('.section-header');

        // Create filter container
        const filterContainer = document.createElement('div');
        filterContainer.className = 'project-filters';
        filterContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 35px;
            flex-wrap: wrap;
        `;

        const filters = [
            { label: 'Tous', value: 'all' },
            { label: 'Mobile', value: 'mobile' },
            { label: 'Web', value: 'web' },
            { label: 'Backend', value: 'backend' },
            { label: 'E-commerce', value: 'ecommerce' }
        ];

        filters.forEach(filter => {
            const button = document.createElement('button');
            button.textContent = filter.label;
            button.className = 'filter-btn' + (filter.value === 'all' ? ' active' : '');
            button.dataset.filter = filter.value;
            button.style.cssText = `
                padding: 10px 22px;
                background: ${filter.value === 'all' ? 'linear-gradient(135deg, #c59764, #d4af37)' : 'rgba(197, 151, 100, 0.1)'};
                color: ${filter.value === 'all' ? '#0a0a0a' : '#c59764'};
                border: 2px solid ${filter.value === 'all' ? '#c59764' : 'rgba(197, 151, 100, 0.3)'};
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                font-size: 13px;
                transition: all 0.3s ease;
            `;

            button.addEventListener('click', () => filterProjects(filter.value, button));
            filterContainer.appendChild(button);
        });

        sectionHeader.appendChild(filterContainer);
    }

    // Filter projects
    function filterProjects(category, activeButton) {
        const projectCards = document.querySelectorAll('.project-card');
        const filterButtons = document.querySelectorAll('.filter-btn');

        // Update button states
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.background = 'rgba(197, 151, 100, 0.1)';
            btn.style.color = '#c59764';
            btn.style.borderColor = 'rgba(197, 151, 100, 0.3)';
        });

        activeButton.classList.add('active');
        activeButton.style.background = 'linear-gradient(135deg, #c59764, #d4af37)';
        activeButton.style.color = '#0a0a0a';
        activeButton.style.borderColor = '#c59764';

        // Filter cards
        projectCards.forEach(card => {
            const cardCategories = card.dataset.category || '';

            if (category === 'all' || cardCategories.includes(category)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px) scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add parallax effect
    function addParallaxEffect() {
        const projectsSection = document.querySelector('.projects');
        const projectCards = document.querySelectorAll('.project-card');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const sectionTop = projectsSection.offsetTop;
            const sectionHeight = projectsSection.offsetHeight;

            if (scrolled > sectionTop - window.innerHeight &&
                scrolled < sectionTop + sectionHeight) {

                projectCards.forEach((card, index) => {
                    const speed = 0.2 + (index % 3) * 0.1;
                    const yPos = (scrolled - sectionTop) * speed * 0.05;

                    if (card.classList.contains('animate-in')) {
                        card.style.transform = `translateY(${yPos}px)`;
                    }
                });
            }
        });
    }

    // Add 3D tilt effect on hover
    function addTiltEffect() {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // Lazy load images
    function lazyLoadImages() {
        const images = document.querySelectorAll('.project-image img');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.animation = 'projectImageLoad 0.6s ease-out';
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add count animation
    function addProjectCounter() {
        const projectsSection = document.querySelector('.projects');
        const projectCards = document.querySelectorAll('.project-card');

        const counter = document.createElement('div');
        counter.style.cssText = `
            text-align: center;
            margin-top: 50px;
            font-size: 18px;
            color: #c59764;
            font-weight: 600;
        `;
        counter.innerHTML = `
            <span style="font-size: 48px; font-weight: 700; display: block; margin-bottom: 10px;">
                ${projectCards.length}+
            </span>
            Projets réalisés avec succès
        `;

        projectsSection.querySelector('.container').appendChild(counter);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initProjects();
            addProjectCounter();
        });
    } else {
        initProjects();
        addProjectCounter();
    }

})();
