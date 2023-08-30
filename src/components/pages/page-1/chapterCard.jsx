import React from 'react';
import Checkbox from "../../UI/checkbox";

const ChapterCard = () => {
  return (
      <button className="flex py-5 px-8 border border-white border-solid rounded-xl w-full items-center"
              style={{backgroundColor: "white", maxWidth: "calc(50% - 10px)"}}>
        <div className="mr-5 relative inline-block">
          <Checkbox/>
        </div>
        <span className="mr-3 text-lg font-normal leading-7" style={{color: "#1c1c1c"}}>Подбор участка</span>
        <img className="image--ssuGm mr-6" src="https://s32640.cdn.ngenix.net/images/icons/important-tooltip-gray.svg"
             alt="Иконка подсказки" title="Выберите участок для строительства дома"/>
        <img className="image--ssuGm" src="https://s32640.cdn.ngenix.net/external-resources/images/buildingMark/1.svg" alt="Иконка карточки"/>
        <span className="text-xl font-bold mr-0" style={{marginLeft: "auto", color: "#1c1c1c"}}>11 544 ₽</span>
      </button>
  );
};

export default ChapterCard;