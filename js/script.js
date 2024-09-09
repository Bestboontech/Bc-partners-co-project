// Handle scroll events
window.onscroll = () => {
  const toTopButton = document.querySelector('.to-top-btn');
  const navbar = document.querySelector('.navbar');
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  // Toggle visibility of "to-top" button
  toTopButton.style.display = scrollTop > 200 ? 'flex' : 'none';

  // Toggle sticky navbar
  navbar.classList.toggle('navbar-sticky', scrollTop > 50);
};

// Smooth scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Increment stats counters
const incrementStats = () => {
  document.querySelectorAll('.counter').forEach((counter) => {
    counter.innerText = '0';
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;

    const updateCounter = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

// Event listeners
document.addEventListener('DOMContentLoaded', incrementStats);
document.querySelector('.to-top-btn').addEventListener('click', scrollToTop);
