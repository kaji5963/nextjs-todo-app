"use client";

import { useState } from "react";
import { updateTodo } from "@/lib/api/todos";

interface ToggleCompleteButtonProps {
  todoId: string;
  completed: boolean;
  title: string;
  description: string;
}

export const ToggleCompleteButton = ({
  todoId,
  completed: initialCompleted,
  title,
  description,
}: ToggleCompleteButtonProps) => {
  const [completed, setCompleted] = useState(initialCompleted);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async () => {
    try {
      setIsLoading(true);
      await updateTodo(todoId, {
        title,
        description,
        completed: !completed,
      });
      setCompleted(!completed);
    } catch (error) {
      console.error("完了状態の更新に失敗しました:", error);
      // TODO: エラー通知の実装
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isLoading}
      className={`p-2 rounded-full transition-colors cursor-pointer ${
        completed
          ? "bg-green-100 text-green-600 hover:bg-green-200"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
      aria-label={completed ? "完了済み" : "未完了"}
    >
      {completed ? (
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </button>
  );
};
