import { useState } from "react";
import { button, card, chart, dashboard, form, table } from "../../common/icon";
import ItemSiderbar from "../components/ItemSiderbar";

const siderBar = [
  {
    icon: dashboard,
    link: '/',
    title:'Dashboard'
  },
  {
    icon: form,
    link: '/product',
    title:'Sản phẩm'
  },
  {
    icon: card,
    link: '/',
    title:'Cards'
  },
  {
    icon: chart,
    link: '/',
    title:'Charts'
  },
  {
    icon: button,
    link: '/',
    title:'Buttons'
  },
  {
    icon: table,
    link: '/',
    title:'Tables'
  },
]

const Siderbar = () => {
  const [ active, setActive ] = useState( 0 );
  return (

    <aside className="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
          Leung
        </a>
        <ul className="mt-6">
          { siderBar.map( ( item, index ) => ( <ItemSiderbar title={ item.title } icon={ item.icon } link={ item.link } active={ active } setActive={ setActive } index={index} />))}
        </ul>

      </div>
    </aside>
  );
};

export default Siderbar;