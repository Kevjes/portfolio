// Footer JavaScript

// Set current year
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Scroll to top button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Footer links smooth scroll
function initFooterLinks() {
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');

    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animate footer stats on scroll
function initFooterStatsAnimation() {
    const stats = document.querySelectorAll('.footer-stat');
    if (!stats.length) return;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        stat.style.transition = 'all 0.5s ease';
        observer.observe(stat);
    });
}

// Social buttons hover effect
function initSocialButtonsEffect() {
    const socialBtns = document.querySelectorAll('.social-btn');

    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(360deg)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
}

// Footer navigation links hover effect
function initFooterNavHover() {
    const navLinks = document.querySelectorAll('.footer-links ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(10px)';
            }
        });

        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });
}

// Footer services hover effect
function initServicesHover() {
    const services = document.querySelectorAll('.footer-services ul li');

    services.forEach(service => {
        service.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(360deg)';
                icon.style.transition = 'transform 0.5s ease';
            }
        });

        service.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Animate footer sections on scroll
function initFooterAnimation() {
    const footerSections = document.querySelectorAll('.footer-logo, .footer-links, .footer-services, .footer-social');
    if (!footerSections.length) return;

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    footerSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// Copy email/phone on click
function initCopyContact() {
    const contactItems = document.querySelectorAll('.footer-contact p');

    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.title = 'Cliquer pour copier';

        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            const textToCopy = text.replace(/[📧📱📍]/g, '').trim();

            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show copied feedback
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copié !';
                this.style.color = 'var(--gold)';

                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Erreur de copie:', err);
            });
        });
    });
}

// Keyboard shortcut for scroll to top (Ctrl/Cmd + ↑)
function initKeyboardShortcut() {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowUp') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

// Initialize all footer features
function initFooter() {
    setCurrentYear();
    initScrollToTop();
    initFooterLinks();
    initFooterStatsAnimation();
    initSocialButtonsEffect();
    initFooterNavHover();
    initServicesHover();
    initFooterAnimation();
    initCopyContact();
    initKeyboardShortcut();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
