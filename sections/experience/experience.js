// Experience Section JavaScript
(function() {
    'use strict';

    // Initialize experience section
    function initExperience() {
        const experienceSection = document.querySelector('.experience');
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timeline = document.querySelector('.timeline');

        if (!experienceSection || !timeline) return;

        // Create progress indicator
        createProgressIndicator();

        // Intersection Observer for timeline items
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = entry.target;
                    const index = parseInt(item.dataset.index);
                    const delay = (index % 3) * 150; // Stagger animation

                    setTimeout(() => {
                        item.classList.add('animate-in');
                        animateTimelineContent(item);
                    }, delay);

                    timelineObserver.unobserve(item);
                }
            });
        }, observerOptions);

        // Observe all timeline items
        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });

        // Update progress indicator on scroll
        window.addEventListener('scroll', updateTimelineProgress);

        // Add hover effects
        addHoverEffects();

        // Add parallax effect to timeline
        if (window.innerWidth > 768) {
            addParallaxEffect();
        }
    }

    // Create timeline progress indicator
    function createProgressIndicator() {
        const timeline = document.querySelector('.timeline');
        const progressLine = document.createElement('div');
        progressLine.className = 'timeline-progress';
        timeline.appendChild(progressLine);
    }

    // Update timeline progress on scroll
    function updateTimelineProgress() {
        const timeline = document.querySelector('.timeline');
        const progressLine = document.querySelector('.timeline-progress');

        if (!timeline || !progressLine) return;

        const timelineTop = timeline.offsetTop;
        const timelineHeight = timeline.offsetHeight;
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;

        // Calculate progress
        const startPoint = timelineTop - windowHeight / 2;
        const endPoint = timelineTop + timelineHeight - windowHeight / 2;

        if (scrolled >= startPoint && scrolled <= endPoint) {
            const progress = ((scrolled - startPoint) / (endPoint - startPoint)) * 100;
            progressLine.style.height = Math.min(progress, 100) + '%';
        } else if (scrolled < startPoint) {
            progressLine.style.height = '0%';
        } else {
            progressLine.style.height = '100%';
        }
    }

    // Animate timeline content
    function animateTimelineContent(item) {
        const title = item.querySelector('.timeline-title');
        const company = item.querySelector('.timeline-company');
        const description = item.querySelector('.timeline-description');
        const listItems = item.querySelectorAll('.timeline-list li');
        const tags = item.querySelectorAll('.timeline-tags .tag');

        // Animate title
        if (title) {
            setTimeout(() => {
                title.style.opacity = '0';
                title.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    title.style.transition = 'all 0.6s ease';
                    title.style.opacity = '1';
                    title.style.transform = 'translateY(0)';
                }, 50);
            }, 100);
        }

        // Animate company
        if (company) {
            setTimeout(() => {
                company.style.opacity = '0';
                company.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    company.style.transition = 'all 0.6s ease';
                    company.style.opacity = '1';
                    company.style.transform = 'translateX(0)';
                }, 50);
            }, 200);
        }

        // Animate description
        if (description) {
            setTimeout(() => {
                description.style.opacity = '0';
                setTimeout(() => {
                    description.style.transition = 'all 0.6s ease';
                    description.style.opacity = '1';
                }, 50);
            }, 300);
        }

        // Animate list items
        listItems.forEach((li, index) => {
            li.style.opacity = '0';
            li.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                li.style.transition = 'all 0.5s ease';
                li.style.opacity = '1';
                li.style.transform = 'translateX(0)';
            }, 400 + (index * 100));
        });

        // Animate tags
        tags.forEach((tag, index) => {
            tag.style.opacity = '0';
            tag.style.transform = 'scale(0.8)';
            setTimeout(() => {
                tag.style.transition = 'all 0.4s ease';
                tag.style.opacity = '1';
                tag.style.transform = 'scale(1)';
            }, 600 + (index * 80));
        });
    }

    // Add hover effects
    function addHoverEffects() {
        const timelineItems = document.querySelectorAll('.timeline-item');

        timelineItems.forEach(item => {
            const content = item.querySelector('.timeline-content');

            // Mouse move effect
            content.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;

                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            content.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });

            // Click to expand effect
            content.addEventListener('click', function() {
                const list = this.querySelector('.timeline-list');
                if (list) {
                    list.style.maxHeight = list.style.maxHeight ? null : list.scrollHeight + 'px';
                }
            });
        });
    }

    // Add parallax effect
    function addParallaxEffect() {
        const experienceSection = document.querySelector('.experience');
        const timelineItems = document.querySelectorAll('.timeline-item');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const sectionTop = experienceSection.offsetTop;
            const sectionHeight = experienceSection.offsetHeight;

            if (scrolled > sectionTop - window.innerHeight &&
                scrolled < sectionTop + sectionHeight) {

                timelineItems.forEach((item, index) => {
                    const speed = 0.3 + (index % 2) * 0.2;
                    const yPos = (scrolled - sectionTop) * speed * 0.05;

                    if (item.classList.contains('animate-in')) {
                        item.style.transform = `translateY(${yPos}px)`;
                    }
                });
            }
        });
    }

    // Add scroll reveal for timeline items
    function addScrollReveal() {
        const timelineItems = document.querySelectorAll('.timeline-item');

        const revealOnScroll = () => {
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (itemTop < windowHeight * 0.8) {
                    item.classList.add('animate-in');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check
    }

    // Create floating particles effect
    function createParticles() {
        const experienceSection = document.querySelector('.experience');
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'timeline-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(197, 151, 100, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                pointer-events: none;
            `;
            experienceSection.appendChild(particle);
        }

        // Add keyframes for particle animation
        if (!document.getElementById('experience-particles-animation')) {
            const style = document.createElement('style');
            style.id = 'experience-particles-animation';
            style.textContent = `
                @keyframes particleFloat {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Add count-up animation for years of experience
    function addCounterAnimation() {
        const timelineItems = document.querySelectorAll('.timeline-item');

        timelineItems.forEach(item => {
            const dateText = item.querySelector('.timeline-date')?.textContent;
            if (dateText && dateText.includes('Présent')) {
                // Calculate years of experience from start date
                const startYear = 2020; // Based on first experience
                const currentYear = new Date().getFullYear();
                const yearsExp = currentYear - startYear;

                // Add experience badge
                const badge = document.createElement('div');
                badge.className = 'experience-badge';
                badge.style.cssText = `
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #c59764, #d4af37);
                    color: #0a0a0a;
                    padding: 10px 15px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                `;
                badge.textContent = `${yearsExp}+ ans d'expérience`;
                item.querySelector('.timeline-content').appendChild(badge);
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initExperience();
            createParticles();
            addCounterAnimation();
        });
    } else {
        initExperience();
        createParticles();
        addCounterAnimation();
    }

})();
