import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import CheckboxGroup from 'react-checkbox-group';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import MultipleSelectImage from "../../components/image/MultipleSelectImage";
import SingleSelectImage from "../../components/image/SingleSelectImage";
import productService from '../../service/product';

const Update = () => {
  const [ multipleImage, setMultipleImage ] = useState( [] );
  const [ category, setCategory ] = useState( [] );
  const [ image, setImage ] = useState( {} );
  const [ content, setContent ] = useState( '' );
  const [ valueDefault, setValueDefault] = useState({})

  let { id } = useParams();
  const product = useSelector( state => state.product );
  const categorys = useSelector( state => state.category );
  const form = useRef( null );


  useEffect( () => {
    const _product = product.data.find( item => item._id === id )
    if ( !_product ) {
      productService.getProductById( id ).then( res => {
        setMultipleImage(res.imageList)
        setCategory( res.categrory.map( cate => cate._id ) );
        setContent( res.content );
        setImage( res.thumbnail || {} );
        setValueDefault( {
          'name': res.name,
          'price': res.price,
          'priceNew': res.priceNew,
          'total': res.total,
          'status': res.status,
          'excrept':res.excrept
        })
      })
    } else {
      setMultipleImage(_product.imageList)
      setCategory( _product.categrory.map( cate => cate._id ) );
      setContent( _product.content );
      setImage( _product.thumbnail || {} )
      setValueDefault( {
        'name': _product.name,
        'price':_product.price,
        'priceNew': _product.priceNew,
        'total': _product.total,
        'status': _product.status,
        'excrept':_product.excrept
      })
    }
  }, [ id, product.data ] );

  const updateProduct = () => {
    const data = new FormData( form.current );
    const listImage = multipleImage.map( image => image._id );
    data.append( 'thumbnail', image._id );
    data.append( 'content', content );
    productService.update( id, data, listImage, category ).then( res => {
      if ( res._id ) {
        toast.success('lưu phâm thành công')
      };
    }).catch( error => toast.error( 'lưu thất bại ' ) )

  }

  return (
    <>
      <header className="headerCreate">
        <h1 className="headerCreate_title">Sản phẩm</h1>
        <button className="btn" onClick={()=>updateProduct()} > Save</button>
      </header>
      <main className="boxCreate">
        <div className="boxBody" >
          <label >Nội dung mô tả</label>
          <JoditEditor config={ {
            width: '100%',
            height: '550px',

          } }
            value={ content }
            onBlur={ newContent => setContent( newContent ) }
          />
          <MultipleSelectImage setImages={ setMultipleImage } images={ multipleImage } />
        </div>
        <div className="boxOption">
          <div className="itemOption">
            <label>Ảnh sản phẩm</label>
            <SingleSelectImage image={ image } setImage={ setImage } />
          </div>
          <form ref={ form } >
            <div className="itemOption">
              <label htmlFor="name">Tên</label>
              <input type="text" name='name' id='name' defaultValue={valueDefault && valueDefault.name} />
            </div>
            <div className="itemOption">
              <label htmlFor="categrory">Danh mục</label>
              <CheckboxGroup id="categrory" onChange={ setCategory } value={ category }>
                { ( Checkbox ) => (
                  <>
                    {
                      categorys.data.map( category => ( <span key={ category._id }>
                        <Checkbox value={ category._id } /> { category.name }
                      </span> ) )
                    }
                  </>
                ) }
              </CheckboxGroup>
            </div>

            <div className="groupOption">
              <div className="itemOption">
                <label htmlFor="price">Giá </label>
                <input type="number" name='price' id='price' defaultValue={valueDefault && valueDefault.price} />
              </div>
              <div className="itemOption">
                <label htmlFor="priceNew">Giá mới</label>
                <input type="number" name='priceNew' id='priceNew' defaultValue={valueDefault && valueDefault.priceNew} />
              </div>
            </div>
            <div className="groupOption">
              <div className="itemOption">
                <label htmlFor="total">Số lượng</label>
                <input type="number" name='total' id='total' defaultValue={valueDefault && valueDefault.total} />
              </div>
              <div className="itemOption">
                <label htmlFor="status">Trạng thái Hàng</label>
                <select name="status" id="status" defaultChecked={valueDefault&& valueDefault.status} >
                  <option value={ true }>Còn Hàng</option>
                  <option value={ false }>Hết Hàng</option>
                </select>
              </div>
            </div>
            <div className="itemOption">
              <label htmlFor="excrept">Mô tả ngắn</label>
              <textarea name="excrept" id="excrept" cols="30" rows="10" defaultValue={valueDefault&& valueDefault.excrept}></textarea>
            </div>

          </form>
        </div>

      </main>
    </>
  );
};

export default Update;