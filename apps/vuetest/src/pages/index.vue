<template>
  <div class="terminal-window">
    <div class="github-link">
      <a 
        href="https://github.com/madelk/vue" 
        target="_blank"
      >
        <img 
          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
          alt="GitHub Icon" 
          class="github-icon"
        >
        GitHub
      </a>
    </div>
    <div id="terminal-content">
      <!-- The paragraphs will be dynamically added here -->
      <span id="cursor" />
    </div>
  </div>
</template>

<script>
const TYPING_SPEED = 20; // Typing speed in milliseconds
const PARAGRAPH_DELAY = 1000; // Delay before the next paragraph in milliseconds
const CURSOR_OFFSET_LEFT = 20; // Cursor offset from the left
const CURSOR_OFFSET_TOP = 18; // Cursor offset from the top

export default {
  mounted() {
    const paragraphs = [
      "Hi, I'm Mark Dell and I'm trying to learn Vue! It should be pretty simple to run locally, and I've set up Firebase for login functionality up here somewhere 👆",
      "I have a CI pipeline running tests and another deploying builds to GitHub Pages.",
      "This isn't polished yet, but I'm exploring Vue and finding it quite different from React.",
      "There's a few more pages to add, but I wanted to get this running so I can start experimenting.",
      "Oh, and I started this project with NX. I'm exploring how a large-scale Vue app might be structured and organized. Always trying to run before I can walk."
    ];

    const terminalContent = document.getElementById('terminal-content');
    const cursor = document.getElementById('cursor');

    let currentParagraph = 0;

    function typeParagraph() {
      if (currentParagraph >= paragraphs.length) {
        cursor.style.display = 'none';
        return;
      }

      const paragraph = document.createElement('p');
      terminalContent.insertBefore(paragraph, cursor);

      let charIndex = 0;
      const text = paragraphs[currentParagraph];

      function typeChar() {
        if (charIndex < text.length) {
          paragraph.innerHTML += text[charIndex];
          charIndex++;
          cursor.style.display = 'inline-block';
          cursor.style.position = 'absolute';

          const range = document.createRange();
          range.selectNodeContents(paragraph);
          range.setStart(paragraph.firstChild, charIndex);
          range.collapse(true);

          const rect = range.getBoundingClientRect();
          const containerRect = terminalContent.getBoundingClientRect();

          cursor.style.left = `${rect.left - containerRect.left + CURSOR_OFFSET_LEFT}px`;
          cursor.style.top = `${rect.top - containerRect.top + CURSOR_OFFSET_TOP}px`;

          setTimeout(typeChar, TYPING_SPEED);
        } else {
          currentParagraph++;

          // Add an extra line break between paragraphs
          const lineBreak = document.createElement('br');
          terminalContent.insertBefore(lineBreak, cursor);

          setTimeout(typeParagraph, PARAGRAPH_DELAY);
        }
      }

      typeChar();
    }

    typeParagraph();
  }
};
</script>

<style>
:root {
  --background-color: #483AAA;
  --border-color: #867ADE;
  --text-color: #867ADE;
}
</style>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/commodore-64-pixelized');

.terminal-window {
  font-family: 'Commodore 64 Pixelized', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
  border: 60px solid var(--border-color);
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: calc(100vh - 55px); /* Leave room for the navbar */
  margin: 0;
  position: fixed;
  top: 55px; /* Offset for the navbar */
  left: 0;
  filter: blur(0.6px); /* Apply a slight blur effect */
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px,
    transparent 3px
  );
  background-size: 100% 4px; /* Adjust the spacing of the scanlines */
  text-transform: uppercase; /* Make all text uppercase */
  font-size: 1.5rem; /* Increase font size */
}

@media (max-width: 768px) {
  .terminal-window {
    border: 20px solid var(--border-color); /* Reduce border size on mobile */
  }
}

#terminal-content {
  padding-top: 40px; /* Add padding to prevent overlap with the GitHub link */
}

#cursor {
  display: inline-block;
  width: 1em;
  height: 1.2em;
  background-color: var(--border-color);
  animation: blink 0.5s steps(2, start) infinite;
}
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
p {
  margin-bottom: 10px;
}
a {
  color: var(--text-color);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.github-link {
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: center;
}
.github-link a {
  color: var(--text-color);
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  display: inline-flex;
  align-items: center;
}
.github-link a:hover {
  text-decoration: underline;
}
.github-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>