import React from 'react';

import {HiOutlineTrash} from 'react-icons/hi'
import {ImCheckmark} from 'react-icons/im'
import { Component } from "./styles";
import { useTodos } from '../../hooks/useTodos';

interface TodoProps {
  id: number;
  text: string;
  done: boolean;
}

export const Todo = ({text, done, id}: TodoProps) => {
    const {todos, todoCounter, doneCounter, setTodos, setTodoCounter, setDoneCounter} = useTodos()

  const handleTodoStatusChange = () => {
    const newTodos = [...todos];

    const index = todos.findIndex(todo => todo.id === id);
    
    const done = newTodos[index].done;

    done 
      ? setDoneCounter(doneCounter - 1)
      : setDoneCounter(doneCounter + 1); 

    newTodos[index].done = !done;
    

    setTodos(newTodos);
    
    return;
  }

  const handleTodoDeletion = () => {
    const newTodos = [...todos];
    const index = todos.findIndex(todo => todo.id === id);
    const done = newTodos[index].done;

    done && setDoneCounter(doneCounter - 1)

    newTodos.splice(index, 1);

    setTodoCounter(todoCounter - 1);

    setTodos(newTodos);

    return
  }


  return (
    <Component className='todo' done={done}>

      <button onClick={handleTodoStatusChange} type="button" className='radio'>
        {done && <ImCheckmark className='check'/>}
      </button>

      <p>{text}</p>

      <button type='button' onClick={handleTodoDeletion} className='trash'>
        <HiOutlineTrash />
      </button>

    </Component>
  )
}
