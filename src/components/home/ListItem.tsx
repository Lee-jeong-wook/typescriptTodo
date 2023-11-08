import React from 'react';
import styled from 'styled-components';

const ListContents = styled.li`
  width: 100%;
  height: 50px;
  background-color: #333;
`;

interface ListItemProps {
  text: string;
}

export const ListItem = ({ text }: ListItemProps) => {
  return (
    <ListContents>
      <span>{text}</span>
    </ListContents>
  );
};