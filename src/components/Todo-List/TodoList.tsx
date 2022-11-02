import { useTodos } from "../../hooks/useTodos";
import { EmptyClipboard } from "../Empty-Clipboard/EmptyClipboard";
import { Todo } from "../Todo/Todo"
import { Component } from "./styles"

export const TodoList = () => {
  const { todos } = useTodos()
  
  return (
    <Component>
      {
        todos.length === 0 
          ? <EmptyClipboard/>
          : todos.map(todo => {
            return (
              <Todo 
                key={todo.id} 
                text={todo.text} 
                done={todo.done}
                id={todo.id}
              />
            )
          })
      }
    </Component>
  )
}
