// Skills Section JavaScript
(function() {
    'use strict';

    // Initialize skills animations
    function initSkills() {
        const skillsSection = document.querySelector('.skills');
        const skillCategories = document.querySelectorAll('.skill-category');
        const skillProgressBars = document.querySelectorAll('.skill-progress');

        if (!skillsSection) return;

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const categoryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = Array.from(skillCategories).indexOf(entry.target) * 100;
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                        animateSkillBars(entry.target);
                    }, delay);
                    categoryObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe each skill category
        skillCategories.forEach(category => {
            categoryObserver.observe(category);
        });

        // Animate skill progress bars
        function animateSkillBars(category) {
            const progressBars = category.querySelectorAll('.skill-progress');

            progressBars.forEach((bar, index) => {
                const targetWidth = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.setProperty('--progress-width', targetWidth + '%');
                    bar.style.width = targetWidth + '%';
                    animatePercentage(bar, targetWidth);
                }, index * 200);
            });
        }

        // Animate percentage counter
        function animatePercentage(progressBar, targetValue) {
            const skillItem = progressBar.closest('.skill-item');
            const percentageElement = skillItem.querySelector('.skill-percentage');
            const duration = 1500;
            const startValue = 0;
            const increment = targetValue / (duration / 16);
            let currentValue = startValue;

            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                    currentValue = targetValue;
                    clearInterval(counter);
                }
                percentageElement.textContent = Math.round(currentValue) + '%';
            }, 16);
        }

        // Add hover effects for skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const progressBar = this.querySelector('.skill-progress');
                progressBar.style.filter = 'brightness(1.2)';
            });

            item.addEventListener('mouseleave', function() {
                const progressBar = this.querySelector('.skill-progress');
                progressBar.style.filter = 'brightness(1)';
            });
        });

        // Add parallax effect to category icons
        if (window.innerWidth > 768) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const skillsOffset = skillsSection.offsetTop;
                const skillsHeight = skillsSection.offsetHeight;

                if (scrolled > skillsOffset - window.innerHeight &&
                    scrolled < skillsOffset + skillsHeight) {
                    const icons = document.querySelectorAll('.category-icon');
                    icons.forEach((icon, index) => {
                        const speed = 0.5 + (index * 0.1);
                        const yPos = (scrolled - skillsOffset) * speed * 0.1;
                        icon.style.transform = `translateY(${yPos}px) rotate(0deg)`;
                    });
                }
            });
        }

        // Add click animation to categories
        skillCategories.forEach(category => {
            category.addEventListener('click', function() {
                // Create ripple effect
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(197, 151, 100, 0.3)';
                ripple.style.width = '100px';
                ripple.style.height = '100px';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.transform = 'translate(-50%, -50%) scale(0)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.pointerEvents = 'none';

                this.style.position = 'relative';
                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add CSS for ripple animation
        if (!document.getElementById('skills-ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'skills-ripple-animation';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: translate(-50%, -50%) scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Skill category filter (optional enhancement)
        createSkillFilter();
    }

    // Create filter buttons for skill categories
    function createSkillFilter() {
        const skillsSection = document.querySelector('.skills');
        const container = skillsSection.querySelector('.container');
        const sectionHeader = skillsSection.querySelector('.section-header');

        // Create filter container
        const filterContainer = document.createElement('div');
        filterContainer.className = 'skill-filters';
        filterContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
            flex-wrap: wrap;
        `;

        const categories = ['all', 'mobile', 'backend', 'frontend', 'devops'];
        const labels = {
            all: 'Tous',
            mobile: 'Mobile',
            backend: 'Backend',
            frontend: 'Frontend',
            devops: 'DevOps'
        };

        categories.forEach(cat => {
            const button = document.createElement('button');
            button.textContent = labels[cat];
            button.className = 'filter-btn' + (cat === 'all' ? ' active' : '');
            button.dataset.filter = cat;
            button.style.cssText = `
                padding: 10px 25px;
                background: ${cat === 'all' ? 'linear-gradient(135deg, #c59764, #d4af37)' : 'rgba(197, 151, 100, 0.1)'};
                color: ${cat === 'all' ? '#0a0a0a' : '#c59764'};
                border: 2px solid ${cat === 'all' ? '#c59764' : 'rgba(197, 151, 100, 0.3)'};
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
                font-size: 14px;
            `;

            button.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.style.background = 'rgba(197, 151, 100, 0.2)';
                    this.style.borderColor = 'rgba(197, 151, 100, 0.5)';
                }
            });

            button.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.background = 'rgba(197, 151, 100, 0.1)';
                    this.style.borderColor = 'rgba(197, 151, 100, 0.3)';
                }
            });

            button.addEventListener('click', function() {
                filterSkills(cat);

                // Update active state
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.background = 'rgba(197, 151, 100, 0.1)';
                    btn.style.color = '#c59764';
                    btn.style.borderColor = 'rgba(197, 151, 100, 0.3)';
                });

                this.classList.add('active');
                this.style.background = 'linear-gradient(135deg, #c59764, #d4af37)';
                this.style.color = '#0a0a0a';
                this.style.borderColor = '#c59764';
            });

            filterContainer.appendChild(button);
        });

        sectionHeader.appendChild(filterContainer);
    }

    // Filter skills by category
    function filterSkills(category) {
        const skillCategories = document.querySelectorAll('.skill-category');

        skillCategories.forEach(cat => {
            if (category === 'all' || cat.dataset.category === category) {
                cat.style.display = 'block';
                setTimeout(() => {
                    cat.style.opacity = '1';
                    cat.style.transform = 'translateY(0)';
                }, 10);
            } else {
                cat.style.opacity = '0';
                cat.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    cat.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSkills);
    } else {
        initSkills();
    }

})();
