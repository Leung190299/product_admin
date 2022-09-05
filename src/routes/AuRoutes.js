import Main from '../layouts/main/Main';
import Category from '../page/category/Category';
import Home from '../page/home/Home';
import Media from '../page/media/Media';
import Menu from '../page/menu/Menu';
import Create from '../page/product/Create';
import { ListProduct } from '../page/product/ListProduct';
import Products from '../page/product/Products';
import Update from '../page/product/Update';
const auRoutes = {
	path: '/',
	element: < Main />,
	children: [
		{
			path: '/',
			element: <Home />
		},
		{
			path: 'product',
			element: <Products />,
			children: [
				{
					path: '',
					element: <ListProduct />
				},
				{
					path: 'create',
					element: <Create />
				},
				{
					path: 'update/:id',
					element: < Update />
				}
			]
		},
		{
			path: 'media',
			element: <Media />
		},
		{
			path: 'category',
			element: <Category />
		},
		{
			path:'menu',
			element: <Menu />
		},
	]
};
export default auRoutes;