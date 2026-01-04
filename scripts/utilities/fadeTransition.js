document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.classList.add("fade");
  requestAnimationFrame(() => body.classList.add("show"));

  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");
    if (!url || url.startsWith("#") || url.startsWith("mailto:") || url.startsWith("http")) return;
    link.addEventListener("click", e => {
      e.preventDefault();
      body.classList.remove("show");
      setTimeout(() => window.location.href = url, 500);
    });
  });
});