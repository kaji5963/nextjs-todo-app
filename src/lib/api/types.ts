// 基本のTodo実体
export interface Todo {
  id: number;
  title: string;
  description: string;
  // completed: boolean; // 通常のTodoアプリに必要
  createdAt: string;
  updatedAt: string;
}

// APIレスポンス型
export interface TodoResponse {
  todos: Todo[];
}

// 入力用の基本型
export interface TodoInput {
  title: string;
  description: string;
}

// 作成用の型（必須フィールドのみ）
export type TodoCreate = TodoInput;

// 更新用の型（部分更新対応 + completed状態も変更可能）
export interface TodoUpdate {
  title?: string;
  description?: string;
  // completed?: boolean;
}
