import { cookies } from "next/headers";
import { TodoResponse, TodoRegister, TodoUpdate, Todo } from "./types";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const API_BASE_URL = "http://localhost:8080";

/**
 * 指定されたIDのTodoを取得する
 * @param {string} id - 取得対象のTodoのID
 * @returns {Promise<Todo>} 取得したTodoのデータ
 * @throws {Error} 指定されたTodoが見つからない場合、またはデータ取得に失敗した場合
 */
export const getTodo = async (id: string): Promise<Todo> => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}/edit`, {
      cache: "no-store",
      credentials: "include",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("指定されたTodoが見つかりません");
      }
      throw new Error("データの取得に失敗しました");
    }

    const todo: Todo = await response.json();
    return todo;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

/**
 * Todoの一覧を取得する
 * @returns {Promise<TodoResponse>} Todoの一覧データ
 * @throws {Error} データ取得に失敗した場合
 */
export const getTodoList = async (
  sessionToken: RequestCookie,
  userInfo: RequestCookie | undefined
): Promise<TodoResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${sessionToken.value}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("データの取得に失敗しました");
    }

    const todoList: TodoResponse = await response.json();
    return todoList;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

/**
 * 新しいTodoを登録する
 * @param {TodoRegister} todo - 登録するTodoのデータ
 * @returns {Promise<void>}
 * @throws {Error} Todoの作成に失敗した場合
 */
export const registerTodo = async (todo: TodoRegister): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error("Todoの作成に失敗しました");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

/**
 * 既存のTodoを更新する
 * @param {string} id - 更新対象のTodoのID
 * @param {TodoUpdate} todo - 更新するTodoのデータ
 * @returns {Promise<void>}
 * @throws {Error} Todoの更新に失敗した場合
 */
export const updateTodo = async (
  id: string,
  todo: TodoUpdate
): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error("Todoの更新に失敗しました");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

/**
 * Todoを削除する
 * @param {string} id - 削除対象のTodoのID
 * @returns {Promise<void>}
 * @throws {Error} Todoの削除に失敗した場合
 */
export const deleteTodo = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}/delete`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Todo削除に失敗しました");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
