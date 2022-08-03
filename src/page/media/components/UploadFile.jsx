import { Close, Upload } from '@mui/icons-material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import SingFileUploadWithProgress from './SingFileUploadWithProgress';


const UploadFile = () => {
	const [ show, setShow ] = useState( false );
	const [ files, setFile ] = useState( [] );

	const onDrop = useCallback( ( acceptedFiles ) => {
		const mapFile = acceptedFiles.map( file => ( { file, errore: [] } ) );
		setFile( curr => [ ...curr, ...mapFile ] );
	}, [] );
	const { getRootProps, getInputProps } = useDropzone( { onDrop } );
	return (
		<>
			<button className='btn' onClick={ () => { setShow( true ); setFile([]) } }><Upload />Upload File</button>
			{
				show ? (
					<div className="poupMedia">
						<header className='poupMedia_header'>
							<button onClick={ () => setShow( false ) }>
								<Close className='icon' />
							</button>
						</header>
						<main className='poupMedia_main'>
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
						</main>
					</div>
				) : null
			}
		</>
	);
};

export default UploadFile;