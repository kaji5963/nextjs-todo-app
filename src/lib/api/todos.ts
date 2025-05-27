import { TodoResponseType, TodoRegisterType } from "./types";

const API_BASE_URL = "http://localhost:8080";

export const getTodos = async (): Promise<TodoResponseType> => {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("データの取得に失敗しました");
    }

    const todos = await response.json();

    return todos;
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

    console.log(response.json);

    if (!response.ok) {
      throw new Error("Todoの作成に失敗しました");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
