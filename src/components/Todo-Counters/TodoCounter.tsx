import { Component } from "./styles"

interface TodoCounterProps {
  todoCounter: number;
  doneCounter: number;
}

export const TodoCounter = ({todoCounter, doneCounter}: TodoCounterProps) => {
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
