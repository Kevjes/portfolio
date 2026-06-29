// Hero Section JS — Obsidian & Ember
(function () {
    'use strict';

    function initHero() {
        // Smooth scroll for CTA buttons
        document.querySelectorAll('.hero-actions a[href^="#"], .hero-scroll').forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                const target = document.querySelector(el.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Fade scroll indicator when user scrolls
        const scrollEl = document.querySelector('.hero-scroll');
        if (scrollEl) {
            window.addEventListener('scroll', () => {
                scrollEl.style.opacity = window.pageYOffset > 80 ? '0' : '';
            }, { passive: true });
        }

        // Subtle image frame tilt on mouse move (desktop only)
        if (window.innerWidth >= 969) {
            const wrap = document.querySelector('.hero-image-wrap');
            if (wrap) {
                wrap.addEventListener('mousemove', e => {
                    const r = wrap.getBoundingClientRect();
                    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
                    const y = ((e.clientY - r.top)  / r.height - 0.5) * -10;
                    wrap.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg)`;
                });
                wrap.addEventListener('mouseleave', () => {
                    wrap.style.transform = '';
                });
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHero);
    } else {
        initHero();
    }
})();
