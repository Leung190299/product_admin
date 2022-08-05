import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getList } from '../../reducers/mediaSlice';
import Header from '../components/header/Header';
import Siderbar from '../components/siderbar/Siderbar';
import './main.scss';

const Main = () => {
	const dispatch = useDispatch();
	useEffect( () => {
		dispatch( getList() );
	}, [ dispatch] );

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