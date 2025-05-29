<template>
  <div class="terminal-window">
    <p>
      Hi, I'm trying to learn Vue and I've got my sauce over at <a
        href="https://github.com/madelk/vue"
        target="_blank"
      >GitHub</a> so you can see how I made this mess. It should be pretty simple to run locally and I got some firebase working for login up here somewhere ↖️
    </p>
    <p>
      I have a CI pipeline running a tests and another running builds out to github pages.
    </p>
    <p>This isn't pretty, but I'm trying to get used to Vue and I'm finding it pretty wild in how it's different from react</p>
    <p>
      I have a few more pages to add, but I wanted to get this up and running so I can start playing with it.
    </p>
    <p>Oh and I started this project with NX, I'm looking at how a large scale Vue app might scale and be organsied. Always trying to run before I can walk</p>
  </div>
</template>

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
.terminal-window::after {
  content: '';
  display: inline-block;
  width: 10px;
  height: 20px;
  background-color: #00ff00;
  margin-left: 5px;
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
</style>