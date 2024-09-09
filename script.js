// Example: Toggle content visibility
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = document.querySelector(toggle.dataset.target);
      content.classList.toggle("hidden");
    });
  });
});
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll("th");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const active = document.querySelector(".active");
      if (active) {
        active.classList.remove("active");
      }
      header.classList.add("active");
    });
  });
});
