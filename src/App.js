import React, { useState } from 'react'; 
import CategoryList from './CategoryList';
import styled from 'styled-components'; 
import './App.css'; 

// App의 전체적인 스타일링 설정 (컨테이너)
const AppContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 40px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

// 제목 스타일링
const Title = styled.h1`
  text-align: left;
  font-family: 'KBO-Dia-Gothic_bold';
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

const CategoryName = styled.span`
  color: ${props => props.color || '#000'};
`;

const CategoryIcon = styled.img`
  src: url('CategorySetting.png');
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;

function App() {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false); // 카테고리 모달의 열림/닫힘 상태를 관리
  
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
      <CategoryIcon onClick={() => setIsCategoryModalOpen(true)} /> {/*카테고리 설정 아이콘을 클릭하면 모달이 열린다.*/}
      {isCategoryModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CategoryModal categories={categories} setCategories={setCategories} onClose={() => setIsCategoryModalOpen(false)} />
          </ModalContent>
        </ModalOverlay>
      )}
      <Title>오늘도 코딩</Title>
      {/* CategoryList 컴포넌트에 카테고리 데이터와 해당 데이터를 수정할 수 있는 함수를 props로 전달 */}
      <CategoryList categories={categories} setCategories={setCategories} />
    </AppContainer>

  );
}

function CategoryModal({ categories, setCategories, onClose }) {
  const [newCategory, setNewCategory] = useState(''); // 새 카테고리 이름 입력을 위한 상태
  const [editingCategory, setEditingCategory] = useState(null); // 현재 편집 중인 카테고리를 관리하는 상태
  const [newCategoryName, setNewCategoryName] = useState(''); // 편집 중인 카테고리의 새로운 이름을 관리하는 상태
  

  function handleAddCategory() {
    if (newCategory) {
      setCategories([...categories, { name: newCategory, todos: [] }]);
      setNewCategory('');
    }
  }

  // 카테고리를 편집 모드로 변경하기 위한 함수
  function handleEdit(category) {
    setEditingCategory(category);
    setNewCategoryName(category.name);
  }

  // 편집된 카테고리를 저장하기 위한 함수
  function handleSaveEditedCategory() {
    const updatedCategories = categories.map(cat => 
      cat === editingCategory ? {...cat, name: newCategoryName} : cat
    );
    setCategories(updatedCategories);
    setEditingCategory(null); // 편집 모드 종료
  }

  // 카테고리를 삭제하기 위한 함수
  function handleDelete(category) {
    const filteredCategories = categories.filter(cat => cat !== category); // 삭제하려는 카테고리를 제외한 리스트 생성
    setCategories(filteredCategories);
  }

  // 카테고리의 대표색을 변경하기 위한 함수
  function handleColorChange(e, category) {
    const updatedCategories = categories.map(cat => 
      cat === category ? {...cat, color: e.target.value} : cat
    );
    setCategories(updatedCategories);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
