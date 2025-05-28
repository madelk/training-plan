<script setup lang="ts">
import { ref } from 'vue';
const userName = ref<string | undefined>();
</script>

<template>
  User Name
  <input
    v-model="userName"
    placeholder="Enter your name"
  >
</template>

<style scoped></style>
