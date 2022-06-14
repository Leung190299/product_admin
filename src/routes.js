import Dashboard from "./page/Dashboard";
import Product from "./page/product";

export const routes = [
	{
		path: '/',
		element: <Dashboard />,

	},
	{
		path: 'product',
		element: <Product />,

	}
]