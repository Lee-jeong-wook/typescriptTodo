import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.div`
    width: 50%;
    height: 50px;
    // background-color: #eee;
    // border: 1px solid #000;
    // border-radius: 20px;
    // box-shadow: 10px 10px 10px #555;
`;

export const InputForm = () => {
    const [value, setValue] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.keyCode === 13) {
            console.log(value);
        }
    }

    return (
        <Form>
            <span>안녕하세요~</span>
            <label>
                <input
                    type="text"
                    onKeyDown={onSubmit}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </Form>
    )
}
