import React, { useState } from 'react'

import { EmptyClipboard } from './components/Empty-Clipboard/EmptyClipboard'
import { Header } from './components/Header/Header'
import { InputBar } from './components/Input-Bar/InputBar'
import { TodoCounter } from './components/Todo-Counters/TodoCounter'
import { TodoList } from './components/Todo-List/TodoList'

import { Content } from './styles/App.style'
import { GlobalStyle } from './styles/Global'

export interface TodoInterface {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const todosDb = [
    {
      id: 1,
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      done: false
    },
    {
      id: 2,
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      done: true
    }
  ]

  const [todos, setTodos] = useState<TodoInterface[]>(todosDb);
  const [todoCounter, setTodoCounter] = useState(2);
  const [doneCounter, setDoneCounter] = useState(1);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <InputBar 
          todos={todos}
          todoCounter={todoCounter}
          setTodos={setTodos}
          setTodoCounter={setTodoCounter}
        />
        

        <div className='todoList'>
          <TodoCounter todoCounter={todoCounter} doneCounter={doneCounter}/>
          {todos.length > 0 ? <TodoList todos={todos} /> : <EmptyClipboard/>}
        </div>
      </Content>
    </>
  )
}

export default App
