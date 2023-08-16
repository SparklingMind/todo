import React, { useState } from 'react';
import CategoryList from './CategoryList';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 40px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: left;
`;

function App() {
  const [categories, setCategories] = useState([
    { name: 'Work', todos: ['Meeting at 10am', 'Finish report'] },
    { name: 'Personal', todos: ['Grocery shopping', 'Read a book'] },
  ]);

  return (
    <AppContainer>
      <Title>오늘의 코딩</Title>
      <CategoryList categories={categories} setCategories={setCategories} />
    </AppContainer>
  );
}

export default App;
