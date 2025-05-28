export interface TodoType {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoResponseType {
  todos: TodoType[];
}

export interface TodoRegisterType {
  title: string;
  description: string;
}

export interface TodoUpdateType {
  title: string;
  description: string;
}
