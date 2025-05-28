<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { LoadingIndicator } from '@vuetest/components';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const queryKey = ['todo'];
const queryFn = async (): Promise<Todo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const json = await response.json();
  return new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      resolve(json);
    }, 2000);
  });
};

const users = [
  {
    id: 1,
    username: 'unicorn42',
  },
  {
    id: 2,
    username: 'rainbow88',
  },
  {
    id: 3,
    username: 'starrynight',
  },
];
const { data, suspense, isLoading } = useQuery<Todo[]>({ queryKey, queryFn });

import { onMounted } from 'vue';

onMounted(async () => {
  await suspense();
});
</script>

<template>
  <section>
    <h2>Todo List</h2>
    <LoadingIndicator :is-loading="isLoading" />
    <ul style="list-style-type: none; padding: 0">
      <li
        v-for="todo in data"
        :key="todo.id"
        style="
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-left: 8px;
        "
      >
        <input
          :id="`todo-checkbox-${todo.id}`"
          style="vertical-align: middle"
          type="checkbox"
          :checked="todo.completed"
        />
        <label style="margin-left: 10px" :for="`todo-checkbox-${todo.id}`">
          {{ todo.title }}
        </label>
        <span style="font-size: 0.8em; color: gray; margin-left: 10px">
          Assigned to:
          {{
            users.find((user) => user.id === todo.userId)?.username ||
            'Unknown User'
          }}
        </span>
      </li>
    </ul>
  </section>
</template>

<style>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
