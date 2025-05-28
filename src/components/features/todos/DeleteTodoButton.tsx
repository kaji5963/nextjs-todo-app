"use client";

import { useState } from "react";
import { deleteTodo } from "@/lib/api/todos";

interface DeleteTodoButtonProps {
  todoId: string;
  onDeleteStart?: () => void;
}

export const DeleteTodoButton = ({
  todoId,
  onDeleteStart,
}: DeleteTodoButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      onDeleteStart?.();
      // アニメーションの時間を考慮して少し遅延させる
      await new Promise((resolve) => setTimeout(resolve, 300));
      await deleteTodo(todoId);
      window.location.reload();
    } catch (error) {
      console.error("削除に失敗しました:", error);
      // TODO: エラー通知の実装
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className="p-2 rounded-full transition-colors cursor-pointer bg-red-50 text-red-400 hover:bg-red-100"
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
