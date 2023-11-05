import { Interface } from "readline";

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

export default TodoReducer;