import { computed } from 'vue';

export const navLinks = computed(() => [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/increment', label: 'Increment Number' },
  { to: '/traffic', label: 'Traffic Lights' },
  { to: '/todo', label: 'Todo List' },
  { to: '/userName', label: 'User Name' },
]);
