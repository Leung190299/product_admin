import Main from '../layouts/main/Main';
import Category from '../page/category/Category';
import Home from '../page/home/Home';
import Media from '../page/media/Media';
import Products from '../page/product/Products';
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
			element: <Products />
		},
		{
			path: 'media',
			element: <Media />
		},
		{
			path: 'category',
			element: <Category />
		}
	]
};
export default auRoutes;