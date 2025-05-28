import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { getTodoList } from "@/lib/api/todos";
import { TodoItem } from "@/components/features/todos/TodoItem";

const Home = async () => {
  const { todos } = await getTodoList();

  return (
    <Container>
      <div className="flex justify-end mb-4">
        <Button href="/todos/register">新規作成</Button>
      </div>
      <div className="space-y-6">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
