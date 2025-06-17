import type { Task } from '@study/api';

const API_URL = 'http://localhost:3000';

export const useTasks = () => {
  const tasks = ref<Task[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchTasks() {
    loading.value = true;
    try {
      const res = await fetch(`${API_URL}/tasks`);
      if (!res.ok) throw new Error('Failed to fetch tasks');
      tasks.value = await res.json();
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Failed to fetch tasks';
    } finally {
      loading.value = false;
    }
  }

  return {
    tasks,
    loading,
    error,
    fetchTasks,
  };
};
