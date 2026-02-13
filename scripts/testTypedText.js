document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("terminal-text");
  if (!el) {
    console.error("No #terminal-text found");
    return;
  }
  const text = `[05.22.2025 16:20] START PROTOCOL.
Booting...
Fetching...
Validating Credentials...

[05.22.2025 16:20] SUCCESS.

ACCESS GRANTED. 

STARTUP COMPLETE.
--------------------------------------------------------
Welcome to the vibware terminal.

The purpose of this console is to stream light and sound.

type "help" to see the command list.
`;

  el.innerHTML = ""; // clear contents
  let i = 0;
  const speed = 20;

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