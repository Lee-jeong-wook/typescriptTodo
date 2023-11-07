import React, { useState } from 'react';
import styled from 'styled-components';
import Todo from '../Interfaces/Interface';

const Form = styled.div`
    width: 50%;
    height: 50px;
    // ... 스타일링 내용 ...
`;

interface InputFormProps {
    onSubmit: (data: Todo) => void;
}

export const InputForm = ({ onSubmit }: InputFormProps) => {
    const [value, setValue] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            onSubmit({
                // todos: [1, 2],
                id: Math.floor(Math.random() * 10000),
                text: value,
                isComplete: false
            });
            setValue('');
        }
    }

    return (
        <Form>
            <span>안녕하세요~</span>
            <label>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
            </label>
        </Form>
    )
}
