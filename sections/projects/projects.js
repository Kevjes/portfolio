// Projects Section JS
(function () {
    'use strict';

    // Données des projets — features pour le modal
    const PROJECT_DATA = {
        'WhatsApp Banking': {
            features: [
                'Conception et développement complet de la solution de A à Z',
                'Intégration sécurisée avec le Core Banking System d\'Afriland First Bank',
                '30 000+ utilisateurs actifs avec haute disponibilité',
                'Couches de sécurité strictes conformes aux standards FinTech',
                'Architecture backend Spring Boot haute performance'
            ]
        },
        'First Bank Connect': {
            features: [
                'Application Mobile Banking développée de A à Z en Flutter',
                'Authentification sécurisée multi-facteur (biométrie + PIN)',
                'Consultation de solde, historique et virements en temps réel',
                'Intégration Core Banking Afriland First Bank South Sudan',
                'Interface moderne et accessible, déployée sur Google Play'
            ]
        },
        'PosiaCrea': {
            features: [
                'Développement Fullstack complet (Backend, Frontend, Modélisation)',
                'Génération de texte et d\'image par Intelligence Artificielle (LLM + Vision)',
                'Système de planification et publication automatique sur LinkedIn',
                'Architecture scalable Next.js + API NestJS pour volumes élevés',
                'Gestion multi-compte et analytics de performance des posts'
            ]
        },
        'Assiste-Moi': {
            features: [
                'Architecture Clean Architecture Flutter — testabilité garantie',
                'Gestion d\'état robuste avec GetX et intégrations API fluides',
                'Accès à des ressources pédagogiques enrichies et personnalisées',
                'Déployé sur App Store et Google Play',
                'Interface optimisée pour l\'apprentissage mobile'
            ]
        },
        'Thamani': {
            features: [
                'Plateforme e-commerce 100% Made in Cameroun (NestJS + ReactJS)',
                'Gestion des stocks, entrepôts et livraisons intégrée',
                'Moteur de recherche et catalogue produits dynamique',
                'Tableau de bord vendeur avec analytics temps réel',
                'Système de paiement sécurisé et gestion des commandes'
            ]
        },
        'Hidima': {
            features: [
                'Plateforme de mise en relation services & clients au Cameroun',
                'Géolocalisation des prestataires en temps réel',
                'Système de notation et gestion des avis clients',
                'Disponible sur iOS et Android (Flutter)',
                'Chat intégré entre client et prestataire'
            ]
        },
        'Spideli': {
            features: [
                'Super-app multi-services : livraison, taxi, restauration, e-commerce',
                'Géolocalisation temps réel et tracking de commande',
                'Intégration de multiples flux de paiement',
                'Architecture Flutter modulaire et performante',
                'Déployée et active en Afrique centrale'
            ]
        },
        'Menosi CLI': {
            features: [
                'Outil CLI Node.js de génération de projets avec templates',
                'Support multi-stack : Flutter, NestJS, FastAPI, Next.js',
                'API FastAPI backend pour gestion et versioning des templates',
                'Automatisation des boilerplates — gain de temps significatif',
                'Documentation complète et open source'
            ]
        },
        'Spideli Store': {
            features: [
                'Extension commerçant de la super-app Spideli',
                'Gestion complète de la boutique, des stocks et des commandes',
                'Tableau de bord analytics pour les performances de vente',
                'Intégration temps réel avec la plateforme Spideli client',
                'Interface Flutter optimisée pour les marchands mobiles'
            ]
        },
        'FlexParent': {
            features: [
                'Suivi scolaire en temps réel pour les parents',
                'Communication directe avec les enseignants',
                'Notifications des absences, notes et événements',
                'Gestion des activités parascolaires',
                'Interface Flutter simple et accessible'
            ]
        },
        'GSchool': {
            features: [
                'Plateforme SaaS de gestion scolaire complète',
                'Gestion des notes, absences et emplois du temps',
                'Communication école-parents intégrée',
                'Tableaux de bord administrateur et enseignant',
                'API REST robuste et interface Flutter'
            ]
        }
    };

    function initProjects() {
        if (!document.querySelector('.projects')) return;
        initModal();
        initCardClicks();
        initFilters();
        observeCards();
    }

    // ── Modal ──
    let modal = null;

    function initModal() {
        modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.innerHTML = `
            <div class="project-modal-content">
                <button class="project-modal-close" aria-label="Fermer"><i class="fas fa-times"></i></button>
                <div class="project-modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.project-modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    }

    // Clic sur toute la card → ouvre le modal
    function initCardClicks() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', e => {
                // Si clic sur un lien externe, laisser passer
                if (e.target.closest('a.project-link')) return;
                e.preventDefault();
                openModal(card);
            });
            card.style.cursor = 'pointer';
        });
    }

    function openModal(card) {
        const title       = card.querySelector('.project-title')?.textContent?.trim() || '';
        const cat         = card.querySelector('.project-cat')?.textContent?.trim() || '';
        const description = card.querySelector('.project-description')?.textContent?.trim() || '';
        const tags        = Array.from(card.querySelectorAll('.project-tags .tag')).map(t => t.textContent.trim());
        const imgSrc      = card.querySelector('.project-image img')?.src || '';
        const link        = card.querySelector('a.project-link');
        const features    = (PROJECT_DATA[title] || {}).features || [
            'Architecture moderne et scalable',
            'Interface utilisateur soignée',
            'Performance et maintenabilité',
            'Tests et documentation',
            'Déploiement production'
        ];

        modal.querySelector('.project-modal-body').innerHTML = `
            <div class="pmodal-img">
                <img src="${imgSrc}" alt="${title}">
            </div>
            <div class="pmodal-info">
                <span class="pmodal-cat">${cat}</span>
                <h2 class="pmodal-title">${title}</h2>
                <p class="pmodal-desc">${description}</p>
                <div class="pmodal-section-label">Technologies</div>
                <div class="pmodal-tags">
                    ${tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div class="pmodal-section-label">Points clés</div>
                <ul class="pmodal-features">
                    ${features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                ${link ? `<a href="${link.href}" target="_blank" class="btn btn-primary pmodal-cta">
                    Voir le projet <i class="fas fa-external-link-alt"></i>
                </a>` : ''}
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ── Filtres ──
    function initFilters() {
        const header = document.querySelector('.projects .section-header');
        if (!header) return;

        const filters = [
            { label: 'Tous',       value: 'all' },
            { label: 'Mobile',     value: 'mobile' },
            { label: 'Web',        value: 'web' },
            { label: 'Backend',    value: 'backend' },
            { label: 'IA',         value: 'ai' },
            { label: 'E-commerce', value: 'ecommerce' },
        ];

        const bar = document.createElement('div');
        bar.className = 'project-filter-bar';

        filters.forEach(f => {
            const btn = document.createElement('button');
            btn.className = 'project-filter-btn' + (f.value === 'all' ? ' active' : '');
            btn.dataset.filter = f.value;
            btn.textContent = f.label;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.project-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterCards(f.value);
            });
            bar.appendChild(btn);
        });

        header.appendChild(bar);
    }

    function filterCards(cat) {
        document.querySelectorAll('.project-card').forEach(card => {
            const cats = card.dataset.category || '';
            const show = cat === 'all' || cats.includes(cat);
            card.style.transition = 'opacity 0.3s, transform 0.3s';
            if (show) {
                card.style.opacity = '1';
                card.style.transform = '';
                card.style.pointerEvents = '';
                card.style.display = '';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.97)';
                card.style.pointerEvents = 'none';
                setTimeout(() => { if (card.style.opacity === '0') card.style.display = 'none'; }, 300);
            }
        });
    }

    // ── Scroll reveal ──
    function observeCards() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.project-card').forEach(c => obs.observe(c));
    }

    // Init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProjects);
    } else {
        initProjects();
    }
})();
