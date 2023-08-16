import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SaveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #888;
  margin-left: 10px;
  &:hover {
    color: #555;
  }
`;

function TodoInput({ category, categories, setCategories, setInputVisible }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSaveClick = () => {
    setCategories(prevCategories => {
      return prevCategories.map(cat => {
        if (cat.name === category.name) {
          const updatedTodos = [
            ...cat.todos, 
            { 
              text: newTodo, 
              completed: false, 
              originalIndex: cat.todos.length // 현재 todos의 길이를 originalIndex로 지정
            }
          ];
          return { ...cat, todos: updatedTodos };
        } else {
          return cat;
        }
      });
    });
    setNewTodo('');
    setInputVisible(false);
  };

  return (
    <InputContainer>
      <Input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="새로운 할 일을 입력하세요"
      />
      <SaveButton onClick={handleSaveClick}>저장</SaveButton>
    </InputContainer>
  );
}

export default TodoInput;
