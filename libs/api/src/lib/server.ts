import * as Hapi from '@hapi/hapi';
import { Task } from '../interfaces/task.interface';

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'], // Allow all origins
    },
  },
});

// In-memory store for tasks (replace with SQLite in production)
const tasks: Task[] = [];

// Route configuration will go here

export { server };
