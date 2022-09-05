import { ArrowRight } from '@mui/icons-material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const SiderbarItemt = ( { item } ) => {
	const [ open, setOpen ] = useState( false );
	if ( item.children ) {
		return (
			<div className={ open ? 'siderbar_item active' : 'siderbar_item' }>
				<div className="siderbar_title" >
					<NavLink to={item.to} className="siderbar_title_lable" >
						{ item.icon }
						{ item.label }
					</NavLink>
					<button onClick={ () => setOpen( !open ) } >
						<ArrowRight />
					</button>
				</div>
				<div className="siderbar_sub">
					{
						item.children.map( (sub,index) => <SiderbarItemt key={index} item={sub} />	 )
					}
				</div>
			</div>
		);
	} else {
		return (
			<NavLink className="siderbar_item" to={ item.to }>
				<div className="siderbar_title">
					<span>
						{ item.icon }
						{ item.label }
					</span>

				</div>
			</NavLink>
		);
	}

};

export default SiderbarItemt;