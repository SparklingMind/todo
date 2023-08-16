import React, { useState } from 'react';
import CategoryList from './CategoryList';
import styled from 'styled-components';
import './App.css';

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
  font-family: 'KBO-Dia-Gothic_bold';
`;

function App() {
  const [categories, setCategories] = useState([
    {
      name: '자바스크립트',
      todos: [
        { text: '프로미스 이해하기', completed: false },
        { text: '비동기 처리 방법 배우기', completed: false },
        { text: 'ES6+ 문법 익히기', completed: false }
      ]
    },
    {
      name: '리액트',
      todos: [
        { text: 'Hooks 사용법 학습하기', completed: false },
        { text: '리액트 라우터 도입하기', completed: false },
        { text: '컴포넌트 최적화 방법 알아보기', completed: false }
      ]
    }
  ]);
  

  return (
    <AppContainer>
      <Title>오늘도 코딩</Title>
      <CategoryList categories={categories} setCategories={setCategories} />
    </AppContainer>
  );
}

export default App;
