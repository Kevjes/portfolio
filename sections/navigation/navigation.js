// Navigation JavaScript

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Active section highlighting
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();
}

// Scroll progress indicator
function initScrollProgress() {
    const progress = document.getElementById('navProgress');
    if (!progress) return;

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / scrollHeight) * 100;
        progress.style.width = scrolled + '%';
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Logo click scrolls to top
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Language switcher
function initLangSwitcher() {
    const wrapper = document.querySelector('.lang-selector-wrapper');
    const currentBtn = document.getElementById('langCurrent');
    const options = document.querySelectorAll('.lang-option');
    const currentFlag = document.getElementById('currentFlag');
    const currentLabel = document.getElementById('currentLangLabel');

    if (!wrapper || !currentBtn) return;

    // Toggle dropdown
    currentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        wrapper.classList.toggle('active');
    });

    // Handle language change
    options.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            const flagSrc = option.querySelector('img').src;
            
            // Update UI
            currentFlag.src = flagSrc;
            currentLabel.textContent = lang.toUpperCase();
            
            // Highlight active option
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // Dispatch event to i18n
            if (window.i18n) {
                window.i18n.changeLanguage(lang);
            }
            
            // Save preference
            localStorage.setItem('portfolio_lang', lang);
            
            // Close dropdown
            wrapper.classList.remove('active');
        });
    });

    // Close on click outside
    document.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    // Initialize from saved preference
    const savedLang = localStorage.getItem('portfolio_lang') || 'fr';
    const activeOption = document.querySelector(`.lang-option[data-lang="${savedLang}"]`);
    if (activeOption) {
        options.forEach(opt => opt.classList.remove('active'));
        activeOption.classList.add('active');
        currentFlag.src = activeOption.querySelector('img').src;
        currentLabel.textContent = savedLang.toUpperCase();
    }
}

// Hide navbar on scroll down, show on scroll up
let lastScroll = 0;
function initHideNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}

// Initialize all navigation features
function initNavigation() {
    initMobileMenu();
    initNavbarScroll();
    initActiveSection();
    initScrollProgress();
    initSmoothScroll();
    initLangSwitcher();
    // initHideNavbar(); // Uncomment if you want auto-hide navbar
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}
