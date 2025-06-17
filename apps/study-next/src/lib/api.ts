import type { Task } from '@study/api';

export async function getTasks() {
  const res = await fetch('http://localhost:3000/tasks');
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json() as Promise<Task[]>;
}

export async function createTask(
  task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>,
) {
  const res = await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error('Failed to create task');
  return res.json() as Promise<Task>;
}
