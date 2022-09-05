import { Delete, Save } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleSelectImage from '../../../components/image/SingleSelectImage';
import { getListCategory } from '../../../reducers/categorySlice';
import categorySevice from '../../../service/category';

const CategoryForm = ( { categ, setcateg } ) => {
	const [ imageCategory, setImageCategory ] = useState( {} );
	const form = useRef( null );
	const cate = useSelector( state => state.category );
	const dispatch = useDispatch();

	useEffect( () => {
		setValueForm();
	}, [ categ ] );

	const setValueForm = () => {
		setImageCategory( categ._id ? categ.image : {} );
		const data = new FormData(form.current)
		if ( categ._id && form ) {
			data.forEach( ( value, key ) => {
				if ( key === 'parent' ) {
					form.current.elements[ 'parent' ].value = categ[ 'parent' ] ? categ[ 'parent' ]._id : '';
				} else {
					form.current.elements[ key ].value = categ[ key ];
				}
			} );
		}
	};
	const clearForm = () => {
		const data = new FormData(form.current)
		setImageCategory( {} );
		dispatch( getListCategory() );
		data.forEach( ( value, key ) => {
			form.current.elements[ key ].value = '';
		} );
	};

	const saveCategory = e => {
		e.preventDefault();
		const data = new FormData(form.current)
		data.append( 'image', imageCategory._id );
		if ( !categ._id ) {
			categorySevice.create( data ).then( res => {
				clearForm();
			} );
		} else {
			data.append( 'id', categ._id );
			categorySevice.update( data ).then( res => {
				clearForm();
			} );
		}
	};


	return (
		<div className="category_input">
			<form ref={ form } onSubmit={ saveCategory }>
				<div className="box_input">
					<label htmlFor="name">Tên</label>
					<input type="text" name='name' id='name' />
				</div>
				<div className="box_input">
					<label htmlFor="content" >Mô tả</label>
					<textarea name="content" id="content" cols="30" rows="10" ></textarea>
				</div>
				<div className="box_input">
					<label htmlFor="parent" >Chuyên mục cha</label>
					<select name="parent" id="parent" >
						<option value=''>select...</option>
						{ cate.data.map( category => ( <option key={ category._id } value={ category._id } >{ category.name }</option> ) ) }
					</select>
				</div>
				<div className="box_input">
					<label htmlFor="parent" >Ảnh </label>
					<SingleSelectImage setImage={ setImageCategory } image={ imageCategory } />
				</div>
				<div className="category_btn">
					<button type="submit" className='btnSave'><Save />Save</button>
					<button type="button" onClick={ () => clearForm() } className='btnSave'><Delete />Clear</button>
				</div>
			</form>
		</div>
	);
};

export default CategoryForm;