import React, { useRef, useState } from 'react';
import SingleSelectImage from '../../../components/image/SingleSelectImage';

const CategoryForm = () => {
	const [ imageCategory, setImageCategory ] = useState( {} );
	  const form = useRef( null );

	const saveCategory = e => {
		e.preventDefault();
		const data = new FormData( form.current );
		for ( const [ key, value ] of data ) {
			console.log( key, value );
		}
	}
  return (
	<div className="category_input">
	<form ref={ form } onSubmit={ saveCategory }>
	  <div className="box_input">
		<label htmlFor="name">Tên</label>
		<input type="text" name='name' id='name'  />
	  </div>
	  <div className="box_input">
		<label htmlFor="content" >Mô tả</label>
		<textarea name="content" id="content" cols="30" rows="10"></textarea>
	  </div>
	  <div className="box_input">
		<label htmlFor="parent" >Chuyên mục cha</label>
		<select name="parent" id="parent">
		  <option value=""></option>
		  <option value="a">a</option>
		  <option value="x">x</option>
		  <option value="x">ẫ</option>
		</select>
	  </div>
	  <div className="box_input">
		<label htmlFor="parent" >Ảnh </label>
				  <SingleSelectImage setImage={ setImageCategory } image={imageCategory} />
	  </div>
	  <button type="submit" className='btnSave'>Save</button>
	</form>
  </div>
  )
}

export default CategoryForm