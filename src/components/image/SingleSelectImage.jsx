import { Close, Edit, SelectAll, Upload } from '@mui/icons-material';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingFileUploadWithProgress from '../../page/media/components/SingFileUploadWithProgress';
import { getList } from '../../reducers/mediaSlice';
import Pagination from '../pagination/Pagination';
import Image from './Image';


const SingleSelectImage = ( { image, setImage } ) => {
	const [ show, setShow ] = useState( false );
	const medias = useSelector( state => state.media );
	const [ files, setFile ] = useState( [] );

	const onDrop = useCallback( ( acceptedFiles ) => {
		const mapFile = acceptedFiles.map( file => ( { file, errore: [] } ) );
		setFile( curr => [ ...curr, ...mapFile ] );
	}, [] );
	const { getRootProps, getInputProps } = useDropzone( { onDrop } );
	const dispatch = useDispatch();
	const handlePagination = ( number ) => {
		dispatch( getList( number ) );
	};
	return (
		<div className='box_image'>
			{ !image._id ? ( <button onClick={ () => setShow( true ) } className='btn'>Chọn file</button> ) : (
				<div className="media_card  imageSelect" >
					<Image nameImage={ image.filename } />
					<div className="media_action">
						<button onClick={ () => setShow( true ) }><Edit /></button>
						<button onClick={ () => setImage( {} ) }><Close /></button>
					</div>
				</div>
			) }
			{
				show ? ( <div className="poupMedia">
					<header className='poupMedia_header'>
						<button onClick={ () => setShow( false ) }>
							<Close className='icon' />
						</button>
					</header>
					<main className='poupMedia_main'>
						<Tabs onSelect={ ( index ) => setFile( [] ) }>
							<TabList>
								<Tab ><SelectAll /> chọn ảnh</Tab>
								<Tab><Upload /> Upload</Tab>
							</TabList>

							<TabPanel>
								<div className="media_list">
									<div className='boxContent'>{
										medias.data.map( file => image && file._id === image._id ?
											(
												<div className="media_card active">
													<Image nameImage={ file.filename } />

												</div>
											) : (
												<div className="media_card " onClick={ () => setImage( file ) }>
													<Image nameImage={ file.filename } />
												</div>
											)

										)
									}</div>
									<Pagination pages={ medias.pages } callback={ handlePagination } page={ medias.page } />
								</div>
							</TabPanel>
							<TabPanel>
								<div { ...getRootProps( { className: 'dropzone' } ) }>
									<input { ...getInputProps( { className: 'inputdropzone' } ) } />
									<span> <Upload /> Upload File</span>
									<p>Drag 'n' drop some files here, or click to select files</p>
								</div>
								<aside>
									<h4>Files</h4>
									<div className="media_list">

										{ files.map( fileWap => ( <SingFileUploadWithProgress file={ fileWap.file } /> ) ) }
									</div>
								</aside>
							</TabPanel>
						</Tabs>
					</main>
					<footer className='poupMedia_footer'>
						<button className='btn' onClick={ () => setShow( false ) }>OK</button>
					</footer>
				</div> ) : null
			}
		</div>
	);
};

export default SingleSelectImage;