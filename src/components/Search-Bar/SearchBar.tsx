import React,  { FormHTMLAttributes } from "react";
import {BsPlusCircle} from 'react-icons/bs';

import { Component } from "./styles";

export const SearchBar = ({...props}: FormHTMLAttributes<HTMLFormElement>) => {

  return (
    <Component>
      <input placeholder="adicione uma nova tarefa" type="text" />
      <button>{'Criar '}<BsPlusCircle/></button>
    </Component>
  )
}
