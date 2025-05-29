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
      "Hi, I'm Mark Dell and I'm trying to learn Vue! It should be pretty simple to run locally, and I've set up Firebase for login functionality up here somewhere ↖️",
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
          setTimeout(typeParagraph, PARAGRAPH_DELAY);
        }
      }

      typeChar();
    }

    typeParagraph();
  }
};
</script>

<style scoped>
.terminal-window {
  font-family: 'Courier New', Courier, monospace;
  color: #00ff00;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #333;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
  max-width: 800px;
  margin: 20px auto;
  position: relative;
}
#terminal-content {
  padding-top: 40px; /* Add padding to prevent overlap with the GitHub link */
}
#cursor {
  display: inline-block;
  width: 10px;
  height: 20px;
  background-color: #00ff00;
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
  color: #00ff00;
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
  color: #00ff00;
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