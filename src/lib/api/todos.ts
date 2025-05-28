import {
  TodoResponseType,
  TodoRegisterType,
  TodoUpdateType,
  TodoType,
} from "./types";

const API_BASE_URL = "http://localhost:8080";

export const getTodo = async (id: string): Promise<TodoType> => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}/edit`, {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("指定されたTodoが見つかりません");
      }
      throw new Error("データの取得に失敗しました");
    }

    const todo: TodoType = await response.json();
    return todo;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getTodoList = async (): Promise<TodoResponseType> => {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("データの取得に失敗しました");
    }

    const todoList: TodoResponseType = await response.json();

    return todoList;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const registerTodo = async (todo: TodoRegisterType): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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

export const updateTodo = async (
  id: string,
  todo: TodoUpdateType
): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
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
