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

const MultipleSelectImage = ( { images = [], setImages } ) => {
	const [ show, setShow ] = useState( false );
	const medias = useSelector( state => state.media );
	const [ files, setFile ] = useState( [] );
	const [ replace, setReplace ] = useState( {} );

	const onDrop = useCallback( ( acceptedFiles ) => {
		const mapFile = acceptedFiles.map( file => ( { file, errore: [] } ) );
		setFile( curr => [ ...curr, ...mapFile ] );
	}, [] );
	const { getRootProps, getInputProps } = useDropzone( { onDrop } );
	const dispatch = useDispatch();
	const handlePagination = ( number ) => {
		dispatch( getList( number ) );
	};

	const removeImage = (file) => {
		setImages(imgs=>imgs.filter(img=>img!==file))
	}
	const chooseImage = ( file ) => {
		setReplace( file );
		setShow( true );
	}
	const replaceImage = ( file ) => {
		if ( Object.values(replace).length !== 0 ) {
			setImages( imgs => {
				const index = imgs.indexOf( replace );
				imgs[index]=file

				return imgs;
			} )
			setReplace( {} );
		} else {
			setImages( [ ...images, file ] )
		}
	}
	return (
		<div className='box_image'>
			<div className="box_image-list">
				{ images && images.map( image =>
				(

					<div className="media_card  imageSelect" >
						<Image nameImage={ image && image.filename } />
						<div className="media_action">
							<button type='button' onClick={ () => chooseImage( image ) }><Edit /></button>
							<button type='button' onClick={ () => removeImage(image) }><Close /></button>
						</div>
					</div>
				) ) }
			</div>
			<button type='button' onClick={ () => setShow( true ) } className='btn'>Chọn file</button>
			{
				show ? ( <div className="poupMedia">
					<header className='poupMedia_header'>
						<button type='button' onClick={ () => setShow( false ) }>
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
										medias.data.map( file => {

											if ( images.indexOf( file ) >= 0 ) {
												return (
													<div className="media_card active" key={file._id}>
														<Image nameImage={ file.filename } />

													</div>
												);
											} else {
												return (
													<div className="media_card " key={file._id} onClick={ () => replaceImage(file) }>
														<Image nameImage={ file.filename } />
													</div>
												);
											}
										}



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
						<button className='btn' type='button' onClick={ () => setShow( false ) }>OK</button>
					</footer>
				</div> ) : null
			}
		</div>
	);
};

export default MultipleSelectImage;