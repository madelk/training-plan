<template>
  <button
    class="google-login-button"
    @click="signInWithGoogle"
  >
    <img
      src="https://www.pngall.com/wp-content/uploads/13/Google-Logo-PNG.png"
      alt="Google Logo"
    >
    Login with Google
  </button>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const user = ref({
  id: 1,
  username: '',
  email: '',
});

async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const userCredential = result.user;

    user.value = {
      id: parseInt(userCredential.uid, 10) || 0,
      username: userCredential.displayName || 'Anonymous',
      email: userCredential.email || '',
    };
  } catch (error: any) {
    console.error('Login failed:', error.message || 'An error occurred');
  }
}
</script>

<style scoped lang="css">
.google-login-button {
  background-color: #FFFFFF; /* White background */
  color: #4285F4; /* Google Blue */
  font-weight: bold;
  border: 1px solid #4285F4;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 1rem auto;
}

.google-login-button:hover {
  background-color: #F1F3F4; /* Light gray for hover effect */
}

.google-login-button img {
  height: 20px;
}
</style>
