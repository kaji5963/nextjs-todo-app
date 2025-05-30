// 基本のTodo実体
export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
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
export type TodoRegister = TodoInput;

// 更新用の型（部分更新対応 + completed状態も変更可能）
export interface TodoUpdate {
  title?: string;
  description?: string;
  completed?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  createdAt: string;
  updatedAt: string;
  rememberToken: string;
  rememberTokenExpiresAt: string;
}

export interface SignupInput {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface loginInput {
  email: string;
  password: string;
  rememberMe: boolean;
}
