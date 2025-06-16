<script setup lang="ts">
import { FancyButton } from "@study/components"
const props = defineProps({
  "userName": {
    type: String,
    default: ""
  }
})
const emit = defineEmits(["clear-name"])
</script>

<template>
  <div v-if="props.userName">
    Hi there {{ props.userName }}
    <FancyButton @click="emit('clear-name')">
      Forget me
    </FancyButton>
  </div>
</template>

<style scoped></style>

