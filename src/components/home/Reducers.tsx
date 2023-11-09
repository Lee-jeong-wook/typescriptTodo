import React, { useReducer } from 'react';
import { InputForm } from './InputForm';
import { List } from './List';
import  Todo  from '../Interfaces/Interface';

type ActionType = 'AddTodo' | 'DeleteTodo' | 'EditTodo';

interface TodoReducer {
  type: ActionType;
  payload: Todo;
}

const initialState: Todo[] = [];

const TodoReducer = (state: Todo[], action: TodoReducer): Todo[] => {
  switch (action.type) {
    case 'AddTodo':
      return [...state, action.payload];
    case 'DeleteTodo':
      return state.filter((todo) => todo.id !== action.payload.id);
    case 'EditTodo':
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    default:
      return state;
  }
};

const TodoContext = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleFormSubmit = (data: Todo) => {
    dispatch({ type: 'AddTodo', payload: data });
  };

  const handleDeleteTodo = (data: Todo) => {
    dispatch({ type: 'DeleteTodo', payload: data})
  }

  return (
    <>
      <InputForm onSubmit={handleFormSubmit} />
      <List todos={todos} handleDelete={handleDeleteTodo}/>
    </>
  );
};

export default TodoContext