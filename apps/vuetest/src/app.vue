<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';

const fetcher = async () =>
  await fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json(),
  );

const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher });

await suspense();
console.log("data", JSON.parse(JSON.stringify(data.value)))


import { useRoute } from 'vue-router';
const user = ref({
  id: 1,
  username: '',
  email: 'unicorn42@example.com',
});
function updateUsername(username: string) {
  user.value.username = username;
}
provide('user', { user, updateUsername });

const navLinks = computed(() => [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/increment', label: 'Increment Number' },
  { to: '/traffic', label: 'Traffic Lights' },
  { to: '/userName', label: user.value.username || 'not logged in' },
]);

const route = useRoute();
const pageName = computed(() => {
  // Find the nav link whose path matches the current route
  const found = navLinks.value.find((link) => link.to === route.path);
  return found ? found.label : 'Vue Test App';
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
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </header>
    <nuxt-page />

    <!-- <section>
      <h2>API Response</h2>
      <ul>
        <li
          v-for="post in data"
          :key="post.id"
        >
          {{ post.title }}
        </li>
      </ul>
    </section> -->
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
