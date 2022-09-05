import React from 'react';
import './pagination.scss';

const Pagination = ( { pages, callback, page } ) => {

	let elmentLi = [];
	for ( let index = 1; index <=pages; index++ ) {
		if ( index === page ) {
			elmentLi.push( <li key={index} className='active'  >{ index }</li> );
		} else {
			elmentLi.push( <li key={index} onClick={()=> callback( index ) } >{ index }</li> );
		}
	}


	return (
		<div className='pagination'>
			<ul className='pagination_list'>
			{elmentLi.map(item=>item)}
			</ul>
		</div>
	);
};

export default Pagination;