import { Notifications, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './header.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="header_search">
        <div className="header_search-box">
          <input type="text" placeholder="search..." />
          <button className='icon'>
            <Search />
          </button>
        </div>
      </div>
      <div className="header_action">
        <div className="header_action-notification">
          <Notifications className='icon' />
          <span className="header_action-notificationCount">2</span>
        </div>
        <div className="header_action-auth">
          <div className="header_action-avata">
            <img src="https://th.bing.com/th/id/R.c04b017b6b9d1c189e15e6559aeb3ca8?rik=p7CsD4Hws%2frUyQ&pid=ImgRaw&r=0" alt="avata" />
          </div>
          <div className="header_action-authHandel">
            <Link to='account' className='link' >Account</Link>
            <Link to='logout' className='link' >Log Out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;