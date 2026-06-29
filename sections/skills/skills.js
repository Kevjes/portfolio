// Skills JS
(function () {
    'use strict';

    function initSkills() {
        const blocks = document.querySelectorAll('.skill-block');
        if (!blocks.length) return;

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const block = entry.target;
                const idx = Array.from(blocks).indexOf(block);

                setTimeout(() => {
                    block.classList.add('animate-in');
                    block.querySelectorAll('.skill-fill').forEach((bar, i) => {
                        const w = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.setProperty('--progress-width', w + '%');
                            bar.style.width = w + '%';
                            animatePct(bar, parseInt(w));
                        }, i * 150);
                    });
                }, idx * 70);

                obs.unobserve(block);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        blocks.forEach(b => obs.observe(b));
    }

    function animatePct(bar, target) {
        const el = bar.closest('.skill-bar-item')?.querySelector('.skill-pct');
        if (!el) return;
        const step = target / (1200 / 16);
        let cur = 0;
        const t = setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = Math.round(cur) + '%';
            if (cur >= target) clearInterval(t);
        }, 16);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSkills);
    } else {
        initSkills();
    }
})();
