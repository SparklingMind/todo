import React, { useState } from 'react';
import TodoInput from './TodoInput';
import styled from 'styled-components';

const CategoryItemContainer = styled.div`
  margin-top: 20px;
`;

const CategoryHeader = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: #eee;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const CategoryTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #555;
  }
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

function CategoryItem({ category, categories, setCategories }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleCheck = (index) => {
    setCategories(prevCategories => {
      return prevCategories.map(cat => {
        if (cat.name === category.name) {
          const updatedTodos = [...cat.todos];
          updatedTodos[index].completed = !updatedTodos[index].completed;

          updatedTodos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
          
          return { ...cat, todos: updatedTodos };
        } else {
          return cat;
        }
      });
    });
  };

  const handleStartEditing = (index, text) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  const handleEdit = (index) => {
    setCategories(prevCategories => {
      return prevCategories.map(cat => {
        if (cat.name === category.name) {
          const updatedTodos = [...cat.todos];
          updatedTodos[index].text = editingText;
          return { ...cat, todos: updatedTodos };
        } else {
          return cat;
        }
      });
    });
    setEditingIndex(null);
    setEditingText('');
  };

  const handleDelete = (index) => {
    setCategories(prevCategories => {
      return prevCategories.map(cat => {
        if (cat.name === category.name) {
          const updatedTodos = [...cat.todos];
          updatedTodos.splice(index, 1);
          return { ...cat, todos: updatedTodos };
        } else {
          return cat;
        }
      });
    });
  };

  return (
    <CategoryItemContainer>
      <CategoryHeader>
        <CategoryTitle>{category.name}</CategoryTitle>
        <Button onClick={() => setInputVisible(!isInputVisible)}>➕</Button>
      </CategoryHeader>
      {isInputVisible && (
        <TodoInput
          category={category}
          categories={categories}
          setCategories={setCategories}
          setInputVisible={setInputVisible}
        />
      )}
      <ul>
        {category.todos.map((todo, index) => (
          <TodoItem key={index} completed={todo.completed}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(index)}
            />
            {editingIndex === index ? (
              <input
                value={editingText}
                onChange={e => setEditingText(e.target.value)}
                onBlur={() => handleEdit(index)}
                onKeyPress={(e) => { if (e.key === 'Enter') handleEdit(index); }}
              />
            ) : (
              todo.text
            )}
            <span>
              {editingIndex === index ? (
                <Button onClick={() => handleEdit(index)}>저장</Button>
              ) : (
                <Button onClick={() => handleStartEditing(index, todo.text)}>수정</Button>
              )}
              <Button onClick={() => handleDelete(index)}>삭제</Button>
            </span>
          </TodoItem>
        ))}
      </ul>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
