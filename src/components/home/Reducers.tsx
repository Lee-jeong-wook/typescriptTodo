import { InputForm } from "./InputForm";
import { List } from "./List";

interface Todo{
    todos: (number | string)[];
    id: number;
    text: string;
    isComplete: boolean;
}
interface TodoReducer{
    type:'AddTodo' | 'DeleteTodo' | 'EditTodo';
    payload: Todo;
}

const todoContext = (state:TodoReducer, action:TodoReducer) => {
    switch (action.type) {
        case 'AddTodo' : 
        
        break;
        case 'DeleteTodo' : 

        break;
        case 'EditTodo' : 
        
        break;
    }
    const handleFormSubmit = (data: { id: number; text: string }) => {

    };
    return(
        <>
            <InputForm 
            onSubmit={handleFormSubmit}
            />
            <List />
        </>
    )
}
