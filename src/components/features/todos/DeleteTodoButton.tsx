"use client";

import { useState } from "react";
import { deleteTodo } from "@/lib/api/todos";

interface DeleteTodoButtonProps {
  todoId: string;
  onDelete?: (id: string) => void;
  onDeleteStart?: () => void;
}

export const DeleteTodoButton = ({
  todoId,
  onDelete,
  onDeleteStart,
}: DeleteTodoButtonProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      onDeleteStart?.();
      await deleteTodo(todoId);
      onDelete?.(todoId);
    } catch (error) {
      console.error("Failed to delete todo:", error);
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 rounded-full transition-colors cursor-pointer bg-red-50 text-red-400 hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="削除"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
};
