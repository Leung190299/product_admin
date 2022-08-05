import request from "../common/request";

class Media {
	url = '/media';
	getAll( page ) {
		return request.post( this.url, {
			page
		} );
	}
	upload( file, onProgress ) {
		const formData = new FormData();

		formData.append( 'uploadedImages', file, file.path );
		return request.post( `${ this.url }/upload`, formData, {
			onUploadProgress: data => {
				let percent = ( data.loaded / data.total ) * 100;
				onProgress( Math.round( percent ) );
			}
		} );

	}
	delete( id ) {
		return request.post( this.url + '/delete',{id});
	}
	getAllFile() {
		return request.get( this.url);
	}
}
export default new Media();