document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("terminal-text");
  if (!el) {
    console.error("No #terminal-text found");
    return;
  }
  const text = `welcome.

thank you for visiting my site.
  
vibware is my cluster of emotions as someone whose life has been defined by tech and digital prescence.

experiences.

made sound.
made light.

this is my prime method of communication.
i hope it resonates.

if not,

turn up the volume :)
`;

  el.innerHTML = ""; // clear contents
  let i = 0;
  const speed = 45;

  function typeWriter() {
    let currentChar = text.charAt(i);

    if (currentChar === "<") {
      // If we encounter a tag, skip instantly to its end
      const closeIndex = text.indexOf(">", i);
      if (closeIndex === -1) return; // malformed tag
      i = closeIndex + 1;
    } else {
      i++;
    }

el.textContent = text.slice(0, i);
    if (i < text.length) {
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});