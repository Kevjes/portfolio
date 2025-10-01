// ==================== NAVIGATION ====================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== SMOOTH SCROLLING ====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== COUNTER ANIMATION ====================
const counters = document.querySelectorAll('.stat-number');
const counterSpeed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / counterSpeed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 10);
    } else {
        counter.innerText = target + '+';
    }
};

// ==================== SKILL BARS ANIMATION ====================
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
};

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class
            entry.target.classList.add('animated');

            // Animate counters in about section
            if (entry.target.classList.contains('about-stats')) {
                counters.forEach(counter => {
                    counter.innerText = '0';
                    animateCounter(counter);
                });
            }

            // Animate skill bars
            if (entry.target.classList.contains('skills-categories')) {
                animateSkillBars();
            }

            // Stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animation
const animateElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card, .about-image, .about-text, .contact-item, .contact-form');
animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Observe stats section
const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    observer.observe(aboutStats);
}

// Observe skills section
const skillsSection = document.querySelector('.skills-categories');
if (skillsSection) {
    observer.observe(skillsSection);
}

// ==================== TYPING EFFECT ====================
const heroRole = document.querySelector('.hero-role');
if (heroRole) {
    const text = heroRole.textContent;
    heroRole.textContent = '';
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            heroRole.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    // Start typing after page load
    setTimeout(typeWriter, 1800);
}

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== FORM SUBMISSION ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to a server
        console.log('Form submitted:', data);

        // Show success message
        alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');

        // Reset form
        contactForm.reset();
    });
}

// ==================== CURSOR EFFECT (OPTIONAL) ====================
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Smooth follower animation
const animateFollower = () => {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;

    followerX += distX * 0.1;
    followerY += distY * 0.1;

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateFollower);
};

animateFollower();

// Add hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .timeline-content');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Add custom cursor styles dynamically
const cursorStyles = document.createElement('style');
cursorStyles.innerHTML = `
    .custom-cursor {
        width: 10px;
        height: 10px;
        background: var(--primary-gold);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s;
    }

    .cursor-follower {
        width: 40px;
        height: 40px;
        border: 2px solid var(--primary-gold);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s;
    }

    .custom-cursor.hover {
        width: 20px;
        height: 20px;
    }

    .cursor-follower.hover {
        width: 60px;
        height: 60px;
    }

    @media (max-width: 968px) {
        .custom-cursor,
        .cursor-follower {
            display: none;
        }
    }
`;
document.head.appendChild(cursorStyles);

// ==================== PROJECT CARD TILT EFFECT ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">Kevin<span style="color: var(--primary-gold)">Tene</span></div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    `;

    const loaderStyles = document.createElement('style');
    loaderStyles.innerHTML = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--dark-bg);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .page-loader.hidden {
            opacity: 0;
            visibility: hidden;
        }

        .loader-content {
            text-align: center;
        }

        .loader-logo {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            color: var(--text-light);
            margin-bottom: 30px;
            letter-spacing: 3px;
        }

        .loader-bar {
            width: 300px;
            height: 3px;
            background: rgba(197, 151, 100, 0.2);
            position: relative;
            overflow: hidden;
        }

        .loader-progress {
            height: 100%;
            background: var(--primary-gold);
            width: 0;
            animation: loading 2s ease forwards;
        }

        @keyframes loading {
            to {
                width: 100%;
            }
        }
    `;

    document.head.appendChild(loaderStyles);
    document.body.prepend(loader);

    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2000);
});

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

const scrollTopStyles = document.createElement('style');
scrollTopStyles.innerHTML = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-gold);
        color: var(--dark-bg);
        border: none;
        cursor: pointer;
        font-size: 20px;
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
    }

    .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
    }

    .scroll-top-btn:hover {
        background: var(--secondary-gold);
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(197, 151, 100, 0.3);
    }
`;
document.head.appendChild(scrollTopStyles);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Bienvenue sur mon portfolio!', 'color: #c59764; font-size: 20px; font-weight: bold;');
console.log('%cDéveloppé avec ❤️ par Kevin Tene', 'color: #b8a589; font-size: 14px;');
console.log('%cVous cherchez quelque chose ? Contactez-moi : kevinjessi10@gmail.com', 'color: #c59764; font-size: 12px;');
