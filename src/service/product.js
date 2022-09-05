import request from "../common/request";

class productService{
	url = '/product';
	getAll( page ) {
		return request.post(this.url,{page})
	}
	create( data, imageList, categrory ) {
		let object = {};
		if ( imageList.length > 0 ) object[ 'imageList' ] = imageList;
		if ( categrory.length > 0 ) object[ 'categrory' ] = categrory;


		data.forEach( ( value, key ) => {
			if ( value &&  value !== 'undefined' ) object[ key ] =  value ;
			if ( value && value === 'true' ) object[ key ] = true;
			if ( value && value === 'false' ) object[ key ] = false;
		} )
		return request.post(this.url+'/create',object )
	}
	getProductById( id ) {
		return request.get( this.url + '?id=' + id );
	}
	update( id, data, imageList, categrory ) {

		let object = {id};
		if ( imageList.length > 0 ) object[ 'imageList' ] = imageList;
		if ( categrory.length > 0 ) object[ 'categrory' ] = categrory;

		data.forEach( ( value, key ) => {
			if ( value &&  value !== 'undefined' ) object[ key ] =  value ;
			if ( value && value === 'true' ) object[ key ] = true;
			if ( value && value === 'false' ) object[ key ] = false;
		} )
		return request.post(this.url+'/update',object )
	}
}
export default new productService();