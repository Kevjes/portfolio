// Experience Section JavaScript - Progressive Display

(function() {
    'use strict';

    function initExperience() {
        const experienceItems = document.querySelectorAll('.experience-item');

        if (!experienceItems.length) return;

        // Intersection Observer for progressive reveal
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add delay based on index for stagger effect
                    const itemIndex = parseInt(entry.target.dataset.index);
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, itemIndex * 200);

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        experienceItems.forEach(item => {
            observer.observe(item);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initExperience);
    } else {
        initExperience();
    }

})();
