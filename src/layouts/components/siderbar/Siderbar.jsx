import { Category, Dashboard, Image, Menu, PostAdd, PrecisionManufacturing, Settings } from '@mui/icons-material';
import SiderbarItemt from './components/SiderbarItemt';

import './siderbar.scss';
const menuOption = [
  {
    to: '/',
    icon: <Dashboard className='icon' />,
    label: 'Dashboard'
  },
  {
    to: '/menu',
    icon: <Menu className='icon' />,
    label: 'Menu'
  },
  {
    to: '/Media',
    icon: <Image className='icon' />,
    label: 'Ảnh'
  },
  {
    to: '/product',
    icon: <PrecisionManufacturing className='icon' />,
    label: 'Sản Phẩm',
    children: [

      {
        to: '/product/create',
        icon:< PostAdd className='icon' />,
        label: 'Add/ Thêm',
      }
    ]
  },
  {
    to: '/category',
    icon: <Category className='icon' />,
    label: 'Danh mục'
  },
  {
    to: '/',
    icon: <PostAdd className='icon' />,
    label: 'Bài viết',

  },
  {
    to: '/',
    icon: <Settings className='icon' />,
    label: 'Cài Đặt',

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
        { menuOption.map( ( menu, index ) => ( <SiderbarItemt item={menu} />) )}
      </div>
      <div className="siderbar_bottom">
        bottom
      </div>
    </div>
  );
};

export default Siderbar;