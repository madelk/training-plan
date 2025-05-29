<script setup lang="ts">
defineProps<{
  isLoading: any;
}>();
</script>

<template>
  <p
    v-if="isLoading"
    style="text-align: center; font-size: 1.2em; color: gray"
  >
    <span
      class="loader"
      style="
        display: inline-block;
        width: 1em;
        height: 1em;
        border: 2px solid #ccc;
        border-top-color: #007bff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      "
    />
    <br>
    Loading...
  </p>
</template>
