// About Section JS — Obsidian & Ember
(function () {
    'use strict';

    function initAbout() {
        animateStats();
        animateLayout();
    }

    function animateStats() {
        const statValues = document.querySelectorAll('.about-stat__n');
        if (!statValues.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                const duration = 1400;
                const step = target / (duration / 16);
                let cur = 0;
                const t = setInterval(() => {
                    cur = Math.min(cur + step, target);
                    el.textContent = Math.round(cur);
                    if (cur >= target) clearInterval(t);
                }, 16);
                observer.unobserve(el);
            });
        }, { threshold: 0.5 });

        statValues.forEach(el => observer.observe(el));
    }

    function animateLayout() {
        const items = document.querySelectorAll('.about-pillar, .about-meta__row');
        if (!items.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (!entry.isIntersecting) return;
                const idx = Array.from(items).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, idx * 60);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.1 });

        items.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(12px)';
            el.style.transition = 'opacity 0.5s var(--ease-out-expo), transform 0.5s var(--ease-out-expo)';
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAbout);
    } else {
        initAbout();
    }
})();
