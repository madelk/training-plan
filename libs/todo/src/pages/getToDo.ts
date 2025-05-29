import { useQuery } from '@tanstack/vue-query';

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

export const getToDo = () => useQuery<Todo[]>({ queryKey, queryFn });
