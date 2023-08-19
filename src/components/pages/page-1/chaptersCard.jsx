import React from 'react';

const ChaptersCard = () => {
  return (
      <button className="flex py-5 px-8 border border-white border-solid rounded-xl w-full items-center"
              style={{backgroundColor: "white", maxWidth: "calc(50% - 10px)"}}>
        <div className="mr-5 relative inline-block">
          <input className="block w-6 h-6 cursor-pointer" type="checkbox"/>

          {/* В будущем стилизовать инпут чекбокс за счёт кода ниже */}
          {/* (ниже не сделано, что при клике возникает белая галочка на зелёном фоне) */}
          {/*<input className="absolute h-full w-full z-10 inset-0 cursor-pointer opacity-0 border-0 outline-0"*/}
          {/*       type="checkbox"/>*/}
          {/*<span className="block w-6 h-6 rounded-lg transition-all border border-solid"*/}
          {/*style={{borderColor: "#c9cacc"}}></span>*/}
        </div>
        <span className="mr-3 text-lg font-normal leading-7" style={{color: "#1c1c1c"}}>Подбор участка</span>
        <img className="image--ssuGm mr-6" src="https://s32640.cdn.ngenix.net/images/icons/important-tooltip-gray.svg"
             alt="Иконка подсказки" title="Выберите участок для строительства дома"/>
        <img className="image--ssuGm" src="https://s32640.cdn.ngenix.net/external-resources/images/buildingMark/1.svg" alt="Иконка карточки"/>
        <span className="text-xl font-bold mr-0" style={{marginLeft: "auto", color: "#1c1c1c"}}>11 544 ₽</span>
      </button>
  );
};

export default ChaptersCard;