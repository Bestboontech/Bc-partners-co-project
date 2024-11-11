// Debounce function to improve scroll performance
const debounce = (func, wait = 10, immediate = true) => {
  let timeout;
  return () => {
    const later = () => {
      timeout = null;
      if (!immediate) func();
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func();
  };
};

// Handle scroll events
const handleScroll = () => {
  const toTopButton = document.querySelector('.to-top-btn');
  const navbar = document.querySelector('.navbar');
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  if (toTopButton) {
    // Toggle visibility of "to-top" button
    toTopButton.style.display = scrollTop > 200 ? 'flex' : 'none';
  }

  if (navbar) {
    // Toggle sticky navbar
    navbar.classList.toggle('navbar-sticky', scrollTop > 50);
  }
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
document.addEventListener('DOMContentLoaded', () => {
  incrementStats();

  const toTopButton = document.querySelector('.to-top-btn');
  if (toTopButton) {
    toTopButton.addEventListener('click', scrollToTop);
  }
});

// Use debounced scroll handler for better performance
window.addEventListener('scroll', debounce(handleScroll));


document.getElementById('myForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const formData = new FormData();


 formData.append("name",event.target?.name?.value)
 formData.append("email",event.target?.email?.value)
 formData.append("phone",event.target?.phone?.value)
 formData.append("message",event.target?.message?.value)


  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Your mail is sent!');
    } else {
      const errorData = await response.json();
      alert('Oops... ' + JSON.stringify(errorData));
    }
  } catch (error) {
    alert('Oops... ' + error.message);
  }
});