import React from 'react';
import  Todo  from '../Interfaces/Interface';
import styled from 'styled-components';
import { Mobile, PC } from '../MediaQuery';

const ListWrap = styled.ul`
  width: 50%;
  min-width: 250px;
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
const ListContentsMobile = styled.li`
  width: 100%;
  min-width: 250px;
  height: 50px;
  background-color: #f33;
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
    <>
      <Mobile>
        <ListWrap>
          {todos.map((todo) => (
            <ListContentsMobile key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => onClick(todo.id)}>
                X
              </button>
            </ListContentsMobile>
          ))}
        </ListWrap>
      </Mobile>
      <PC>
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
      </PC>
    </>
  );
};

