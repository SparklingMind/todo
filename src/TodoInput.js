import React, { useState } from 'react';
import styled from 'styled-components';

const TodoInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoInputField = styled.input`
  padding: 5px 10px;
  font-size: 1em;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  flex-grow: 1;
  margin-right: 10px;
`;

const SaveButton = styled.button`
  padding: 6px 12px;
  background-color: #555;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #444;
  }
`;

function TodoInput({ category, setCategories }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setCategories(prevCategories => {
        return prevCategories.map(cat => {
          if (cat.name === category.name) {
            return { ...cat, todos: [...cat.todos, inputValue] };
          } else {
            return cat;
          }
        });
      });
      setInputValue('');
    }
  };

  return (
    <TodoInputContainer>
      <TodoInputField
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <SaveButton onClick={handleAdd}>저장</SaveButton>
    </TodoInputContainer>
  );
}

export default TodoInput;
