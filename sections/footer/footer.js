// Footer JS — Obsidian & Ember
(function () {
    'use strict';

    function initFooter() {
        // Year
        const yearEl = document.getElementById('currentYear');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Scroll-to-top button
        const scrollTopBtn = document.getElementById('scrollTop');
        if (scrollTopBtn) {
            window.addEventListener('scroll', () => {
                scrollTopBtn.classList.toggle('visible', window.pageYOffset > 400);
            }, { passive: true });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Smooth scroll for footer anchor links
        document.querySelectorAll('.footer a[href^="#"]').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Keyboard shortcut Ctrl/Cmd + ↑
        document.addEventListener('keydown', e => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowUp') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }
})();
