import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { getTodo } from "@/lib/api/todos";
import React from "react";
import { updateFormAction } from "@/actions/todoAction";

interface EditTodoPageProps {
  params: Promise<{ id: string }>;
}

const EditTodoPage = async ({ params }: EditTodoPageProps) => {
  const { id } = await params;
  const todo = await getTodo(id);

  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">編集</h1>

          <div className="space-y-4">
            <form action={updateFormAction.bind(null, id)}>
              <Input
                id="title"
                name="title"
                type="text"
                label="タイトル"
                required
                defaultValue={todo.title}
                placeholder="タイトルを入力"
              />

              <Textarea
                id="description"
                name="description"
                label="説明"
                required
                rows={4}
                defaultValue={todo.description}
                placeholder="説明を入力"
              />

              <div className="flex justify-end space-x-4 pt-4">
                <Button type="submit">更新</Button>
                <Button href="/" variant="secondary">
                  キャンセル
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditTodoPage;
