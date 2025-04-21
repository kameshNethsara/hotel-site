// Executive Suite Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Progress Indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.prepend(scrollProgress);

    // Enhanced Scroll Animations
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        // Progress Bar Update
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = `${scrolled}%`;

        // Parallax Effect for Hero Section
        const hero = document.querySelector('.hero-section');
        const currentScroll = window.pageYOffset;
        hero.style.backgroundPositionY = `${currentScroll * 0.5}px`;
        lastScroll = currentScroll;
    });

    // Executive Image Loader
    const images = document.querySelectorAll('.img-load');
    images.forEach((img, index) => {
        img.style.animationDelay = `${index * 0.2}s`;
    });

    // Business Feature Observer
    const features = document.querySelectorAll('.business-feature');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('feature-active');
            }
        });
    }, observerOptions);

    features.forEach(feature => featureObserver.observe(feature));

    // Conference System Interaction
    const videoConference = document.querySelector('.video-conference-system');
    if(videoConference) {
        videoConference.addEventListener('click', () => {
            videoConference.classList.toggle('conference-active');
        });
    }

    // Executive Booking Form Handling
    const bookingForm = document.querySelector('#executiveBookingForm');
    if(bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add custom form submission logic
            console.log('Executive booking submitted');
        });
    }

    // Touch Device Optimization
    document.body.classList.add('touch-device', (('ontouchstart' in window) || navigator.maxTouchPoints > 0));
});

// Smooth Scroll for Executive Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamic Pricing Calculator (Example)
function calculateExecutiveDiscount(days) {
    const basePrice = 599;
    if(days >= 7) return basePrice * days * 0.85;
    if(days >= 3) return basePrice * days * 0.9;
    return basePrice * days;
}