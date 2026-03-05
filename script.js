// =============================
// HAMBURGER
// =============================
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});


// =============================
// HEADER SHRINK ON SCROLL
// =============================
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// =============================
// SMOOTH SCROLL
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// =============================
// FAQ ACCORDION + ICON ROTATION
// =============================
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    item.classList.toggle("active");

    const icon = btn.querySelector(".faq-icon");
    if (item.classList.contains("active")) {
      icon.style.transform = "rotate(180deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  });
});


// =============================
// HERO STAGED ENTRANCE
// =============================
window.addEventListener("load", () => {
  const heroElements = [
    document.querySelector(".hero-pill"),
    document.querySelector(".hero-premium h1"),
    document.querySelector(".hero-sub"),
    document.querySelector(".hero-actions"),
    document.querySelector(".hero-trust")
  ];

  heroElements.forEach((el, i) => {
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, i * 180);
  });
});


// =============================
// UNIVERSAL SCROLL REVEAL
// =============================
const revealElements = document.querySelectorAll(
  ".service-card, .team-card, .why-card, .review-card, .gallery-grid img"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(30px)";
        entry.target.style.transition = "all 0.6s ease";
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, 100);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => revealObserver.observe(el));


// =============================
// SERVICES PARALLAX IMAGE
// =============================
const servicesImage = document.querySelector(".services-image");

window.addEventListener("scroll", () => {
  if (!servicesImage) return;
  const offset = window.scrollY * 0.15;
  servicesImage.style.transform = `translate(-50%, ${offset}px)`;
});


// =============================
// WHY ICON MICRO HOVER
// =============================
document.querySelectorAll(".why-card").forEach(card => {
  const icon = card.querySelector(".why-icon");

  card.addEventListener("mouseenter", () => {
    icon.style.transition = "transform 0.3s ease";
    icon.style.transform = "translateY(-4px)";
  });

  card.addEventListener("mouseleave", () => {
    icon.style.transform = "translateY(0)";
  });
});


// =============================
// WHATSAPP FLOAT SOFT BOUNCE
// =============================
const whatsapp = document.querySelector(".whatsapp-float");

if (whatsapp) {
  setInterval(() => {
    whatsapp.style.transition = "transform 0.6s ease";
    whatsapp.style.transform = "translateY(-6px)";
    setTimeout(() => {
      whatsapp.style.transform = "translateY(0)";
    }, 600);
  }, 8000);
}


// =============================
// NAV LINK UNDERLINE ANIMATION
// =============================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transition = "border-bottom 0.3s ease";
    link.style.borderBottom = "2px solid var(--primary)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.borderBottom = "2px solid transparent";
  });
});