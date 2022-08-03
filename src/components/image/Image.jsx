import React from 'react'

const Image = ({nameImage}) => {
	const url = 'http://localhost:4000/images/upload/';
  return (
	<img src={url + nameImage} alt={nameImage}/>
  )
}

export default Image