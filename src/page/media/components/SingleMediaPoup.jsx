import { Close, Delete } from '@mui/icons-material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from '../../../components/image/Image';
import { getList } from '../../../reducers/mediaSlice';
import media from '../../../service/media';

const SingleMediaPoup = ( { image } ) => {
	const [ show, setShow ] = useState( false );
	const dispatch = useDispatch()
	const handleDelete = () => {
		if ( window.confirm( 'Bạn có muốn xóa ảnh hiện tại ?' ) ) {

			media.delete( image._id ).then( res => {
				console.log(res);
				if ( res ) {
					 dispatch(getList())
					 setShow( false );
				 } else {
					 window.alert('xóa k thành công')
				 }
			 })
		} else {
			return null;
		}
	}
	return (
		<>
			<div className='cradMedia' onClick={ () => setShow( true ) } >
				< Image nameImage={ image.filename } />
			</div>
			{
				show ? (
					<div className="poupMedia">
						<header className='poupMedia_header'>
							<button onClick={ () => setShow( false ) }>
								<Close className='icon' />
							</button>
						</header>
						<main className='mediaMain'>
							<div className="mediaLeft">
								<Image nameImage={ image.filename } />
							</div>
							<div className="mediaRigth">
								<ul>
									<li>
										<span className='lable'>name:</span>
										<span className='valuse'>{ image.filename }</span>
									</li>
									<li>
										<span className='lable'>url:</span>
										<span className='valuse'>{ image.path }</span>
									</li>
									<li>
										<span className='lable'>type:</span>
										<span className='valuse'>{ image.mimetype }</span>
									</li>
									<li>
										<span className='lable'>create:</span>
										<span className='valuse'>{ image.date }</span>
									</li>

								</ul>
								<div className="mediaButton">
									<button className='btnDelete' onClick={()=>handleDelete()}><Delete />Delete</button>
								</div>
							</div>
						</main>
					</div>
				) : null
			}
		</>
	);
};

export default SingleMediaPoup;