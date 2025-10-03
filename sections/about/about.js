// About Section JavaScript

// Counter animation for stats
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
                observer.unobserve(stat);
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// Parallax effect for about section - DISABLED to prevent z-index issues
function initAboutParallax() {
    // Disabled - the transform creates a stacking context that causes stats to overlay the image
    return;
}

// Animate highlights on scroll
function initHighlightsAnimation() {
    const highlights = document.querySelectorAll('.highlight-item');
    if (!highlights.length) return;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    highlights.forEach(highlight => {
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateX(-20px)';
        highlight.style.transition = 'all 0.5s ease';
        observer.observe(highlight);
    });
}

// Info items hover effect
function initInfoHoverEffect() {
    const infoItems = document.querySelectorAll('.info-item');

    infoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(360deg) scale(1.1)';
                icon.style.transition = 'transform 0.5s ease';
            }
        });

        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(0deg) scale(1)';
            }
        });
    });
}

// Animate section on scroll
function initAboutSectionAnimation() {
    const aboutContent = document.querySelector('.about-content');
    if (!aboutContent) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(aboutContent);
}

// Image glow effect enhancement
function initImageGlowEffect() {
    const imageFrame = document.querySelector('.about-image-frame');
    if (!imageFrame) return;

    imageFrame.addEventListener('mouseenter', function() {
        const glow = this.querySelector('.image-glow');
        if (glow) {
            glow.style.animationDuration = '4s';
        }
    });

    imageFrame.addEventListener('mouseleave', function() {
        const glow = this.querySelector('.image-glow');
        if (glow) {
            glow.style.animationDuration = '8s';
        }
    });
}

// Stat items stagger animation
function initStatItemsAnimation() {
    const statItems = document.querySelectorAll('.stat-item');
    if (!statItems.length) return;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
}

// Initialize all about features
function initAbout() {
    initStatsCounter();
    initAboutParallax();
    initHighlightsAnimation();
    initInfoHoverEffect();
    initAboutSectionAnimation();
    initImageGlowEffect();
    initStatItemsAnimation();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAbout);
} else {
    initAbout();
}
