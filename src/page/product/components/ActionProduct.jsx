import { Delete, MoreVert, Update } from '@mui/icons-material';
import React from 'react';

import { Link } from 'react-router-dom';

const ActionProduct = ( { id } ) => {

	return (
		<div className='actionProduct'>
			<button >
				<MoreVert />

			</button>
			<div className="actionProduct_content" >
				<Link to={ `update/${ id }` } className="actionProduct_link" style={{color:'green'}}>
					<Update /> Edit
				</Link>
				<Link to={ `update/${ id }` } className="actionProduct_link" style={{color:'red'}}>
					<Delete /> Delete
				</Link>
			</div>
		</div>
	);
};

export default ActionProduct;