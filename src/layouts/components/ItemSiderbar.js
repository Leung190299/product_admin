import { Link } from 'react-router-dom';

const ItemSiderbar = ( { title, link, icon, submenu, setActive, active, index } ) => {

	const clas = 'inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200';
	const clasActive = 'inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-100 dark:text-gray-50';

	if ( submenu ) {
		return (
			<li className="relative px-6 py-3">
				<button className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" aria-haspopup="true">
					<span className="inline-flex items-center">
						{ icon }
						<span className="ml-4">Pages</span>
					</span>
					<svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
					</svg>
				</button>

			</li>
		);
	}
	return (
		<li className="relative px-6 py-3" onClick={ () => setActive( index ) }>
			{ index == active ? ( <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true" /> ) : null }

			<Link to={ link } className={ index === active ? clasActive : clas } >
				{ icon }
				<span className="ml-4">{ title }</span>
			</Link>
		</li>
	);
};

export default ItemSiderbar;