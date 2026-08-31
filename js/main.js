// ============================================
// Mobile Menu Toggle
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Navigation Link
// ============================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// Scroll Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    const expertiseCards = document.querySelectorAll('.expertise-card');
    const educationCards = document.querySelectorAll('.education-card');
    const additionalCards = document.querySelectorAll('.additional-card');
    
    skillCards.forEach(card => observer.observe(card));
    projectCards.forEach(card => observer.observe(card));
    expertiseCards.forEach(card => observer.observe(card));
    educationCards.forEach(card => observer.observe(card));
    additionalCards.forEach(card => observer.observe(card));
});

// ============================================
// Floating Animation for Gradient Orbs
// ============================================
function animateOrbs() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const delay = index * 2000;
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 100;
            const randomY = (Math.random() - 0.5) * 100;
            const randomScale = 0.9 + Math.random() * 0.2;
            
            orb.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
        }, 3000 + delay);
    });
}

// Initialize orb animations
animateOrbs();

// ============================================
// Keyboard Navigation
// ============================================
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ============================================
// Performance Optimization
// ============================================
// Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledUpdateActiveNav = throttle(updateActiveNavLink, 100);
window.addEventListener('scroll', throttledUpdateActiveNav);

// ============================================
// Calculate Experience Duration
// ============================================
function calculateDuration(startDate) {
    const start = new Date(startDate + '-01');
    const end = new Date();
    
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Get current language
    const lang = localStorage.getItem('language') || 'pt';
    // Access translations from language.js (loaded before this file)
    const timeTranslations = typeof translations !== 'undefined' 
        ? (lang === 'pt' ? translations.pt.time : translations.en.time)
        : { year: 'ano', years: 'anos', month: 'mês', months: 'meses', and: 'e' };
    
    if (years === 0) {
        return `${months} ${months === 1 ? timeTranslations.month : timeTranslations.months}`;
    } else if (months === 0) {
        return `${years} ${years === 1 ? timeTranslations.year : timeTranslations.years}`;
    } else {
        return `${years} ${years === 1 ? timeTranslations.year : timeTranslations.years} ${timeTranslations.and} ${months} ${months === 1 ? timeTranslations.month : timeTranslations.months}`;
    }
}

// Update all project periods with duration
function updateProjectDurations() {
    const projectPeriods = document.querySelectorAll('.project-period[data-start]');
    
    projectPeriods.forEach(period => {
        const startDate = period.getAttribute('data-start');
        const lang = localStorage.getItem('language') || 'pt';
        
        // Get translated period text
        const i18nKey = period.getAttribute('data-i18n');
        let baseText = '';
        
        if (i18nKey && typeof getTranslation !== 'undefined') {
            // Get translation for the period (always use the base translation)
            const translation = getTranslation(i18nKey, lang);
            if (translation) {
                // Remove any existing duration if present
                baseText = translation.split('·')[0].trim();
            }
        }
        
        // If no translation found, use current text but remove existing duration
        if (!baseText) {
            const currentText = period.textContent.trim();
            baseText = currentText.includes('·') ? currentText.split('·')[0].trim() : currentText;
        }
        
        const duration = calculateDuration(startDate);
        period.textContent = `${baseText} · ${duration}`;
    });
}

// ============================================
// Initialize on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    updateActiveNavLink();
    
    // Update project durations
    updateProjectDurations();

    const educationToggle = document.getElementById('educationToggle');
    const educationGrid = document.querySelector('.education-grid');
    if (educationToggle && educationGrid) {
        educationToggle.addEventListener('click', () => {
            const expanded = educationGrid.classList.toggle('is-expanded');
            educationToggle.setAttribute('aria-expanded', String(expanded));
            const key = expanded ? 'education.showLess' : 'education.showMore';
            educationToggle.setAttribute('data-i18n', key);
            if (typeof getTranslation === 'function') {
                const label = getTranslation(key);
                if (label) {
                    educationToggle.textContent = label;
                }
            }
            if (expanded) {
                educationGrid.querySelectorAll('.education-extra').forEach(card => {
                    card.classList.add('visible');
                });
            }
        });
    }
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.animation = 'fadeInUp 1s ease-out forwards';
    }
});

