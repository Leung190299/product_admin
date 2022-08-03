import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/pagination/Pagination';
import { getList } from '../../reducers/mediaSlice';
import SingleMediaPoup from './components/SingleMediaPoup';
import UploadFile from './components/UploadFile';
import './media.scss';
const Media = () => {
  const medias = useSelector( state => state.media );
  console.log( medias );
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( getList() );
  }, [ dispatch ] );
  const handlePagination = ( number ) => {
    dispatch( getList(number) );
  }
  return (
    <div className="boxMedia">
      <UploadFile />
      <div className='boxContent'>{
        medias.data.map( image => (
          <SingleMediaPoup key={image._id} image={image} />
        ))
      }</div>
      <Pagination pages={ medias.pages } callback={handlePagination} page={medias.page}  />
    </div>
  );
};

export default Media;