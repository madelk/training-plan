<script setup lang="ts">
import { LoadingIndicator } from '@study/components';
import { onMounted } from 'vue';
import { getUsers } from './getUsers';
import { getToDo } from './getToDo';
import type { Todo } from './getToDo';

const {suspense: todoSuspense, isLoading: todoIsLoading, data: totoData, setTodo} = getToDo();
const {
  suspense: usersResult,
  isLoading: usersIsLoading,
  data: usersData
} = getUsers();

onMounted(async () => {
  await Promise.all([todoSuspense, usersResult]);
});

const isLoading = (todoIsLoading || usersIsLoading);

const toggleTodoCompletion = (todo: Todo) => 
  setTodo({ ...todo, completed: !todo.completed });

</script>

<template>
  <section>
    <h2>Todo List</h2>
    <LoadingIndicator :is-loading="isLoading" />
    <ul style="list-style-type: none; padding: 0">
      <li
        v-for="todo in totoData"
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
          @change="toggleTodoCompletion(todo)"
        >
        <label
          style="margin-left: 10px"
          :for="`todo-checkbox-${todo.id}`"
        >
          {{ todo.title }}
        </label>
        <span style="font-size: 0.8em; color: gray; margin-left: 10px">
          Assigned to:
          {{
            usersData?.find((user) => user.id === todo.userId)?.username ||
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
