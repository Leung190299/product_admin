import React, { useRef } from 'react';

const DraggableItem = ( { children, handleDragStart, handleDrop, index, draggble } ) => {
	const itemRef = useRef( null );

	const onDragStart = e => {

		e.dataTransfer.effectedAllowed = 'move';
		e.dataTransfer.setDragImage( e.target, 50000, 50000 );

		//custom darg ghost
		let ghostNode = e.target.cloneNode( true );
		ghostNode.style.position = 'absolute';

		ghostNode.style.top = ( e.pageY - e.target.offsetHeight / 2 ) + 'px';
		ghostNode.style.left = ( e.pageX - e.target.offsetWidth / 2 ) + 'px';

		ghostNode.style.height = e.target.offsetHeight + 'px';
		ghostNode.style.width = e.target.offsetWidth + 'px';

		ghostNode.style.opacity = '0.8';
		ghostNode.style.pointerEvents = 'none';

		ghostNode.id = 'ghostNode';

		document.body.prepend( ghostNode );

		itemRef.current.classList.add( 'dragstart' );


		if ( handleDragStart ) {
			handleDragStart( index );
		}

	};

	const onDrag = e => {
		let ghostNode = document.querySelector( '#ghostNode' );
		ghostNode.style.top = ( e.pageY - e.target.offsetHeight / 2 ) + 'px';
		ghostNode.style.left = ( e.pageX - e.target.offsetWidth / 2 ) + 'px';

	};
	const onDragEnd = () => {
		document.querySelector( '#ghostNode' ).remove();
		itemRef.current.classList.remove( 'dragstart' );
	};
	const onDragEnter = ( e ) => {
		itemRef.current.classList.add( 'dragover' );

	}
	const onDragLeave = () => itemRef.current.classList.remove( 'dragover' );

	const onDragOver = e => e.preventDefault();
	const onDrop = () => {
		itemRef.current.classList.remove( 'dragover' );
		handleDrop( index );
	};


	return (
		<div className='draggable_item'
			draggable={ draggble ? true : false }
			onDragStart={ onDragStart }
			onDrag={ onDrag }
			onDragEnd={ onDragEnd }
			onDragEnter={ onDragEnter }
			onDragLeave={ onDragLeave }
			onDragOver={ onDragOver }
			onDrop={ onDrop }
			ref={ itemRef }
		>
			{ children }
		</div>
	);
};

export default DraggableItem;