import styled from 'styled-components';

const ListContents = styled.li`
    width: 100%;
    height: 50px;
    background-color: #333;
    
`

export const ListItem = () => {
    return(
        <ListContents>
            <span>title</span>
        </ListContents>
    )
}