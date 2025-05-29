<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li
        v-for="link in navLinks"
        :key="link.to"
        class="navbar-item"
      >
        <NuxtLink
          :to="link.to"
          class="navbar-link"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
      <li>
        <GoogleLoginButton />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { navLinks } from '../utils/navLinks';
</script>

<style scoped lang="css">
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar-list {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin: 0;
}

.navbar-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar-link:hover {
  color: #00ff00; /* Highlight color */
}
</style>
