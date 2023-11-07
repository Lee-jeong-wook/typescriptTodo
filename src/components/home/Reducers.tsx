import React, { useState } from 'react';
import { InputForm } from './InputForm';
import { List } from './List';
import Todo from '../Interfaces/Interface';

interface TodoReducer {
    type: 'AddTodo' | 'DeleteTodo' | 'EditTodo';
    payload: Todo;
}

const TodoContext = (state: TodoReducer, action: TodoReducer) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    switch (action.type) {
        case 'AddTodo':
            const updatedTodos = [...todos, action.payload];
            setTodos(updatedTodos);
            break;
        case 'DeleteTodo':
            // 예를 들어, 삭제 로직 구현
            const filteredTodos = todos.filter(todo => todo.id !== action.payload.id);
            setTodos(filteredTodos);
            break;
        case 'EditTodo':
            const modifiedTodos = todos.map(todo => (todo.id === action.payload.id ? action.payload : todo))
            setTodos(modifiedTodos);
            break;
        default:
            break;
    }

    const handleFormSubmit = (data: Todo) => {
        setTodos([...todos, data]);
    };

    return (
        <>
            <InputForm onSubmit={handleFormSubmit} />
            <List todos={todos}/>
        </>
    )
}

export default TodoContext