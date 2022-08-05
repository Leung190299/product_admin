import React from 'react';
import './category.scss';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';
const Category = () => {



  return (
    <>
      <h1 className='heading_1'>Chuyên mục</h1>
      <div className="category_main">
        <CategoryForm />
        <CategoryList/>

      </div>
    </>
  );
};

export default Category;