import Main from '../layouts/main/Main';
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
		}
	]
};
export default auRoutes;