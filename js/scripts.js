// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission handler
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Show success message
    const submitBtn = this.querySelector(".btn-primary");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Message Sent!";
    submitBtn.disabled = true;

    // Reset form
    setTimeout(() => {
      this.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Active navigation link highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Scroll reveal animations for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply scroll reveal to various elements
const revealElements = document.querySelectorAll(
  ".about-text, .about-content, .skills h2, h2, .about h2, .projects h2, .testimonials h2, .contact h2"
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(el);
});

// Add hover glow effect to buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 0 20px rgba(37, 99, 235, 0.5)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.boxShadow = "";
  });
});

// Typewriter animation for headings
const headings = document.querySelectorAll("h1, h2");
const headingObserverOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px",
};

const headingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("animate");
      }, 100);
      headingObserver.unobserve(entry.target);
    }
  });
}, headingObserverOptions);

headings.forEach((heading) => {
  headingObserver.observe(heading);
});
