// Experience Section JS — Obsidian & Ember
(function () {
    'use strict';

    function initExperience() {
        const items = document.querySelectorAll('.exp-item');
        if (!items.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        items.forEach(item => observer.observe(item));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initExperience);
    } else {
        initExperience();
    }
})();
