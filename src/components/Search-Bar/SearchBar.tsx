import {BsPlusCircle} from 'react-icons/bs';

import { Component } from "./styles";

export const SearchBar = () => {

  return (
    <Component>
      <input placeholder="Adicione uma nova tarefa" type="text" />
      <button>{'Criar '}<BsPlusCircle/></button>
    </Component>
  )
}
