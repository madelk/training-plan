import { useQuery, useQueryClient } from '@tanstack/vue-query';

export interface Todo {
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

export const getToDo = () => {
  const queryClient = useQueryClient();

  const setTodo = (updatedTodo: Todo) => {
    queryClient.setQueryData(queryKey, (oldData: Todo[] | undefined) => {
      if (!oldData) return [];
      return oldData.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      );
    });
  };

  const addTodo = (newTodo: Todo) => {
    queryClient.setQueryData(queryKey, (oldData: Todo[] | undefined) => {
      if (!oldData) return [newTodo];
      return [...oldData, newTodo];
    });
  };

  const removeTodo = (todoId: number) => {
    queryClient.setQueryData(queryKey, (oldData: Todo[] | undefined) => {
      if (!oldData) return [];
      return oldData.filter((todo) => todo.id !== todoId);
    });
  };

  return {
    ...useQuery<Todo[]>({ queryKey, queryFn }),
    setTodo,
    addTodo,
    removeTodo,
  };
};
