import { Delete, Edit } from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../../../components/image/Image';
import { getListCategory } from '../../../reducers/categorySlice';
import categorySevice from '../../../service/category';


const CategoryList = ( { setcateg } ) => {
	const category = useSelector( sate => sate.category );
	const dispatch = useDispatch();


	const handleDelete = ( id ) => {
		if ( window.confirm( 'Bạn có muốn xóa ?' ) ) {
			categorySevice.delete( id ).then( res => {
				if ( res ) {
					dispatch( getListCategory() );
				} else {
					window.alert( 'xóa k thành công' );
				}
			} );
		} else {
			return null;
		}
	};
	return (
		<div className="category_list">
			<table>
				<thead>
					<tr>
						<th>Ảnh</th>
						<th>Tên</th>
						<th>Chuyên mục cha</th>
						<th>Mô tả</th>
						<th>Chức năng</th>
					</tr>
				</thead>
				<tbody>
					{ category.data.map( category => (
						<tr key={ category._id }>

							<td>
								<div className="boxImage">
									<Image nameImage={ category.image && category.image.filename } />

								</div>
							</td>
							<td>{ category.name }</td>
							<td>{ category.parent && category.parent.name }</td>
							<td>{ category.content }</td>
							<td>
								<div className="category_action">

									<button type='button' onClick={ () => setcateg( category ) } ><Edit /></button>|
									<button type='button' onClick={ () => handleDelete( category._id ) }><Delete /></button>
								</div>

							</td>
						</tr>
					) ) }

				</tbody>
			</table>
		</div>
	);
};

export default CategoryList;