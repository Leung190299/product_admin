import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Siderbar from '../components/siderbar/Siderbar';
import './main.scss';

const Main = () => {
	return (
		<div className='main'>
			<Siderbar />
			<div className='main_content'>
				<Header />
				<div className='main_body'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Main;