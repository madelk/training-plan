<script setup lang="ts">
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import GoogleLoginButton from './components/GoogleLoginButton.vue';
import { navLinks } from './utils/navLinks';

const user = ref({
  id: 1,
  username: '',
  email: 'unicorn42@example.com',
});
function updateUsername(username: string) {
  user.value.username = username;
}
provide('user', { user, updateUsername });

const route = useRoute();
const pageName = computed(() => {
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
      <Navbar />
    </header>
    <nuxt-page />
  </main>
</template>

<style scoped lang="css">
/* Adjust main content to account for fixed navbar */
main {
  padding-top: 4rem; /* Height of the navbar */
}
</style>
