import React from 'react';
import Checkbox from "../../UI/checkbox";

const ChapterWork = () => {
  return (
      <div className="w-full py-16 border-b-4 border-solid" style={{backgroundColor: "#454647", borderColor: "#494a4b"}}>
        <button className="w-full px-20 flex items-center justify-between text-xl font-medium" style={{color: "#fff"}}>
          {/* font-weight: 500; */}
          Необязательные работы
          <img className="" src="https://s32640.cdn.ngenix.net/images/icons/drop-arrow-white.svg" alt="Стрелка"/>
        </button>
        <div>
          <div>
            <div>
              <span>Работа и стоимость</span>
              <span>Необходимые материалы</span>
            </div>
            <div>
              <Checkbox/>
              <div>
                <div className="tableRow__cell--WLQnT">
                  <span className="tableRow__name--ofj4V">Геодезические работы</span>
                  <span className="tableRow__price--j6A_v">13 872 ₽</span>
                </div>
                <div className="materialsList__row--xBGMV">
                  <span className="materialsList__name--jlzb8">Не требуется</span>
                  <span className="materialsList__dashed--dAxh5"></span>
                  <span className="materialsList__price--V8nlj">0 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChapterWork;