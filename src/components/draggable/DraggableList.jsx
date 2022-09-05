import React, { useRef, useState } from 'react';

import './draggable.scss';
import DraggableItem from './DraggableItem';

const DraggableList = ( { data, renderItem, index } ) => {
	const [ _data, setData ] = useState( data );
	const [ indexDragStart, setIndexDragStrart ] = useState( null );
	const listRef = useRef( null );

	const handleDrop = ( index ) => {
		const dragItem = _data[ indexDragStart ];

		let list = [ ..._data ];
		list.splice( indexDragStart, 1 );

		if ( indexDragStart < index ) {
			setData( [
				...list.slice( 0, index - 1 ),
				dragItem,
				...list.slice( index - 1, list.length )
			] );
		} else {
			setData( [
				...list.slice( 0, index ),
				dragItem,
				...list.slice( index, list.length )
			] );
		}
	};

	const onDragEnter = e => {
		listRef.current.classList.add( 'dragover' );
		const a = e.target.dataset.index;
		console.log(_data[a]);
	}

	return (
		<div className='draggable_list' data-index={index}
			onDragEnter={ onDragEnter }
			ref={listRef}
		>
			{
				_data.map( ( item, index ) => (
					<React.Fragment key={ index }>
						<DraggableItem
							index={ index }
							handleDragStart={ id => setIndexDragStrart( id ) }
							handleDrop={ id => console.log( id ) }
							draggble={ true }
						>
							{ renderItem( item ) }
						</DraggableItem>
							<DraggableList index={index} data={ item.children ? item.children : [] } renderItem={ item => renderItem( item ) } />
					</React.Fragment>
				) )
			}
		</div>
	);
};

export default DraggableList;