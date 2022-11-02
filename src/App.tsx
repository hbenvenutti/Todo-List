import React, { useState } from 'react'

import { EmptyClipboard } from './components/Empty-Clipboard/EmptyClipboard'
import { Header } from './components/Header/Header'
import { SearchBar } from './components/Search-Bar/SearchBar'
import { TodoCounter } from './components/Todo-Counters/TodoCounter'

import { Content } from './styles/App.style'
import { GlobalStyle } from './styles/Global'


function App() {
  const [todos, setTodos] = useState([]);
  const [todoCounter, setTodoCounter] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <SearchBar/>
        <div className='todoList'>
          <TodoCounter/>
          {todos.length < 1 && <EmptyClipboard/>}
        </div>
      </Content>
    </>
  )
}

export default App
