document.addEventListener("DOMContentLoaded", () => {
  const door = document.getElementById("door");
  const audio = document.getElementById("welcome-audio");
  const logo = document.querySelector(".door-logo");

  logo.addEventListener("click", () => {
    // Play the sound
    audio.play().catch(err => console.log("Autoplay blocked:", err));

    // Fade out the door
    door.classList.add("fade-out");

    // Wait for fade, then go to main site
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000); // match transition duration
  });
});