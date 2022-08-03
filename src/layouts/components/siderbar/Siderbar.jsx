import { Category, Dashboard, Image, PostAdd, PrecisionManufacturing, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import './siderbar.scss';
const menuOption = [
  {
    to: '/',
    icon: <Dashboard className='icon' />,
    label: 'Dashboard'
  },
  {
    to: '/Media',
    icon: <Image className='icon' />,
    label: 'Ảnh'
  },
  {
    to: '/product',
    icon: <PrecisionManufacturing className='icon' />,
    label: 'Sản Phẩm'
  },
  {
    to: '/',
    icon: <Category className='icon' />,
    label:'Danh mục'
  },
  {
    to: '/',
    icon: <PostAdd className='icon' />,
    label:'Bài viết',

  },
  {
    to: '/',
    icon: <Settings className='icon' />,
    label:'Cài Đặt',

  }
];

const Siderbar = () => {

  return (
    <div className="siderbar">
      <div className="siderbar_top">
        <div className="siderbar_logo">
          <img src="" alt="" />
          LU
        </div>
      </div>
      <div className="siderbar_content">
        <div className="siderbar_lable">Quản lý</div>
        { menuOption.map( ( menu, index ) => (
          <Link key={index} to={menu.to} className="siderbar_link">
            { menu.icon }
            <span className='siderbar_link_title'>
              {menu.label}
            </span>
          </Link>
        ) ) }



      </div>
      <div className="siderbar_bottom">
        bottom
      </div>
    </div>
  );
};

export default Siderbar;