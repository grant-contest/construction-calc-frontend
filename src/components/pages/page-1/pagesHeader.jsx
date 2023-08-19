import React from 'react';

const PagesHeader = () => {
  return (
      <div style={{backgroundColor: "#4e4f50"}}>
        <div className="flex justify-start pt-6 px-20">
          <div className="flex flex-col gap-2">
            <h4 className="flex gap-2 text-2xl leading-8" style={{color: "#fff"}}>Подготовительные работы <span>70 662 ₽</span></h4>
            <p className="text-sm leading-5" style={{color: "#b0b1b2"}}>Перед строительством дома необходимо выравнивание участка, удаление деревьев и кустарников,
              корчевание пней, устройство временного забора, и в случае необходимости, проведение геологических
              и геодезических изысканий, разработка проектной документации, согласование процесса строительства.</p>
          </div>
          {/* Вставить нормальную иконку закрытия */}
          <img className="image--ssuGm" src="" alt="Закрыть"></img>
        </div>
      </div>
  );
};

export default PagesHeader;