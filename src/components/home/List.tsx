import { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';

const ListWrap = styled.ul`
    width: 50%;
    height: 500px;
    overflow-y:scroll;
`

export const List = () => {
    let [todos, setTodo] = useState([]);
    return(
        <ListWrap>
            {
                todos.map((todo) => (
                    <ListItem />
                ))
            }
        </ListWrap>
    )
}