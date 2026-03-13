/**
 * i18n.js - Internationalization module for the portfolio
 * Handles English and French translations
 */

(function() {
    'use strict';

    const translations = {
        fr: {
            // Navigation
            'nav_home': 'Accueil',
            'nav_about': 'À propos',
            'nav_skills': 'Compétences',
            'nav_experience': 'Expérience',
            'nav_projects': 'Projets',
            'nav_contact': 'Contact',

            // Hero
            'hero_greeting': 'Bonjour, je suis',
            'hero_role': 'Expert Fullstack Senior & Lead Tech',
            'hero_description': 'Fort de 7 ans d’expertise dans le développement de solutions critiques et d’architectures SI scalables. Spécialiste de la transformation digitale, je conçois des systèmes robustes alliant performance, sécurité et innovation technologique.',
            'hero_cta_contact': 'Parlons de votre projet',
            'hero_cta_projects': 'Voir mes projets',

            // About
            'about_title': 'À propos de moi',
            'about_subtitle': 'Ma mission : transformer vos visions complexes en solutions technologiques robustes.',
            'about_desc_1': 'Fort de 7 années d’expérience, j’accompagne les entreprises dans la transformation de visions complexes en solutions technologiques robustes. Spécialiste du <strong>secteur bancaire</strong> et des environnements à haute exigence, je maîtrise l’ensemble du cycle de vie logiciel : de la modélisation à l\'orchestration <strong>DevOps</strong>, en passant par le développement de backends critiques (Spring Boot, Nest.js) et d\'interfaces modernes (Next.js, Flutter).',
            'about_desc_2': 'Expert <strong>Consultant et Développeur Fullstack/Mobile en remote</strong>, j\'aide aujourd\'hui les entreprises et multinationales dans leur besoin de digitalisation en Afrique. Mon expertise actuelle inclut la maintenance de solutions de <strong>Whatsapp Banking</strong> et la digitalisation de produits financiers complexes pour <strong>Afriland First Bank South Sudan</strong>, tout en aidant d\'autres organisations à scaler leurs infrastructures SI.',
            'about_stat_exp': 'Années d\'Expérience',
            'about_stat_projects': 'Projets Réalisés',
            'about_stat_clients': 'Clients Satisfaits',
            'stat_years': 'Années',
            'stat_projects': 'Projets',
            'stat_clients': 'Clients',
            'about_info_name': 'Nom',
            'about_info_location': 'Localisation',
            'about_info_availability': 'Disponibilité',
            'about_info_sites': 'Sites Web',
            'about_val_location': 'Yaoundé, Cameroun',
            'about_val_availability': 'Freelance / Remote',
            'about_download_cv': 'Télécharger mon CV',
            'about_highlight_banking': 'Solutions Bancaires & SI',
            'about_highlight_fullstack': 'Expert Fullstack & Mobile',
            'about_highlight_devops': 'Orchestration DevOps & Cloud',
            'about_highlight_ai': 'Automatisation & IA Intégrée',

            // Skills
            'skills_title': 'Compétences Techniques',
            'skills_subtitle': 'Un arsenal technologique moderne pour des solutions scalables et performantes.',
            'skills_cat_backend': 'Backend & SI Bancaire',
            'skills_cat_mobile': 'Mobile Engineering',
            'skills_cat_frontend': 'Frontend Moderne',
            'skills_cat_devops': 'DevOps & Architecture',

            // Experience
            'experience_title': 'Expérience Professionnelle',
            'experience_subtitle': 'Un parcours tourné vers l’innovation et l’excellence technique.',
            'exp_present': 'Présent',
            'exp_remote': 'Remote',
            'exp_role_consultant': 'Consultant & Développeur Fullstack (Remote)',
            'exp_desc_afriland_1': 'Maintenance évolutive et sécurisation continue de la solution <strong>Whatsapp Banking</strong>.',
            'exp_desc_afriland_2': 'Digitalisation de nouveaux produits bancaires et accompagnement stratégique sur les flux financiers.',
            'exp_desc_afriland_3': 'Expertise remote sur les architectures backend et mobile pour garantir une haute disponibilité du service.',
            'exp_role_senior': 'Développeur Fullstack Senior',
            'exp_desc_kimia_1': 'Direction technique et supervision de solutions digitales stratégiques dans un environnement IT complexe.',
            'exp_desc_kimia_2': 'Développement de backends bancaires critiques avec <strong>Spring Boot</strong> et orchestration complète du <strong>DevOps</strong> et des déploiements.',
            'exp_desc_kimia_3': 'Mise en place de solutions scalables via <strong>Clean Architecture</strong> et automatisation (IA & CI/CD).',
            'exp_role_lead_sosan': 'Lead Tech & Mobile Engineer',
            'exp_desc_sosan_1': 'Pilotage complet d\'une application mobile innovante spécialisée dans le suivi de santé et les téléconsultations.',
            'exp_desc_sosan_2': 'Mise en œuvre d\'une <strong>Clean Architecture</strong> stricte garantissant testabilité et maintenabilité.',
            'exp_desc_sosan_3': 'Gestion des sprints, encadrement de l\'équipe et intégration robuste de services tiers (API de streaming vidéo).',
            'exp_role_chef': 'Chef de Projet & Expert Backend',
            'exp_desc_menosi_1': 'Supervision dynamique d\'une équipe de 4 développeurs (Mobile et Web) avec livraison régulière de MVP.',
            'exp_desc_menosi_2': 'Conception et développement de microservices backend robustes via <strong>FastAPI</strong>, avec sécurité JWT et asynchronisme.',
            'exp_desc_menosi_3': 'Orchestration de la logique de génération automatisée de documents (CV et rapports).',
            'exp_role_mobile_senior': 'Développeur Mobile Senior',
            'exp_desc_it_1': 'Refonte et optimisation de flux applicatifs complexes pour l\'industrie bancaire et financière.',
            'exp_desc_it_2': 'Intégration de pipelines CI/CD, amélioration sensible des performances d\'affichage de composants Flutter lourds.',
            'exp_desc_it_3': 'Transmission de savoir et mise en place de revues de code systématiques limitant l\'introduction de bugs.',
            'exp_role_mobile_dev': 'Développeur Mobile',
            'exp_desc_gohze_1': 'Conception de A à Z d\'applications mobiles répondant à des problématiques métier diverses.',
            'exp_desc_gohze_2': 'Forte collaboration avec les équipes Design (UI/UX) pour garantir une expérience utilisateur fluide.',
            'exp_desc_gohze_3': 'Maîtrise progressive du cycle de vie de développement logiciel et des déploiements sur l\'App Store et Play Store.',
            'exp_period_afriland': 'Janvier 2026 - Présent',
            'exp_period_kimia': 'Août 2025 - Février 2026',
            'exp_period_sosan': 'Mai 2025 - Octobre 2025',
            'exp_period_menosi': 'Nov. 2023 - Juin 2025',
            'exp_period_it': 'Août 2022 - Nov. 2023',
            'exp_period_gohze': 'Mars 2020 - Juillet 2022',

            // Projects
            'projects_title': 'Projets Récents',
            'projects_subtitle': 'Découvrez une sélection de mes réalisations les plus marquantes.',
            'filter_all': 'Tous',
            'filter_web': 'Web',
            'filter_mobile': 'Mobile',
            'filter_backend': 'Backend',
            'filter_ai': 'IA',

            // Contact
            'contact_title': 'Contactez-moi',
            'contact_subtitle': 'Vous avez un projet en tête ? Discutons-en !',
            'contact_info_loc': 'Yaoundé, Cameroun',
            'contact_form_name': 'Votre nom',
            'contact_form_email': 'Votre email',
            'contact_form_subject': 'Sujet',
            'contact_form_message': 'Votre message',
            'contact_btn_send': 'Envoyer le message',
            'contact_status_redirect': 'Redirection vers WhatsApp...',
            'contact_status_error': 'Veuillez corriger les erreurs',

            // Footer
            'footer_desc': 'Développeur Fullstack Senior spécialisé dans la création de solutions digitales innovantes et scalables pour le secteur bancaire et au-delà.',
            'footer_links': 'Liens Rapides',
            'footer_follow': 'Suivez-moi',
            'footer_rights': 'Tous droits réservés.',
            'footer_stat_proj': 'Projets',
            'footer_stat_clients': 'Clients',
            'footer_stat_exp': 'Expertise',
            'footer_services_title': 'Services',
            'footer_service_mobile': 'Développement Mobile',
            'footer_service_web': 'Applications Web',
            'footer_service_api': 'API Backend',
            'footer_service_devops': 'Consulting DevOps',
            'footer_service_lead': 'Leadership Tech',

            // Tags
            'tag_chatbot': 'Chatbot IA',
            'tag_fintech': 'FinTech',
            'tag_security': 'Sécurité Strict',
            'tag_clean_arch': 'Clean Architecture',
            'tag_ai_nlpv': 'IA (NLP/Vision)',
            'tag_automation': 'Automatisation',
            'tag_marketplace': 'Marketplace',
            'tag_geo': 'Géolocalisation',
            'tag_school_mgmt': 'Gestion Scolaire',
            'tag_dashboard': 'Dashboard',
            'tag_multi_services': 'Multi-Services',
            'tag_realtime': 'Temps Réel',
            'tag_banking_digital': 'Digitalisation Bancaire',
            'tag_remote_expert': 'Expert Remote',
            'tag_si_arch': 'Architecture SI',

            // Project Descriptions
            'proj_desc_whatsapp': 'Solution bancaire sur WhatsApp conçue de A à Z pour Afriland First Bank South Sudan. Plus de 30 000 utilisateurs, avec des couches strictes de sécurité.',
            'proj_desc_assiste': 'Plateforme éducative innovante facilitant l\'accès aux ressources pédagogiques. Mission : donner à chaque apprenant les moyens de réussir.',
            'proj_desc_posia': 'Assistant IA pour LinkedIn professionnel. Génère, planifie et publie automatiquement des posts personnalisés reflétant votre voix unique.',
            'proj_desc_hidima': 'Plateforme mobile connectant prestataires de services et clients camerounais. Disponible sur iOS et Android.',
            'proj_desc_spideli': 'Plateforme de livraison multi-services en Afrique. Une app, mille services : livraison, taxi, restauration, e-commerce.',
            'proj_desc_menosi': 'Outil en ligne de commande pour la génération et gestion de projets avec templates personnalisables.',
            'proj_desc_spideli_store': 'Extension e-commerce de Spideli permettant aux commerçants de gérer leur boutique et leurs commandes.',
            'proj_desc_flex': 'Application mobile pour parents permettant le suivi scolaire, communication avec enseignants et gestion des activités.',
            'proj_desc_gschool': 'Plateforme de gestion scolaire complète : notes, absences, emplois du temps et communication école-parents.'
        },
        en: {
            // Navigation
            'nav_home': 'Home',
            'nav_about': 'About',
            'nav_skills': 'Skills',
            'nav_experience': 'Experience',
            'nav_projects': 'Projects',
            'nav_contact': 'Contact',

            // Hero
            'hero_greeting': "Hello, I'm",
            'hero_role': 'Senior Fullstack Expert & Tech Lead',
            'hero_description': 'With 7 years of expertise in developing critical solutions and scalable IS architectures. Digital transformation specialist, I design robust systems combining performance, security, and technological innovation.',
            'hero_cta_contact': "Let's talk about your project",
            'hero_cta_projects': 'View my projects',

            // About
            'about_title': 'About Me',
            'about_subtitle': 'My mission: transforming your complex visions into robust technological solutions.',
            'about_desc_1': 'With 7 years of experience, I support companies in transforming complex visions into robust technological solutions. Specialist in the <strong>banking sector</strong> and high-demand environments, I master the entire software life cycle: from modeling to <strong>DevOps orchestration</strong>, including the development of critical backends (Spring Boot, Nest.js) and modern interfaces (Next.js, Flutter).',
            'about_desc_2': 'Expert <strong>Remote Fullstack/Mobile Consultant and Developer</strong>, I now help companies and multinationals with their digitalization needs in Africa. My current expertise includes maintenance of <strong>Whatsapp Banking</strong> solutions and digitalization of complex financial products for <strong>Afriland First Bank South Sudan</strong>, while helping other organizations scale their IS infrastructures.',
            'about_stat_exp': 'Years of Experience',
            'about_stat_projects': 'Projects Completed',
            'about_stat_clients': 'Satisfied Clients',
            'stat_years': 'Years',
            'stat_projects': 'Projects',
            'stat_clients': 'Clients',
            'about_info_name': 'Name',
            'about_info_location': 'Location',
            'about_info_availability': 'Availability',
            'about_info_sites': 'Websites',
            'about_val_location': 'Yaoundé, Cameroon',
            'about_val_availability': 'Freelance / Remote',
            'about_download_cv': 'Download my CV',
            'about_highlight_banking': 'Banking & IS Solutions',
            'about_highlight_fullstack': 'Fullstack & Mobile Expert',
            'about_highlight_devops': 'DevOps & Cloud Orchestration',
            'about_highlight_ai': 'Automation & Integrated AI',

            // Skills
            'skills_title': 'Technical Skills',
            'skills_subtitle': 'A modern technological arsenal for scalable and high-performance solutions.',
            'skills_cat_backend': 'Backend & Banking IS',
            'skills_cat_mobile': 'Mobile Engineering',
            'skills_cat_frontend': 'Modern Frontend',
            'skills_cat_devops': 'DevOps & Architecture',

            // Experience
            'experience_title': 'Professional Experience',
            'experience_subtitle': 'A career focused on innovation and technical excellence.',
            'exp_present': 'Present',
            'exp_remote': 'Remote',
            'exp_role_consultant': 'Fullstack Consultant & Developer (Remote)',
            'exp_desc_afriland_1': 'Evolutionary maintenance and continuous security of the <strong>Whatsapp Banking</strong> solution.',
            'exp_desc_afriland_2': 'Digitalization of new banking products and strategic support for financial flows.',
            'exp_desc_afriland_3': 'Remote expertise on backend and mobile architectures to ensure high service availability.',
            'exp_role_senior': 'Senior Fullstack Developer',
            'exp_desc_kimia_1': 'Technical direction and supervision of strategic digital solutions in a complex IT environment.',
            'exp_desc_kimia_2': 'Development of critical banking backends with <strong>Spring Boot</strong> and complete orchestration of <strong>DevOps</strong> and deployments.',
            'exp_desc_kimia_3': 'Implementation of scalable solutions via <strong>Clean Architecture</strong> and automation (AI & CI/CD).',
            'exp_role_lead_sosan': 'Lead Tech & Mobile Engineer',
            'exp_desc_sosan_1': 'Complete management of an innovative mobile application specialized in health tracking and teleconsultations.',
            'exp_desc_sosan_2': 'Implementation of a strict <strong>Clean Architecture</strong> ensuring testability and maintainability.',
            'exp_desc_sosan_3': 'Sprint management, team supervision, and robust integration of third-party services (video streaming API).',
            'exp_role_chef': 'Project Manager & Backend Expert',
            'exp_desc_menosi_1': 'Dynamic supervision of a team of 4 developers (Mobile and Web) with regular MVP delivery.',
            'exp_desc_menosi_2': 'Design and development of robust backend microservices via <strong>FastAPI</strong>, with JWT security and asynchronism.',
            'exp_desc_menosi_3': 'Orchestration of automated document generation logic (CVs and reports).',
            'exp_role_mobile_senior': 'Senior Mobile Developer',
            'exp_desc_it_1': 'Redesign and optimization of complex application flows for the banking and financial industry.',
            'exp_desc_it_2': 'Integration of CI/CD pipelines, significant performance improvement of heavy Flutter components display.',
            'exp_desc_it_3': 'Knowledge transmission and implementation of systematic code reviews limiting bug introduction.',
            'exp_role_mobile_dev': 'Mobile Developer',
            'exp_desc_gohze_1': 'End-to-end design of mobile applications responding to various business issues.',
            'exp_desc_gohze_2': 'Strong collaboration with Design teams (UI/UX) to ensure a smooth user experience.',
            'exp_desc_gohze_3': 'Progressive mastery of the software development life cycle and deployments on the App Store and Play Store.',
            'exp_period_afriland': 'January 2026 - Present',
            'exp_period_kimia': 'August 2025 - February 2026',
            'exp_period_sosan': 'May 2025 - October 2025',
            'exp_period_menosi': 'Nov. 2023 - June 2025',
            'exp_period_it': 'August 2022 - Nov. 2023',
            'exp_period_gohze': 'March 2020 - July 2022',

            // Projects
            'projects_title': 'Recent Projects',
            'projects_subtitle': 'Discover a selection of my most significant achievements.',
            'filter_all': 'All',
            'filter_web': 'Web',
            'filter_mobile': 'Mobile',
            'filter_backend': 'Backend',
            'filter_ai': 'AI',

            // Contact
            'contact_title': 'Contact Me',
            'contact_subtitle': 'Have a project in mind? Let\'s talk!',
            'contact_info_loc': 'Yaoundé, Cameroon',
            'contact_form_name': 'Your name',
            'contact_form_email': 'Your email',
            'contact_form_subject': 'Subject',
            'contact_form_message': 'Your message',
            'contact_btn_send': 'Send message',
            'contact_status_redirect': 'Redirecting to WhatsApp...',
            'contact_status_error': 'Please correct the errors',

            // Footer
            'footer_desc': 'Senior Fullstack Developer specialized in creating innovative and scalable digital solutions for the banking sector and beyond.',
            'footer_links': 'Quick Links',
            'footer_follow': 'Follow Me',
            'footer_rights': 'All rights reserved.',
            'footer_stat_proj': 'Projects',
            'footer_stat_clients': 'Clients',
            'footer_stat_exp': 'Expertise',
            'footer_services_title': 'Services',
            'footer_service_mobile': 'Mobile Development',
            'footer_service_web': 'Web Applications',
            'footer_service_api': 'Backend API',
            'footer_service_devops': 'DevOps Consulting',
            'footer_service_lead': 'Tech Leadership',

            // Tags
            'tag_chatbot': 'AI Chatbot',
            'tag_fintech': 'FinTech',
            'tag_security': 'Strict Security',
            'tag_clean_arch': 'Clean Architecture',
            'tag_ai_nlpv': 'AI (NLP/Vision)',
            'tag_automation': 'Automation',
            'tag_marketplace': 'Marketplace',
            'tag_geo': 'Geolocation',
            'tag_school_mgmt': 'School Management',
            'tag_dashboard': 'Dashboard',
            'tag_multi_services': 'Multi-Services',
            'tag_realtime': 'Real-time',
            'tag_banking_digital': 'Banking Digitalization',
            'tag_remote_expert': 'Remote Expert',
            'tag_si_arch': 'IS Architecture',

            // Project Descriptions
            'proj_desc_whatsapp': 'WhatsApp banking solution designed from scratch for Afriland First Bank South Sudan. Over 30,000 users, with strict security layers.',
            'proj_desc_assiste': 'Innovative educational platform facilitating access to teaching resources. Mission: empowering every learner to succeed.',
            'proj_desc_posia': 'AI assistant for professional LinkedIn. Automatically generates, schedules, and publishes personalized posts reflecting your unique voice.',
            'proj_desc_hidima': 'Mobile platform connecting service providers and Cameroonian clients. Available on iOS and Android.',
            'proj_desc_spideli': 'Multi-service delivery platform in Africa. One app, a thousand services: delivery, taxi, dining, e-commerce.',
            'proj_desc_menosi': 'Command-line tool for generating and managing projects with customizable templates.',
            'proj_desc_spideli_store': 'Spideli e-commerce extension allowing merchants to manage their shop and orders.',
            'proj_desc_flex': 'Mobile app for parents allowing school tracking, communication with teachers, and activity management.',
            'proj_desc_gschool': 'Complete school management platform: grades, absences, schedules, and school-parent communication.'
        }
    };

    class I18n {
        constructor() {
            this.currentLanguage = localStorage.getItem('portfolio_lang') || 'fr';
            this.init();
        }

        init() {
            document.addEventListener('sectionsLoaded', () => {
                this.updateDOM();
            });
        }

        changeLanguage(lang) {
            if (translations[lang]) {
                this.currentLanguage = lang;
                this.updateDOM();
                localStorage.setItem('portfolio_lang', lang);
                
                // Update HTML lang attribute
                document.documentElement.setAttribute('lang', lang);
                
                // Dispatch event in case other components need to know
                document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
            }
        }

        t(key) {
            return translations[this.currentLanguage][key] || key;
        }

        updateDOM() {
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                const translation = this.t(key);
                
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.innerHTML = translation;
                }
            });

            // Update page title if needed
            if (this.currentLanguage === 'en') {
                document.title = 'Kevin Tene - Fullstack Developer Portfolio';
            } else {
                document.title = 'Kevin Tene - Portfolio Développeur Fullstack';
            }
        }
    }

    // Expose to window
    window.i18n = new I18n();

})();
