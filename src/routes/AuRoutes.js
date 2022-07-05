import Main from '../layouts/main/Main';
import Home from '../page/home/Home';
import Product from '../page/product';
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
			element: <Product />
		}
	]
};
export default auRoutes;