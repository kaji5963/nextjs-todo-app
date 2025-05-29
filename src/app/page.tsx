import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { getTodoList } from "@/lib/api/todos";
import { TodoList } from "@/components/features/todos/TodoList";

const Home = async () => {
  const { todos } = await getTodoList();

  return (
    <Container>
      <div className="flex justify-end mb-4">
        <Button href="/todos/register">新規作成</Button>
      </div>
      <TodoList todos={todos} />
    </Container>
  );
};

export default Home;
