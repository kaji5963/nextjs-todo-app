"use server";

import { deleteTodo, registerTodo, updateTodo } from "@/lib/api/todos";
import { redirect } from "next/navigation";

/**
 * Todoの新規登録を行うServer Action
 * @param {FormData} formData - フォームデータ（title, descriptionを含む）
 * @throws {Error} タイトルまたは説明が空の場合
 * @returns {Promise<void>} 登録成功時は一覧ページにリダイレクト
 */
export const registerFormAction = async (formData: FormData) => {
  let redirectTo = "";

  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!title || !description) {
      throw new Error("タイトルと説明は必須です");
    }

    await registerTodo({
      title,
      description,
    });

    redirectTo = "/";
  } catch (error) {
    console.error("登録エラー:", error);
    throw error;
  }

  // 登録成功後、一覧ページにリダイレクト
  redirect(redirectTo);
};

/**
 * Todoの更新を行うServer Action
 * @param {string} id - 更新対象のTodoのID
 * @param {FormData} formData - フォームデータ（title, descriptionを含む）
 * @throws {Error} タイトルまたは説明が空の場合
 * @returns {Promise<void>} 更新成功時は一覧ページにリダイレクト
 */
export const updateFormAction = async (id: string, formData: FormData) => {
  let redirectTo = "";
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!title || !description) {
      throw new Error("タイトルと説明は必須です");
    }

    await updateTodo(id, { title, description });

    redirectTo = "/";
  } catch (error) {
    console.error("更新エラー:", error);
    throw error;
  }

  // 更新成功後、一覧ページにリダイレクト
  redirect(redirectTo);
};

/**
 * Todoの削除を行うServer Action
 * @param {string} id - 削除対象のTodoのID
 * @throws {Error} 削除に失敗した場合
 * @returns {Promise<void>} 削除成功時は一覧ページにリダイレクト
 */
export const deleteFormAction = async (id: string) => {
  let redirectTo = "";

  try {
    await deleteTodo(id);

    redirectTo = "/";
  } catch (error) {
    console.error("削除エラー:", error);
    throw error;
  }

  redirect("/");
};
