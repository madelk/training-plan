<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { getNextLight, isValidLight, lightType, defaultLight } from "./traffic-helper";
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const currentLight = ref<lightType | null>(null);
const light = computed(() => currentLight.value);

onMounted(() => {
  const lightParam = route.query.light;
  if (isValidLight(lightParam)) {
    currentLight.value = lightParam;
  } else {
    currentLight.value = defaultLight;
  }
});

// Update URL when light changes
watch(currentLight, (val) => {
  router.replace({
    query: { ...route.query, light: val }
  });
});

function nextLight() {
  currentLight.value = getNextLight(currentLight.value ?? defaultLight);
}
</script>

<template>
  <div v-if="currentLight">
    <button @click="nextLight">
      Next Light
    </button>
    <div>
      <p :class="light">
        Current light: {{ light }}
      </p>
    </div>
  </div>
  <div v-else-if="currentLight === null">
    <p>Loading...</p>
  </div>
  <div v-else>
    <p>Invalid light parameter.</p>
    <button @click="nextLight">
      Reset to Default Light
    </button>
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