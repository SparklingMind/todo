import React from 'react';
import TodoInput from './TodoInput';
import styled from 'styled-components';

const CategoryItemContainer = styled.div`
  margin-top: 20px;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const CategoryTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
`;

function CategoryItem({ category, setCategories }) {
  return (
    <CategoryItemContainer>
      <CategoryHeader>
        <CategoryTitle>{category.name}</CategoryTitle>
        <TodoInput category={category} setCategories={setCategories} />
      </CategoryHeader>
      <ul>
        {category.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
