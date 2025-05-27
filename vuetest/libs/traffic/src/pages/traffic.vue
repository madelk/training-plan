<script setup>
import {ref} from "vue"
const count = ref(0)

function traffic() {
  count.value++
}
</script>

<template>
  <div class="traffic">
    <h1>traffic Page</h1>
    <p>Current count: {{ count }}</p>
    <button @click="traffic">
      traffic
    </button>
  </div>
</template>

<style scoped>
    .traffic {
        max-width: 768px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 1rem;
    }
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }
    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
    }
    button:hover {
        background-color: #f0f0f0;
    }
    button:active {
        background-color: #e0e0e0;
    }   
</style>