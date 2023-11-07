import { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';

const ListWrap = styled.ul`
    width: 50%;
    height: 500px;
    overflow-y:scroll;
`

export const List = (todos:any) => {
    return(
        <ListWrap>
            {
                todos.map((todo:any) => (
                    <ListItem 
                    text={todo.text}
                    />
                ))
            }
        </ListWrap>
    )
}