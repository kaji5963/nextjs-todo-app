"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Todo } from "@/lib/api/types";
import { TodoItem } from "./TodoItem";
import { useState, useEffect } from "react";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos: initialTodos }: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  useEffect(() => {
    setTodos(initialTodos);
  }, [initialTodos]);

  const handleDelete = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <AnimatePresence mode="popLayout">
      <div className="space-y-6">
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <TodoItem todo={todo} onDelete={handleDelete} />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};
