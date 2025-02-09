// Animate statistics numbers
function animateNumbers() {
    const stats = document.querySelectorAll('.number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // Animation duration in milliseconds
        const step = target / (duration / 16); // 60 FPS
        let current = 0;

        const updateNumber = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };

        updateNumber();
    });
}

// Testimonial Slider
function setupTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }

    // Change testimonial every 5 seconds
    setInterval(showNextTestimonial, 5000);
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form submission handling
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }
}

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            return;
        }

        if (currentScroll > lastScroll) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.vision-card, .mission-card, .timeline-item, .value-card').forEach(el => {
        observer.observe(el);
    });
}

// Handle schedule form submission
function setupScheduleForm() {
    const scheduleForm = document.querySelector('.schedule-form');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                participants: document.getElementById('participants').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send this data to your backend
            // For now, we'll just show a success message
            alert('Thank you for scheduling a visit! We will contact you shortly to confirm your appointment.');
            scheduleForm.reset();
        });
    }
}

// Initialize all features when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
    setupTestimonialSlider();
    setupSmoothScrolling();
    setupContactForm();
    setupNavbarScroll();
    setupMobileMenu();
    setupScrollAnimations();
    setupScheduleForm();
});
// Animation triggers
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
  
    // Observe program cards
    document.querySelectorAll('.program-card').forEach(card => {
      observer.observe(card);
    });
  
    // Counter animation for statistics
    const animateCounter = (element) => {
      const target = parseInt(element.dataset.target);
      const duration = 2000;
      const step = target / duration * 10;
      let current = 0;
  
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          element.textContent = target;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 10);
    };
  
    // Start counter animation when stats section is in view
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.number').forEach(counter => {
            animateCounter(counter);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    });
  
    const statsSection = document.querySelector('.achievements-section');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  });
  // Add these functions to your existing main.js
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.dataset.aos === 'flip-left') {
                    entry.target.style.animation = 'flipInY 1s ease forwards';
                } else if (entry.target.dataset.aos === 'flip-right') {
                    entry.target.style.animation = 'flipInY 1s ease forwards';
                } else if (entry.target.dataset.aos === 'zoom-in') {
                    entry.target.style.animation = 'zoomIn 0.8s ease forwards';
                } else if (entry.target.dataset.aos === 'fade-up') {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });

    // Add these keyframe animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes flipInY {
            from {
                transform: perspective(400px) rotateY(90deg);
                opacity: 0;
            }
            to {
                transform: perspective(400px) rotateY(0);
                opacity: 1;
            }
        }

        @keyframes zoomIn {
            from {
                opacity: 0;
                transform: scale(0.3);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(styleSheet);
});
// Add this to your existing main.js
document.addEventListener('DOMContentLoaded', () => {
    // Form animation
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    // Submit button effect
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) {
        submitButton.addEventListener('mouseenter', (e) => {
            const effect = submitButton.querySelector('.button-effect');
            const rect = submitButton.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            effect.style.left = `${x}px`;
            effect.style.top = `${y}px`;
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Scroll animations for elements with data-aos attribute
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-aos]').forEach(element => {
        element.classList.add('aos-init');
        observer.observe(element);
    });
});
// Add this to your existing main.js

// Counter animation
function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // Animation duration in milliseconds
    const step = target / (duration / 16); // Update every 16ms (60fps)
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => animateCounter(counter));
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe achievements section
const achievementsSection = document.querySelector('.achievements-section');
if (achievementsSection) {
    counterObserver.observe(achievementsSection);
}

// Gallery image lazy loading
const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(img => {
    img.loading = 'lazy';
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});