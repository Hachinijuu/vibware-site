document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("terminal-text");
  if (!el) {
    console.error("No #terminal-text found");
    return;
  }
  const text = `hi.
welcome to the vibware terminal.
the purpose of this console is to stream sound and light.

this site is currently under construction.

check out the music tab in the meantime. :)       
`;

  el.innerHTML = ""; // clear contents
  let i = 0;
  const speed = 35;

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