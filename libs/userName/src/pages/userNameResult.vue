<script setup lang="ts">
const props = defineProps({
  "userName": {
    type: String,
    default: ""
  }
})
const emit = defineEmits(["clear-name"])
</script>

<template>
  <div v-if="userName">
    Hi there {{ userName }}
    <button @click="emit('clear-name')">
      Forget me
    </button>
  </div>
</template>

<style scoped></style>

