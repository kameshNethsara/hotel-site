// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  });

  // Image Load Animation Trigger
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img-load');
    images.forEach(img => {
      img.style.animationDelay = Math.random() * 300 + 'ms';
    });
  });