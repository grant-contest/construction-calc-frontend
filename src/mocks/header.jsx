import React from 'react';
import Logo from "../components/UI/logo";

const Header = () => {
  return (
    <div className="flex justify-center border-b shadow-lg shadow-gray-100">
      <div className="flex justify-between items-center my-5 w-9/12">
        <Logo/>
        <div className="flex border-2 rounded-full border-green-600 py-3 px-5">
          <img className="mr-2" src="https://s32640.cdn.ngenix.net/common/images/icons/menu-fries-right.svg" alt=""/>
          <div>Каталог</div>
        </div>

        <div className="flex justify-between items-center rounded-full bg-gray-200 py-3 px-5 w-5/12 h-full">
          <div className="text-sm text-gray-500">Поиск по категориям, партнёрам и услугам</div>
          <img className="h-5" src="https://s32640.cdn.ngenix.net/common/images/icons/search-gray2.svg" alt=""/>
        </div>

        <img className="h-6" src="https://s32640.cdn.ngenix.net/images/icons/favorite.svg" alt=""/>

        <img className="h-6" src="https://s32640.cdn.ngenix.net/images/icons/bag-black.svg" alt=""/>

        <div className="flex border-2 rounded-full border-gray-300 py-3 px-5">
          <div>Подать заявку</div>
        </div>

        <div className="flex items-center rounded-full bg-green-600 py-3 px-5">
          <img className="mr-2" src="https://s32640.cdn.ngenix.net/common/images/icons/account-white.svg" alt=""/>
          <div className="text-white">Войти</div>
        </div>

        <div className="flex border-2 rounded-full border-gray-300 p-4">
          <img src="https://s32640.cdn.ngenix.net/common/images/icons/ecosystem-menu.svg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Header;
