import { TodoInterface } from "../../App";
import { Todo } from "../Todo/Todo"
import { Component } from "./styles"


interface TodoListProps {
  todos: TodoInterface[];
}

export const TodoList = ({todos}: TodoListProps) => {

  return (
    <Component>
      {todos.map(todo => {
        return <Todo key={todo.id}text={todo.text} done={todo.done}/>
        })
      }
    </Component>
  )
}
