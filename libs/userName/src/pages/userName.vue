<script setup lang="ts">
import { ref } from 'vue';
const userName = ref<string | undefined>();
const submittedName = ref<string>("");
const submitName = () => {
  if (userName.value)
    submittedName.value = userName.value;
};
</script>

<template>
  User Name
  <input
    v-model="userName"
    placeholder="Enter your name"
  >
  <button @click="submitName">
    Submit
  </button>
  {{ submittedName }}
</template>

<style scoped></style>

