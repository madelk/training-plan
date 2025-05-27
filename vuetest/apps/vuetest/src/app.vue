<script setup lang="ts">



import { useRoute } from 'vue-router';
import { computed, onMounted, watch } from 'vue';

const route = useRoute();
const pageName = computed(() => {
  const segments = route.path.split('/').filter(Boolean);
  return segments.length === 0 ? 'Home' : segments[segments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
});

onMounted(() => {
  document.title = `Vue Test App - ${pageName.value}`;
});

watch(
  () => route.path,
  () => {
    document.title = `Vue Test App - ${pageName.value}`;
  }
);
</script>

<template>
  <main>
    <header>
      <nav>
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink to="/about">
          About
        </NuxtLink>
        <NuxtLink to="/increment">
          Increment Number
        </NuxtLink>
        <NuxtLink to="/traffic">
          Traffic Lights
        </NuxtLink>
      </nav>
    </header>
    <nuxt-page />
  </main>
</template>

<style scoped lang="css">
header {
  line-height: 1.5;
  max-width: 100vw;
}

nav > a {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
