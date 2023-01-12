import React, { useState } from 'react'

import { Header } from './components/Header/Header'
import { InputBar } from './components/Input-Bar/InputBar'
import { TodoCounter } from './components/Todo-Counters/TodoCounter'
import { TodoList } from './components/Todo-List/TodoList'
import { TodosProvider } from './hooks/useTodos'

import { Content } from './styles/App.style'
import { GlobalStyle } from './styles/Global'



function App() {

  return (
    <>
      <GlobalStyle />
      <TodosProvider>
        <Header />
        <Content>
          <InputBar/>
          

          <div className='todoList'>
            <TodoCounter/>
            <TodoList/> 
          </div>
        </Content>
      </TodosProvider>
    </>
  )
}

export default App
