import { Add } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Image from '../../components/image/Image';
import Pagination from "../../components/pagination/Pagination";
import { getListProduct } from "../../reducers/productSlice";
import ActionProduct from "./components/ActionProduct";
import './product.scss';

export const ListProduct = () => {
	const products = useSelector( state => state.product );
	const dispatch = useDispatch();
	useEffect( () => {
		dispatch( getListProduct() );
	}, [ dispatch ] );
	const handlePagination = ( number ) => {
		dispatch( getListProduct( number ) );
	  };
	return (
		<>
			<header className="product_header">
				<Link className="btn" to='create' style={{marginTop:0}}><Add /> Add</Link>

			</header>
			<main className="product_main">
				<table>
					<thead>
						<tr>
							<th>Tên</th>
							<th>Ảnh</th>
							<th>Giá</th>
							<th>Giá mới</th>
							<th>chuyên mục</th>
							<th>Trạng thái </th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						{ products.data.map( product => (
							<tr key={ product._id }>
								<td>
									{ product.name }

								</td>
								<td>
									<div className="boxImage">
									<Image nameImage={ product.thumbnail && product.thumbnail.filename } />

									</div>
									</td>
								<td>{ product.price }</td>
								<td>{ product.priceNew }</td>
								<td>{ product.categrory && product.categrory.map( item => item.name ) }</td>
								<td>{ product.status ? 'còn hàng' : 'hết hàng' }</td>
								<td><ActionProduct id={product._id}/></td>
							</tr>
						) ) }

					</tbody>
				</table>
				<Pagination  pages={ products.pages } callback={ handlePagination } page={ products.page } />
			</main>
		</>
	);
};
