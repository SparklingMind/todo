import React from 'react';
import CategoryItem from './CategoryItem';

function CategoryList({ categories, setCategories }) {
  return (
    <div>
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          category={category}
          setCategories={setCategories}
        />
      ))}
    </div>
  );
}

export default CategoryList;
