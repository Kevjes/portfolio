// Main JavaScript - Global Utilities and Initializations

(function() {
    'use strict';

    // ==================== UTILITIES ====================

    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Check if element is in viewport
    function isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 - offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // ==================== PERFORMANCE ====================

    // Lazy load images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ==================== SMOOTH SCROLL ====================

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==================== ANIMATIONS ====================

    // Reveal elements on scroll
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('[data-reveal]');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    if (entry.target.dataset.revealOnce !== 'false') {
                        revealObserver.unobserve(entry.target);
                    }
                } else {
                    if (entry.target.dataset.revealOnce === 'false') {
                        entry.target.classList.remove('revealed');
                    }
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            el.classList.add('reveal-hidden');
            revealObserver.observe(el);
        });
    }

    // ==================== ACCESSIBILITY ====================

    // Keyboard navigation
    function initKeyboardNavigation() {
        // ESC key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    activeModal.classList.remove('active');
                }

                const activeMobileMenu = document.querySelector('.nav-menu.active');
                if (activeMobileMenu) {
                    activeMobileMenu.classList.remove('active');
                    document.querySelector('.hamburger')?.classList.remove('active');
                }
            }
        });

        // Tab trap for modals
        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;

            const activeModal = document.querySelector('.modal.active');
            if (!activeModal) return;

            const focusableElements = activeModal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        });
    }

    // ==================== PAGE LOADER ====================

    function initPageLoader() {
        window.addEventListener('load', () => {
            const loader = document.querySelector('.page-loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 300);
            }
        });
    }

    // ==================== UTILITIES EXPORT ====================

    // Make utilities available globally
    window.portfolioUtils = {
        debounce,
        throttle,
        isInViewport
    };

    // ==================== ANALYTICS ====================

    function initAnalytics() {
        // Track page view
        console.log('Page viewed:', window.location.pathname);

        // Track clicks on external links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[target="_blank"]');
            if (link) {
                console.log('External link clicked:', link.href);
            }
        });

        // Track form submissions
        document.addEventListener('submit', (e) => {
            if (e.target.tagName === 'FORM') {
                console.log('Form submitted:', e.target.id || 'anonymous-form');
            }
        });
    }

    // ==================== ERROR HANDLING ====================

    function initErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
        });
    }

    // ==================== CONSOLE EASTER EGG ====================

    function showConsoleMessage() {
        const styles = [
            'color: #c59764',
            'font-size: 16px',
            'font-weight: bold',
            'padding: 10px'
        ].join(';');

        console.log('%c👋 Salut développeur!', styles);
        console.log('%cIntéressé par le code? Contactez-moi: kevinjessi10@gmail.com', 'color: #b0b0b0');
        console.log('%c🚀 Built with passion by Kevin Tene', 'color: #c59764');
    }

    // ==================== PERFORMANCE MONITORING ====================

    function initPerformanceMonitoring() {
        if ('PerformanceObserver' in window) {
            // Monitor long tasks
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.duration > 50) {
                        console.warn('Long task detected:', entry.duration + 'ms');
                    }
                }
            });

            try {
                observer.observe({ entryTypes: ['longtask'] });
            } catch (e) {
                // Long task observation not supported
            }
        }

        // Log core web vitals
        if ('web-vitals' in window) {
            // This would require the web-vitals library
            console.log('Performance monitoring initialized');
        }
    }

    // ==================== INITIALIZATION ====================

    function init() {
        console.log('🚀 Portfolio initializing...');

        // Initialize features
        initLazyLoading();
        initSmoothScroll();
        initScrollReveal();
        initKeyboardNavigation();
        initPageLoader();
        initAnalytics();
        initErrorHandling();
        initPerformanceMonitoring();
        showConsoleMessage();

        console.log('✅ Portfolio initialized');
    }

    // Wait for DOM and all sections to be loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // Wait for sections to load
            document.addEventListener('sectionsLoaded', init);
        });
    } else {
        // DOM already loaded, wait for sections
        document.addEventListener('sectionsLoaded', init);
    }

})();

// ==================== GLOBAL HELPERS ====================

// Format phone number
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
}

// Copy to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
}

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Detect mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Get scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
}

// Preload images
function preloadImages(urls) {
    return Promise.all(
        urls.map(url => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(url);
                img.onerror = reject;
                img.src = url;
            });
        })
    );
}
