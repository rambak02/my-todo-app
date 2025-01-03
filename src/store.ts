import { create } from "zustand";

type TodoAttributes = {
  status: string;
  title: null | string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Todo = {
  id: number;
  attributes: TodoAttributes;
};

type State = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
};
export const useState = create<State>((set) => ({
  todos: [],
  loading: false,
  error: null,
  addTodo: (title: string, description: string) =>
    set((state) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        attributes: {
          status: "working",
          title,
          description,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          publishedAt: new Date().toISOString(),
        },
      };
      return {todos: [...state.todos, newTodo]}
    }),
}));
