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
  const toTopButton = document.querySelector(".to-top-btn");
  const navbar = document.querySelector(".navbar");
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (toTopButton) {
    // Toggle visibility of "to-top" button
    toTopButton.style.display = scrollTop > 200 ? "flex" : "none";
  }

  if (navbar) {
    // Toggle sticky navbar
    navbar.classList.toggle("navbar-sticky", scrollTop > 50);
  }
};

// Smooth scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Increment stats counters
const incrementStats = () => {
  document.querySelectorAll(".counter").forEach((counter) => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");
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

// Portfolio filtering functionality
const initPortfolioFilter = () => {
  const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          // Add fade-in animation
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
};

// Portfolio card hover effects
const initPortfolioHover = () => {
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const image = card.querySelector('.portfolio-image img');
      const overlay = card.querySelector('.portfolio-overlay');

      if (image) {
        image.style.transform = 'scale(1.05)';
      }
      if (overlay) {
        overlay.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      const image = card.querySelector('.portfolio-image img');
      const overlay = card.querySelector('.portfolio-overlay');

      if (image) {
        image.style.transform = 'scale(1)';
      }
      if (overlay) {
        overlay.style.opacity = '0';
      }
    });
  });
};

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  incrementStats();
  initPortfolioFilter();
  initPortfolioHover();

  const toTopButton = document.querySelector(".to-top-btn");
  if (toTopButton) {
    toTopButton.addEventListener("click", scrollToTop);
  }
});

// Use debounced scroll handler for better performance
window.addEventListener("scroll", debounce(handleScroll));

// Emailjs Function
document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const btn = document.getElementById("form-submit");
    const form = event.target;
    const data = {
      service_id: "service_r6ilmhf", //Replace this with your own service_id
      template_id: "template_0hfbmkm", //Replace this with your own template_id
      user_id: "2dH5DNO92HBkxP_KY", //Replace this with your own user_id

      template_params: {
        name: event.target?.name?.value,
        email: event.target?.email?.value,
        phone: event.target?.phone?.value,
        message: event.target?.message?.value,
        from_name: "Admin",
      },
    };

    try {
      btn.textContent = "Sending...";
      btn?.setAttribute("disabled", true);

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Your quota request has been sent!");
        form?.reset();
      } else {
        alert(
          "Oops... an error occurred sending email.\nPlease try again later"
        );
      }
    } catch (error) {
      alert("Oops... an error occurred sending email.\nPlease try again later");
    } finally {
      btn.textContent = "Send";
      btn?.removeAttribute("disabled");
    }
  });
