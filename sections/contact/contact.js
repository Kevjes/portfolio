// Contact Section JavaScript
(function() {
    'use strict';

    // Initialize contact section
    function initContact() {
        const contactSection = document.querySelector('.contact');
        const contactForm = document.getElementById('contactForm');
        const contactItems = document.querySelectorAll('.contact-item');

        if (!contactSection) return;

        // Observe contact items and form for scroll animations
        observeContactElements();

        // Initialize form validation
        if (contactForm) {
            initFormValidation(contactForm);
        }

        // Add floating particles
        createFloatingParticles();

        // Add typing effect to placeholders
        addTypingEffect();

        // Add auto-resize for textarea
        autoResizeTextarea();
    }

    // Observe contact elements for scroll animations
    function observeContactElements() {
        const contactItems = document.querySelectorAll('.contact-item');
        const contactForm = document.querySelector('.contact-form');

        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    elementObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe contact items with stagger
        contactItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
            elementObserver.observe(item);
        });

        // Observe form
        if (contactForm) {
            elementObserver.observe(contactForm);
        }
    }

    // Initialize form validation
    function initFormValidation(form) {
        const submitBtn = form.querySelector('#submitBtn');
        const formStatus = form.querySelector('.form-status');
        const inputs = form.querySelectorAll('input, textarea');

        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });

            // Add focus animations
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        // L'endpoint du moteur de prospection (meta contact-endpoint) :
        // le message est stocké, Kevin est alerté sur Telegram, et le visiteur
        // reçoit un accusé de réception par email. WhatsApp n'est que le repli
        // si le serveur est injoignable.
        function contactEndpoint() {
            const meta = document.querySelector('meta[name="contact-endpoint"]');
            return meta && meta.content ? meta.content.replace(/\/+$/, '') : '';
        }

        function whatsappFallback(name, email, subject, message) {
            const text = `*NOUVEAU MESSAGE DEPUIS LE PORTFOLIO*\n` +
                         `👤 ${name}\n📧 ${email}\n🏷️ ${subject}\n\n${message}`;
            window.open(`https://wa.me/237691231554?text=${encodeURIComponent(text)}`,
                        '_blank', 'noopener,noreferrer');
        }

        async function handleSubmit(e) {
            e.preventDefault();
            e.stopPropagation();

            let isValid = true;
            inputs.forEach(input => {
                if (input.name === 'website') return;   // honeypot
                if (!validateField(input)) isValid = false;
            });

            if (!isValid) {
                showFormStatus('Veuillez corriger les erreurs', 'error');
                return;
            }

            submitBtn.disabled = true;
            submitBtn.classList.add('loading');

            const payload = {
                name:    form.querySelector('[name="name"]').value.trim(),
                email:   form.querySelector('[name="email"]').value.trim(),
                subject: form.querySelector('[name="subject"]').value.trim(),
                message: form.querySelector('[name="message"]').value.trim(),
                website: (form.querySelector('[name="website"]') || {}).value || ''
            };

            const endpoint = contactEndpoint();
            let delivered = false;

            if (endpoint) {
                try {
                    const res = await fetch(endpoint + '/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    if (res.ok) {
                        const data = await res.json().catch(() => ({}));
                        delivered = true;
                        showFormStatus(
                            data.accuse_de_reception
                                ? 'Message envoyé ✔ Un accusé de réception vient de partir vers ' + payload.email + '. Réponse sous 24 h.'
                                : 'Message envoyé ✔ Je vous réponds sous 24 h.',
                            'success');
                        form.reset();
                        inputs.forEach(input => input.classList.remove('error'));
                    } else if (res.status === 429) {
                        showFormStatus('Trop de messages envoyés — réessayez dans une heure.', 'error');
                        delivered = true;   // pas de repli WhatsApp sur un rate-limit
                    }
                } catch (err) {
                    // réseau injoignable : on tentera le repli
                }
            }

            if (!delivered) {
                showFormStatus('Serveur momentanément injoignable — ouverture de WhatsApp…', 'success');
                whatsappFallback(payload.name, payload.email, payload.subject, payload.message);
                form.reset();
            }

            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }

        form.addEventListener('submit', handleSubmit);
    }

    // Validate individual field
    function validateField(field) {
        const formGroup = field.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        let isValid = true;
        let message = '';

        // Remove previous error state
        field.classList.remove('error');
        formGroup.classList.remove('has-error');

        // Check if field is empty
        if (!field.value.trim()) {
            isValid = false;
            message = 'Ce champ est requis';
        }
        // Email validation
        else if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                message = 'Email invalide';
            }
        }
        // Name validation (minimum 2 characters)
        else if (field.name === 'name' && field.value.trim().length < 2) {
            isValid = false;
            message = 'Le nom doit contenir au moins 2 caractères';
        }
        // Subject validation (minimum 3 characters)
        else if (field.name === 'subject' && field.value.trim().length < 3) {
            isValid = false;
            message = 'Le sujet doit contenir au moins 3 caractères';
        }
        // Message validation (minimum 10 characters)
        else if (field.name === 'message' && field.value.trim().length < 10) {
            isValid = false;
            message = 'Le message doit contenir au moins 10 caractères';
        }

        // Show error if invalid
        if (!isValid) {
            field.classList.add('error');
            formGroup.classList.add('has-error');
            errorMessage.textContent = message;
        }

        return isValid;
    }

    // Show form status message
    function showFormStatus(message, type) {
        const formStatus = document.querySelector('.form-status');
        formStatus.textContent = message;
        formStatus.className = `form-status show ${type}`;

        setTimeout(() => {
            formStatus.classList.remove('show');
        }, 5000);
    }

    // Create floating particles
    function createFloatingParticles() {
        const contactSection = document.querySelector('.contact');
        const particleCount = 15;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'contact-particle';

            const size = Math.random() * 6 + 3;
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;

            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${startX}%;
                top: ${startY}%;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
                opacity: ${Math.random() * 0.3 + 0.1};
            `;

            contactSection.appendChild(particle);
        }
    }

    // Add typing effect to placeholders
    function addTypingEffect() {
        const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

        inputs.forEach(input => {
            const originalPlaceholder = input.placeholder;
            let currentIndex = 0;
            let isDeleting = false;
            let typingTimeout;

            const typeEffect = () => {
                if (!document.activeElement || document.activeElement !== input) {
                    if (!isDeleting && currentIndex < originalPlaceholder.length) {
                        input.placeholder = originalPlaceholder.substring(0, currentIndex + 1);
                        currentIndex++;
                        typingTimeout = setTimeout(typeEffect, 100);
                    } else if (isDeleting && currentIndex > 0) {
                        input.placeholder = originalPlaceholder.substring(0, currentIndex - 1);
                        currentIndex--;
                        typingTimeout = setTimeout(typeEffect, 50);
                    } else {
                        isDeleting = !isDeleting;
                        typingTimeout = setTimeout(typeEffect, isDeleting ? 2000 : 500);
                    }
                }
            };

            input.addEventListener('focus', () => {
                clearTimeout(typingTimeout);
                input.placeholder = originalPlaceholder;
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    currentIndex = 0;
                    isDeleting = false;
                    input.placeholder = '';
                    typeEffect();
                }
            });

            // Start typing effect on load
            if (!input.value) {
                input.placeholder = '';
                setTimeout(() => typeEffect(), 1000 + Math.random() * 2000);
            }
        });
    }

    // Auto-resize textarea
    function autoResizeTextarea() {
        const textarea = document.querySelector('textarea[name="message"]');

        if (textarea) {
            textarea.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = this.scrollHeight + 'px';
            });
        }
    }

    // Add click to copy functionality for contact info
    function addCopyFunctionality() {
        const contactItems = document.querySelectorAll('.contact-item');

        contactItems.forEach(item => {
            const details = item.querySelector('.contact-details p');
            const link = details.querySelector('a');

            if (link) {
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-btn';
                copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                copyBtn.style.cssText = `
                    margin-left: 10px;
                    padding: 5px 10px;
                    background: rgba(228, 200, 131, 0.12);
                    border: 1px solid rgba(228, 200, 131, 0.4);
                    border-radius: 5px;
                    color: #E4C883;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 12px;
                `;

                copyBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    const text = link.textContent;

                    try {
                        await navigator.clipboard.writeText(text);
                        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                        copyBtn.style.background = 'rgba(76, 175, 80, 0.2)';
                        copyBtn.style.borderColor = 'rgba(76, 175, 80, 0.5)';
                        copyBtn.style.color = '#4caf50';

                        setTimeout(() => {
                            copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                            copyBtn.style.background = 'rgba(228, 200, 131, 0.12)';
                            copyBtn.style.borderColor = 'rgba(228, 200, 131, 0.4)';
                            copyBtn.style.color = '#E4C883';
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy:', err);
                    }
                });

                copyBtn.addEventListener('mouseenter', function() {
                    this.style.background = 'rgba(228, 200, 131, 0.22)';
                    this.style.transform = 'scale(1.1)';
                });

                copyBtn.addEventListener('mouseleave', function() {
                    this.style.background = 'rgba(228, 200, 131, 0.12)';
                    this.style.transform = 'scale(1)';
                });

                details.appendChild(copyBtn);
            }
        });
    }

    // Add character counter for textarea
    function addCharacterCounter() {
        const textarea = document.querySelector('textarea[name="message"]');
        if (!textarea) return;

        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 12px;
            color: #666;
            margin-top: 5px;
        `;

        textarea.parentElement.appendChild(counter);

        const updateCounter = () => {
            const length = textarea.value.length;
            const minLength = 10;
            counter.textContent = `${length} caractères`;

            if (length >= minLength) {
                counter.style.color = '#1B4A3B';
            } else {
                counter.style.color = '#666';
            }
        };

        textarea.addEventListener('input', updateCounter);
        updateCounter();
    }

    // Add ripple effect to submit button
    function addButtonRipple() {
        const submitBtn = document.querySelector('#submitBtn');

        submitBtn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            `;

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });

        // Add ripple animation
        if (!document.getElementById('contact-ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'contact-ripple-animation';
            style.textContent = `
                @keyframes rippleEffect {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initContact();
            addCopyFunctionality();
            addCharacterCounter();
            addButtonRipple();
        });
    } else {
        initContact();
        addCopyFunctionality();
        addCharacterCounter();
        addButtonRipple();
    }

})();
