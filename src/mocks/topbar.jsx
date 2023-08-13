import React from 'react';

const Topbar = () => {
  return (
    <div className="flex justify-center border-b">
      <div className="flex my-5 text-xs w-9/12">

        <div className="flex justify-between text-gray-500 w-7/12">
          <div className="mx-1">Финансовые сервисы</div>
          <div className="mx-1">Дома и участки</div>
          <div className="mx-1">Проекты</div>
          <div className="mx-1">Подрядчики</div>
          <div className="flex mx-1">
            Сельская ипотека <p className="bg-green-600 rounded px-1 pb-0.5 mx-1 text-white">от 0.1%</p>
          </div>
          <div className="bg-gray-300 w-px"></div>
          <div className="text-black mx-1">Журнал</div>
          <div className="text-black mx-1">Партнёрам</div>
        </div>

        <div className="w-5/12 flex justify-end">
          <img className="h-3 mr-2 mt-0.5" src="https://svoe-selo.ru/common/external/e3fd1d27ab6380d768e7.svg" alt=""/>
          г Хабаровск
        </div>
      </div>
    </div>
  );
};

export default Topbar;
