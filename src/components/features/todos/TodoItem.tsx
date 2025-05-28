import { TodoType } from "@/lib/api/types";
import Link from "next/link";

interface TodoItemProps {
  todo: TodoType;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <Link href={`/todos/${todo.id}/edit`}>
      <div className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white hover:bg-blue-50/80 rounded-lg shadow-md p-6 border border-gray-100 hover:border-blue-200 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {todo.title}
        </h2>
        <p className="text-gray-600 mb-4">{todo.description}</p>
        <div className="text-sm text-gray-500 space-y-1">
          <p>作成日時: {new Date(todo.createdAt).toLocaleString("ja-JP")}</p>
          <p>更新日時: {new Date(todo.updatedAt).toLocaleString("ja-JP")}</p>
        </div>
      </div>
    </Link>
  );
};
