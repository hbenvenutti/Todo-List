import { useTodos } from "../../hooks/useTodos";
import { Component } from "./styles"

export const TodoCounter = () => {
  const {todoCounter, doneCounter} = useTodos();

  return (
    <Component>
      <div className="created">
        <strong>Tarefas criadas</strong>
        <div className="counter">{todoCounter}</div>
      </div>

      <div className="concluded">
        <strong>Concluídas</strong>
        
        <div className="counter">
          {doneCounter === 0 ? doneCounter : `${doneCounter} de ${todoCounter}`}
        </div>
      </div>

    </Component>
  )
}
