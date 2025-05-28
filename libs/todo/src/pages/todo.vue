<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';

const fetcher = async () =>
  await fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
    response.json(),
  );

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
  ]
const { data, suspense, isLoading } = useQuery({ queryKey: ['todo'], queryFn: fetcher });

await suspense();

</script>

<template>
  <section>
    <h2>Todo List</h2>
    <p v-if="isLoading">
      Loading...
    </p>
    <ul
      v-else
      style="list-style-type: none; padding: 0;"
    >
      <li
        v-for="todo in data"
        :key="todo.id"
        style="margin-bottom: 10px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin-left: 8px"
      >
        <input
          :id="
            `todo-checkbox-${todo.id}`"
          style="vertical-align: middle;"
          type="checkbox"
          :checked="todo.completed"
        >
        <label
          style="margin-left: 10px;"
          :for="`todo-checkbox-${todo.id}`"
        >
          {{ todo.title }}
        </label>
        <span style="font-size: 0.8em; color: gray; margin-left: 10px;">
          Assigned to:
          {{ users.find(user => user.id === todo.userId)?.username || 'Unknown User' }}
        </span>
      </li>
    </ul>
  </section>
</template>
