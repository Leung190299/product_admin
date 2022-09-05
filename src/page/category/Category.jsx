import React, { useState } from 'react';

import './category.scss';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';
const Category = () => {
  const [ categ, setcateg ] = useState( {});


  return (
    <>
      <h1 className='heading_1'>Chuyên mục</h1>
      <div className="category_main">
        <CategoryForm categ={categ} setcateg={setcateg} />
        <CategoryList setcateg={setcateg} />

      </div>
    </>
  );
};

export default Category;