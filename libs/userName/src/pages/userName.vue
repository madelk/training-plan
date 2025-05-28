<script setup lang="ts">
import UserNameResult from "./userNameResult.vue"
import {FancyButton} from "@vuetest/components";
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
  <FancyButton @click="submitName">
    Submit
  </FancyButton>
  <UserNameResult 
    :user-name="submittedName"
    @clear-name="clearName"
  />
</template>

<style scoped></style>

