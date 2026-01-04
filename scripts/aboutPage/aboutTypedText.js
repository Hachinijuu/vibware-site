document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("terminal-text");
  if (!el) {
    console.error("No #terminal-text found");
    return;
  }
  const text = `welcome.

thank you for visiting my site.
  
all i know to do in this world is to express.
  
vibware is a way of clustering my experiences and emotions into other experiences i can share with you.

a way to compile all of the fond memories influenced by the rapidly decaying vanguards motivated by profits.
  
seeing the pace at which humankind accelerates,
it causes me vertigo.
  
but i wish to take with me some of the lessons.

to wherever humanity decides to go.
  
as magic,
as tales,
closing the cycle finally.
  
like how one is
and another later re-discovers.
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