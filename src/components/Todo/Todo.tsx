import React from 'react';
import {css} from 'styled-components'

import {HiOutlineTrash} from 'react-icons/hi'
import {ImCheckmark} from 'react-icons/im'
import { Component } from "./styles";

interface TodoProps {
  text: string;
  done: boolean;
}

export const Todo = ({text, done}: TodoProps) => {
  return (
    <Component done={done}>
      <button className='radio'>
        {done && <ImCheckmark className='check'/>}
      </button>
      <p>{text}</p>

      <button className='trash'>
        <HiOutlineTrash />
      </button>
    </Component>
  )
}
