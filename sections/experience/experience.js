// Experience Section JS — Obsidian & Ember
(function () {
    'use strict';

    function initExperience() {
        const items = document.querySelectorAll('.exp-item');
        if (!items.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const idx = parseInt(entry.target.dataset.index) || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, idx * 120);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        items.forEach(item => observer.observe(item));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initExperience);
    } else {
        initExperience();
    }
})();
