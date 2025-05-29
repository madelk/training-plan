<script setup lang="ts">

import { useRoute } from 'vue-router';
import { auth } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
  { to: '/todo', label: 'Todo List' },
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

const loginError = ref('');

const googleProvider = new GoogleAuthProvider();

async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const userCredential = result.user;

    user.value = {
      id: parseInt(userCredential.uid, 10) || 0, 
      username: userCredential.displayName || 'Anonymous',
      email: userCredential.email || ''
    };
    loginError.value = '';
  } catch (error: any) {
    loginError.value = error.message || 'An error occurred';
  }
}
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
    <section>
      <button 
        @click="signInWithGoogle"
      >
        Login with Google
      </button>
    </section>
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
