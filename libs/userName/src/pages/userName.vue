<script setup lang="ts">
import UserNameResult from "./UserNameResult"
import { ref } from 'vue';
const userName = ref<string | undefined>();
const submittedName = ref<string>("");
const submitName = () => {
  if (userName.value)
    submittedName.value = userName.value;
};
const clearName = () => {
  submittedName.value = "";
}
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
  <UserNameResult 
    :user-name="submittedName"
    @clear-name="clearName"
  />
</template>

<style scoped></style>

