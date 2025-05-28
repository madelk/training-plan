<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';

const fetcher = async () =>
  await fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
    response.json(),
  );

const { data, suspense, isLoading } = useQuery({ queryKey: ['todo'], queryFn: fetcher });

await suspense();

</script>

<template>
  <section>
    <h2>Todo List</h2>
    <p v-if="isLoading">
      Loading...
    </p>
    <ul v-else>
      <li
        v-for="todo in data"
        :key="todo.id"
      >
        {{ todo.title }}
        {{ todo.competed ? '(completed)' : '(not completed)' }}
        {{ todo.userId }}
      </li>
    </ul>
  </section>
</template>
