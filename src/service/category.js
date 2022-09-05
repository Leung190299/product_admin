import request from "../common/request";

class categorySevice {
	url = '/category';

	getAll( page ) {
		return request.post( this.url, {
			page
		} );
	}
	create( data ) {

		let object = {};
		if (data.get('parent')==='') {
			data.delete('parent')
		}
		data.forEach( ( value, key ) => {
			object[ key ] = value ;
		})
		return request.post(this.url+'/create',object)
	}
	update( data ) {
		let object = {};
		data.forEach( ( value, key ) => {
			object[ key ] = value ;
		})

		return request.post(this.url+'/update',object);
	}
	delete( id ) {
		return request.post(this.url+'/delete',{id})
	}
}
export default new categorySevice()