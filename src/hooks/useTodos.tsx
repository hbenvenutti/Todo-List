import { createContext, useContext, ReactNode, useState } from "react";

export interface TodoInterface {
  id: number;
  text: string;
  done: boolean;
}

interface TodosContextData {
  todos: TodoInterface[];
  todoCounter: number;
  doneCounter: number;
  setTodos: (todos: TodoInterface[]) => void;
  setTodoCounter: (counter: number) => void;
  setDoneCounter: (counter: number) => void;
}

interface TodosProps {
  children: ReactNode;
}

const TodosContext = createContext<TodosContextData>({} as TodosContextData)

export const TodosProvider = ({children}: TodosProps) => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [todoCounter, setTodoCounter] = useState(0);
  const [doneCounter, setDoneCounter] = useState(0);


  return (
    <TodosContext.Provider value={{todos, todoCounter, doneCounter, setTodos, setDoneCounter, setTodoCounter}}>
      {children}
    </TodosContext.Provider>
  )
}

export const useTodos = () => {
  const context = useContext(TodosContext);

  return context;
}
