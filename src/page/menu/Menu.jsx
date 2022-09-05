import React from 'react';
import DraggableList from '../../components/draggable/DraggableList';

const data = [
  {
    id: 1,
    title: 'item 1'
  },
  {
    id: 2,
    title: 'item 2'
  },
  {
    id: 3,
    title: 'item 3'
  }, {
    id: 3,
    title: 'item 3',
    children: [
      {
        id: 1,
        title: 'item 1'
      },
      {
        id: 2,
        title: 'item 2'
      },
    ]


  }, {
    id: 3,
    title: 'item 3'
  },
];

const Menu = () => {
  return (
    <DraggableList data={ data }
      renderItem={ ( item ) => <Card item={ item } /> }
    />
  );
};

const Card = ( { item } ) => {
  return (
    <div className="card" style={ { border: '1px solid #333', display: 'inline-block', margin: '5px 0', padding: 5 } }>
      { item.title }
    </div>
  );
};

export default Menu;