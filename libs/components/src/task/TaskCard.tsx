import React from 'react';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  onStatusChange?: (id: string, status: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function TaskCard({
  id,
  title,
  description,
  status,
  onStatusChange,
  onEdit,
  onDelete,
}: TaskCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        <div className="flex space-x-2">
          <select
            value={status}
            onChange={(e) => onStatusChange?.(id, e.target.value)}
            className="rounded border border-gray-300 text-sm"
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button
            onClick={() => onEdit?.(id)}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete?.(id)}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
