import { registerFormAction } from "@/actions/todoAction";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

const RegisterTodoPage = () => {
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">新規作成</h1>

          <form className="space-y-4" action={registerFormAction}>
            <Input
              id="title"
              name="title"
              type="text"
              label="タイトル"
              required
              placeholder="タイトルを入力"
            />

            <Textarea
              id="description"
              name="description"
              label="説明"
              required
              rows={4}
              placeholder="説明を入力"
            />

            <div className="flex justify-end space-x-4 pt-4">
              <Button type="submit">作成</Button>
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

export default RegisterTodoPage;
