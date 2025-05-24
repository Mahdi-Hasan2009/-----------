// Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particlesContainer.appendChild(particle);
    }
  }
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize everything on page load
  document.addEventListener('DOMContentLoaded', () => {
    createParticles();
  
    // Initialize hadith carousel
    const carouselElement = document.getElementById('hadithCarousel');
    if (carouselElement) {
      const hadithCarousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        wrap: true,
        touch: true,
        pause: 'hover'
      });
  
      // Smooth transition effect
      carouselElement.addEventListener('slide.bs.carousel', function () {
        const activeItem = this.querySelector('.carousel-item.active');
        if (activeItem) {
          activeItem.style.opacity = '0.7';
        }
      });
  
      carouselElement.addEventListener('slid.bs.carousel', function () {
        const activeItem = this.querySelector('.carousel-item.active');
        if (activeItem) {
          activeItem.style.opacity = '1';
        }
      });
    }
  
    // Glowing effect for Islamic art
    const islamicArt = document.querySelector('.islamic-art');
    if (islamicArt) {
      setInterval(() => {
        islamicArt.style.boxShadow = `0 0 ${Math.random() * 50 + 30}px rgba(251, 191, 36, 0.4)`;
      }, 2000);
    }
  });