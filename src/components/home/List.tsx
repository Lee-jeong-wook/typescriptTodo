import React from 'react';
import  Todo  from '../Interfaces/Interface';
import styled from 'styled-components';

const ListWrap = styled.ul`
  width: 50%;
  height: 500px;
  overflow-y: scroll;
`;
const ListContents = styled.li`
  width: 100%;
  height: 50px;
  background-color: #333;
  color: #fff;
  margin : 10px 0px;
`;

interface ListProps {
  todos: Todo[];
  handleDelete: (data: Todo) => void;
}


export const List = ({ todos, handleDelete }: ListProps) => {
  const onClick = (id: number) => {
    handleDelete({ id, text: '', isComplete: false });
  };

  return (
    <ListWrap>
      {todos.map((todo) => (
        <ListContents key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onClick(todo.id)}>
            X
          </button>
        </ListContents>
      ))}
    </ListWrap>
  );
};

