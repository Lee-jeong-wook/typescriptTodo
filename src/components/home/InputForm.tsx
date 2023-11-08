import React, { useState } from 'react';
import Todo from '../Interfaces/Interface';

interface InputFormProps {
  onSubmit: (data: Todo) => void;
}

export const InputForm = ({ onSubmit }: InputFormProps) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: value,
        isComplete: false,
      });
      setValue('');
    }
  };

  return (
    <div>
      <span>할 일을 입력하세요:</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};