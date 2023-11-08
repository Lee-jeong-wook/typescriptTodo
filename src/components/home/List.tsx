import React from 'react';
import  Todo  from '../Interfaces/Interface';
import { ListItem } from './ListItem';
import styled from 'styled-components';

const ListWrap = styled.ul`
  width: 50%;
  height: 500px;
  overflow-y: scroll;
`;

interface ListProps {
  todos: Todo[];
}

export const List = ({ todos }: ListProps) => {
  return (
    <ListWrap>
      {todos.map((todo) => (
        <ListItem key={todo.id} text={todo.text} />
      ))}
    </ListWrap>
  );
};