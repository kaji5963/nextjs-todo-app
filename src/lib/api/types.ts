export type TodoType = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type TodoResponseType = {
  todos: TodoType[];
};

export type TodoRegisterType = {
  title: string;
  description: string;
};

export type TodoUpdateType = {
  title: string;
  description: string;
};
