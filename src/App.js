import React, { useState } from 'react'; // React와 useState 훅 임포트
import CategoryList from './CategoryList'; // 카테고리 리스트 컴포넌트 임포트
import styled from 'styled-components'; // styled-components 라이브러리 임포트
import './App.css'; // App 컴포넌트의 전역 스타일링을 위한 CSS 임포트

// App의 전체적인 스타일링 설정 (컨테이너)
const AppContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 40px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

// 제목 스타일링
const Title = styled.h1`
  text-align: left;
  font-family: 'KBO-Dia-Gothic_bold';
`;

function App() {
  // 카테고리와 할 일(todo) 데이터의 초기 상태 설정
  // 각 카테고리는 이름(name)과 해당 카테고리 내의 할 일 목록(todos)을 포함한다.
  // 할 일은 text, completed 상태와 원래의 위치를 나타내는 originalIndex를 포함한다.
  const [categories, setCategories] = useState([
    {
      name: '자바스크립트',
      todos: [
        { text: '프로미스 이해하기', completed: false, originalIndex: 0 },
        { text: '비동기 처리 방법 배우기', completed: false, originalIndex: 1 },
        { text: 'ES6+ 문법 익히기', completed: false, originalIndex: 2 }
      ]
    },
    {
      name: '리액트',
      todos: [
        { text: 'Hooks 사용법 학습하기', completed: false, originalIndex: 0 },
        { text: '리액트 라우터 도입하기', completed: false, originalIndex: 1 },
        { text: '컴포넌트 최적화 방법 알아보기', completed: false, originalIndex: 2 }
      ]
    }
  ]);

  // App 컴포넌트의 반환 부분
  // AppContainer 내에 제목과 카테고리 리스트 컴포넌트를 포함한다.
  return (
    <AppContainer>
      <Title>오늘도 코딩</Title>
      {/* CategoryList 컴포넌트에 카테고리 데이터와 해당 데이터를 수정할 수 있는 함수를 props로 전달 */}
      <CategoryList categories={categories} setCategories={setCategories} />
    </AppContainer>
  );
}

// App 컴포넌트를 외부에서 사용할 수 있도록 export
export default App;
