import { Component } from "./styles"

export const TodoCounter = () => {
  return (
    <Component>
      <div className="created">
        <strong>Tarefas criadas</strong>
        <div className="counter">100</div>
      </div>

      <div className="concluded">
        <strong>Concluídas</strong>
        <div className="counter">0</div>
      </div>

    </Component>
  )
}
