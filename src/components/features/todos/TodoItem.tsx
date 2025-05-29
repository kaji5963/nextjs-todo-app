"use client";

import { Todo } from "@/lib/api/types";
import Link from "next/link";
import { ToggleCompleteButton } from "./ToggleCompleteButton";
import { DeleteTodoButton } from "./DeleteTodoButton";
import { useState } from "react";

interface TodoItemProps {
  todo: Todo;
  onDelete?: (id: string) => void;
}

export const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <div
      className={`group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white hover:bg-blue-50/80 rounded-lg shadow-md p-6 border border-gray-100 hover:border-blue-200 mb-6 ${
        isDeleting ? "opacity-0 scale-95 -translate-y-4" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href={`/todos/${todo.id}/edit`} className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {todo.title}
          </h2>
          <p className="text-gray-600 mb-4">{todo.description}</p>
          <div className="text-xs text-gray-500 space-y-1">
            <p>作成日時: {new Date(todo.createdAt).toLocaleString("ja-JP")}</p>
            {todo.createdAt !== todo.updatedAt && (
              <p>
                更新日時: {new Date(todo.updatedAt).toLocaleString("ja-JP")}
              </p>
            )}
          </div>
        </Link>
        <div className="ml-4 flex flex-col items-center gap-4">
          <ToggleCompleteButton
            todoId={todo.id}
            completed={todo.completed}
            title={todo.title}
            description={todo.description}
          />
          <DeleteTodoButton
            todoId={todo.id}
            onDelete={onDelete}
            onDeleteStart={() => setIsDeleting(true)}
          />
        </div>
      </div>
    </div>
  );
};
