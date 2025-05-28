<script setup lang="ts">
const emit = defineEmits(['buttonClick']);
import type { PropType, ButtonHTMLAttributes } from 'vue';
defineProps({
  btnType: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'submit',
  },
});
</script>

<template>
  <button
    :type="btnType"
    @click="emit('buttonClick')"
  >
    <slot> Submit </slot>
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
