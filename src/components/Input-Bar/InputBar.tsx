import { ChangeEvent, FormEvent, useState } from 'react';
import {BsPlusCircle} from 'react-icons/bs';

import { useTodos } from '../../hooks/useTodos';
import { Component } from "./styles";


export const InputBar = () => {
  const {todos, todoCounter, setTodos, setTodoCounter} = useTodos()
  const [idCounter, setIdCounter] = useState(0);
  const [text, setText] = useState('');
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const todo = {
      text,
      id: idCounter,
      done: false
    }

    setTodos([...todos, todo]);
    setTodoCounter(todoCounter + 1);
    setIdCounter(idCounter + 1);
    setText('');
  }

  return (
    <Component onSubmit={e => handleSubmit(e)}>
      <input 
        placeholder="Adicione uma nova tarefa" 
        type="text"
        value={text}
        onChange={e => handleInputChange(e)}
      />
      <button type='submit'>{'Criar'} <BsPlusCircle/></button>
    </Component>
  )
}
