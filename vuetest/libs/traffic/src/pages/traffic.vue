<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const TRAFFIC_LIGHTS = ['red', 'red-yellow', 'green', 'yellow'];
const route = useRoute();
const router = useRouter();
const currentLight = ref(0);
const light = computed(() => TRAFFIC_LIGHTS[currentLight.value]);

// Set initial state from URL
onMounted(() => {
  const lightParam = route.query.light;
  if (typeof lightParam === 'string') {
    const idx = TRAFFIC_LIGHTS.indexOf(lightParam);
    if (idx !== -1) {
      currentLight.value = idx;
    }
  }
});

// Update URL when light changes
watch(currentLight, (val) => {
  router.replace({
    query: { ...route.query, light: TRAFFIC_LIGHTS[val] }
  });
});

function nextLight() {
  currentLight.value = (currentLight.value + 1) % TRAFFIC_LIGHTS.length;
}
</script>

<template>
  <button @click="nextLight">
    Next Light
  </button>
  <div>
    <p :class="light">
      Current light: {{ light }}
    </p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
p {
  font-size: 24px;
  font-weight: bold;
}
p::before {
  content: 'Traffic Light: ';
}
p::after {
  content: ' 🚦';
}
p.red {
  color: red;
}
p.red-yellow {
  color: orange;
}
p.green {
  color: green;
}
p.yellow {
  color: #ffe100;
  text-shadow: 0 0 2px #fff, 0 0 0px #000;
}
p.red-yellow::before {
  content: 'Red and Yellow Light: ';
}
p.green::before {
  content: 'Green Light: ';
}
p.yellow::before {
  content: 'Yellow Light: ';
}
p.red::before {
  content: 'Red Light: ';
}
p.red::after {
  content: ' Stop!';
}
p.red-yellow::after {
  content: ' Prepare to go!';
}
p.green::after {
  content: ' Go!';
}
p.yellow::after {
  content: ' Slow down!';
}
</style>