import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import CheckboxGroup from 'react-checkbox-group';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import MultipleSelectImage from "../../components/image/MultipleSelectImage";
import SingleSelectImage from "../../components/image/SingleSelectImage";
import productService from '../../service/product';

const Create = () => {
  const [ multipleImage, setMultipleImage ] = useState( [] );
  const [ category, setCategory ] = useState( [] );
  const [ image, setImage ] = useState( {} );
  const [ content, setContent ] = useState( '' );
  const categorys = useSelector( state => state.category );
  const form = useRef( null );

  let navigate = useNavigate();

  const createProduct = () => {
    const data = new FormData( form.current );
    const listImage = multipleImage.map( image => image._id );
    data.append( 'thumbnail', image._id );
    data.append( 'content', content );

    productService.create( data, listImage, category ).then( res => {
      if ( res._id ) {
        navigate( `../update/${ res._id }`, { replace: true } );
        toast.success( 'Thêm sản phâm thành công' );
      };
    } ).catch( error => toast.error( 'Thêm sản phẩm thất bại ' ) );
  };
  return (
    <>
      <header className="headerCreate">
        <h1 className="headerCreate_title">Sản phẩm</h1>
        <button className="btn" onClick={ () => createProduct() }> Save</button>
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
              <input type="text" name='name' id='name' />
            </div>
            <div className="itemOption">
              <label htmlFor="categrory">Danh mục</label>
              <div className="itemOption_box">

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
            </div>

            <div className="groupOption">
              <div className="itemOption">
                <label htmlFor="price">Giá </label>
                <input type="number" name='price' id='price' />
              </div>
              <div className="itemOption">
                <label htmlFor="priceNew">Giá mới</label>
                <input type="number" name='priceNew' id='priceNew' />
              </div>
            </div>
            <div className="groupOption">
              <div className="itemOption">
                <label htmlFor="total">Số lượng</label>
                <input type="number" name='total' id='total' />
              </div>
              <div className="itemOption">
                <label htmlFor="status">Giá mới</label>
                <select name="status" id="status" >
                  <option value={ true }>Còn Hàng</option>
                  <option value={ false }>Hết Hàng</option>
                </select>
              </div>
            </div>
            <div className="itemOption">
              <label htmlFor="excrept">Mô tả ngắn</label>
              <textarea name="excrept" id="excrept" cols="30" rows="10"></textarea>
            </div>

          </form>
        </div>

      </main>
    </>
  );
};

export default Create;