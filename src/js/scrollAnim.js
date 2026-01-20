export function scrollAnim() {
  const commonConfig = {
    distance: "60px",
    duration: 1000,
    easing: "ease-in-out",
    reset: false,
  };

  ScrollReveal().reveal(".hero-content", {
    ...commonConfig,
    origin: "bottom",
    opacity: 0,
  });

  ScrollReveal().reveal(".hero-image", {
    ...commonConfig,
    origin: "right",
    delay: 200,
  });

  ScrollReveal().reveal(".partners-section", {
    duration: 1500,
    opacity: 0,
    scale: 0.9,
  });

  ScrollReveal().reveal(".feature-card", {
    ...commonConfig,
    origin: "bottom",
    interval: 200,
  });

  ScrollReveal().reveal(".section-title", {
    ...commonConfig,
    origin: "left",
    distance: "30px",
  });

  ScrollReveal().reveal(".course-card", {
    ...commonConfig,
    origin: "bottom",
    interval: 300,
  });

  ScrollReveal().reveal(".faq-section", {
    ...commonConfig,
    origin: "bottom",
  });

  ScrollReveal().reveal(".accordion-item", {
    ...commonConfig,
    origin: "bottom",
    interval: 150,
  });

  ScrollReveal().reveal(".testimonial-card", {
    ...commonConfig,
    origin: "bottom",
    interval: 200,
  });

  ScrollReveal().reveal(".cta-card", {
    duration: 1200,
    scale: 0.85,
    opacity: 0,
  });

  ScrollReveal().reveal(".footer-grid > div", {
    ...commonConfig,
    origin: "bottom",
    interval: 150,
  });
}