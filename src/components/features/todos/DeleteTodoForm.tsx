"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

type DeleteTodoFormProps = {
  deleteAction: () => Promise<void>;
};

const DeleteTodoForm = ({ deleteAction }: DeleteTodoFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    await deleteAction();
    setIsModalOpen(false);
  };

  return (
    <>
      <form className="flex justify-end">
        <Button
          type="button"
          variant="danger"
          onClick={() => setIsModalOpen(true)}
        >
          削除
        </Button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Todo削除"
        message="このTodoを削除してもよろしいですか？この操作は取り消せません。"
      />
    </>
  );
};

export default DeleteTodoForm;
