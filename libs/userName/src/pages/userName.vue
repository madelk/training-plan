<script setup lang="ts">
import { inject, ref } from 'vue';
import UserNameResult from './userNameResult.vue';
import { FancyButton } from '@vuetest/components';
import type { UserContext } from '@vuetest/context';

const { user, updateUsername } = inject('user') as UserContext;
const userName = ref<string | undefined>(user?.username || '');
const submittedName = ref<string>('');
const submitName = () => {
  if (userName.value){
    updateUsername(userName.value || '');
     submittedName.value = userName.value;
  }
};
const clearName = () => {
  submittedName.value = '';
  updateUsername('');
};
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
