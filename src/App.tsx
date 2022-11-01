import React from 'react'

import { Header } from './components/Header/Header'
import { SearchBar } from './components/Search-Bar/SearchBar'
import { Content } from './styles/App.style'
import { GlobalStyle } from './styles/Global'


function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <SearchBar/>
      </Content>
    </>
  )
}

export default App
