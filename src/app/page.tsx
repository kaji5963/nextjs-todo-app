import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { TodoList } from "@/components/features/todos/TodoList";
import { redirect } from "next/navigation";
import { getAllTodoList } from "@/actions/todoAction";

const Home = async () => {
  try {
    const { todos } = await getAllTodoList();

    return (
      <Container>
        <div className="flex justify-end mb-4">
          <Button href="/todos/register">新規作成</Button>
        </div>
        <TodoList todos={todos} />
      </Container>
    );
  } catch (error) {
    console.error("Error:", error);
    redirect("/login");
  }
};

export default Home;
