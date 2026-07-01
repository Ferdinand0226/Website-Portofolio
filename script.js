  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("open");
  }
  function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("open");
  }
  // Close menu when clicking outside
  document.addEventListener("click", function(e) {
    const menu = document.getElementById("mobileMenu");
    const hamburger = document.getElementById("hamburger");
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("open");
    }
  });
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
