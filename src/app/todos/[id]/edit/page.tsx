import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { getTodo, updateTodo } from "@/lib/api/todos";
import { redirect } from "next/navigation";
import React from "react";

const EditTodoPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const todo = await getTodo(id);

  const updateFormAction = async (formData: FormData) => {
    "use server";

    try {
      const title = formData.get("title") as string;
      const description = formData.get("description") as string;

      if (!title || !description) {
        throw new Error("タイトルと説明は必須です");
      }

      await updateTodo(id, { title, description });

      // 更新成功後、一覧ページにリダイレクト
      return redirect("/");
    } catch (error) {
      console.error("更新エラー:", error);
      throw error;
    }
  };

  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">編集</h1>

          <form action={updateFormAction} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                タイトル
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                defaultValue={todo.title}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="タイトルを入力"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                説明
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                defaultValue={todo.description}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="説明を入力"
              />
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button type="submit">更新</Button>
              <Button href="/" variant="secondary">
                キャンセル
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default EditTodoPage;
