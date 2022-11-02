import React, { useState } from 'react'

import { EmptyClipboard } from './components/Empty-Clipboard/EmptyClipboard'
import { Header } from './components/Header/Header'
import { SearchBar } from './components/Search-Bar/SearchBar'
import { TodoCounter } from './components/Todo-Counters/TodoCounter'
import { Todo } from './components/Todo/Todo'

import { Content } from './styles/App.style'
import { GlobalStyle } from './styles/Global'


function App() {
  const [todos, setTodos] = useState(['1']);
  const [todoCounter, setTodoCounter] = useState(0);
  const [doneCounter, setDoneCounter] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <SearchBar/>
        <div className='todoList'>
          <TodoCounter/>
          {todos.length < 1 ? <EmptyClipboard/> : <Todo text='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' done={false} />}
          {todos.length < 1 ? <EmptyClipboard/> : <Todo text='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' done={true} />}
        </div>
      </Content>
    </>
  )
}

export default App
