import { useRoutes } from 'react-router-dom';


import auRoutes from './AuRoutes';


export default function Routes() {
	return useRoutes( [ auRoutes ] );
}