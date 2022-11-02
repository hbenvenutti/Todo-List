import React from 'react';
import Clipboard from '../../assets/clipboard.png';
import { Component } from './styles';

export const EmptyClipboard = () => {
  return (
    <Component>
      <img src={Clipboard} alt="" />
      
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </Component>
  )
}
