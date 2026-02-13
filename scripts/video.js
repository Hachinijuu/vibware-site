import { media } from "../data/media.js";

const collage = document.getElementById("videoCollage");

// 1. filter visuals only
const visuals = media.filter(item => item.type === "visual");

// 2. shuffle (Fisher-Yates)
for (let i = visuals.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [visuals[i], visuals[j]] = [visuals[j], visuals[i]];
}

// 3. render
visuals.forEach(item => {
  let el;

  el = document.createElement("img");
    el.src = item.src;

  el.classList.add("collage-item");
  collage.appendChild(el);
});
