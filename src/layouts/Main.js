import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Siderbar from './layout/Siderbar';

const Main = () => {
	return (
		<div className='flex h-screen'>
			<Siderbar />
			<div className='w-full'>
				<Header />
				<div className='main_body'>
					<Outlet />
				</div>

			</div>

		</div>
	);
};

export default Main;