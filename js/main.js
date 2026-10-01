
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-tabs]").forEach((tabs) => {
    const buttons = tabs.querySelectorAll("[data-tab]");
    const panels = tabs.querySelectorAll("[data-panel]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.tab;
        buttons.forEach((b) => b.classList.toggle("active", b === button));
        panels.forEach((p) => p.classList.toggle("active", p.dataset.panel === id));
      });
    });
  });

  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const image = lightbox.querySelector("img");
    const close = () => lightbox.classList.remove("open");
    document.querySelectorAll("[data-lightbox]").forEach((img) => {
      img.addEventListener("click", () => {
        image.src = img.currentSrc || img.src;
        image.alt = img.alt || "";
        lightbox.classList.add("open");
      });
    });
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.closest("[data-close]")) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }
});
