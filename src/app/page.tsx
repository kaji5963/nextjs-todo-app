import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type TodoType = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type TodoResponse = {
  todos: TodoType[];
};

async function getData() {
  try {
    const response = await fetch("http://localhost:8080/", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("データの取得に失敗しました");
    }

    const data = await response.json();
    return data as TodoResponse;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export default async function Home() {
  const { todos } = await getData();

  return (
    <Container>
      <div className="flex justify-end mb-6">
        <Button href="/todos/new">新規作成</Button>
      </div>
      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white hover:bg-blue-50/80 rounded-lg shadow-md p-6 border border-gray-100 hover:border-blue-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {todo.title}
            </h2>
            <p className="text-gray-600 mb-4">{todo.description}</p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>
                作成日時: {new Date(todo.createdAt).toLocaleString("ja-JP")}
              </p>
              <p>
                更新日時: {new Date(todo.updatedAt).toLocaleString("ja-JP")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
