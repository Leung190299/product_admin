import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from '../../../components/image/Image';
import Progress from '../../../components/progress/Progress';
import { getList } from '../../../reducers/mediaSlice';
import media from '../../../service/media';



const SingFileUploadWithProgress = ( { file } ) => {
	const [ loadPercent, setLoadPercent ] = useState( 0 );
	const [ path, setPath ] = useState( '' );
	const dispatch = useDispatch();
	useEffect( () => {

		media.upload( file, setLoadPercent ).then( res => {
			setPath( res.filename );
			dispatch( getList() );
		} );
	}, [ file, dispatch ] );

	return (
		<div className='media_card'>

			{ loadPercent === 100 ?
				( <Image nameImage={ path } /> ) :
				( <Progress
					bgcolor="orange"
					progress={ loadPercent }
					height={ 10 }
					width={ '80%' }
					style={ {
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%,-50%)'
					} } /> ) }

		</div>
	);
};

export default memo( SingFileUploadWithProgress );