<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';

const emit = defineEmits(["buttonClick"])
defineProps<ButtonHTMLAttributes>()
</script>

<template>
  <button
    v-bind="$props"
    @click="emit('buttonClick')"
  >
    <slot>
      Submit
    </slot>
  </button>
</template>

<style scoped>
button {
  padding: 0.5em;
  border-radius: 0.5em;
  text-transform: uppercase;
  font-weight: bold;
  background-color: aqua;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: black;
    color: aqua;
  }
}
</style>

