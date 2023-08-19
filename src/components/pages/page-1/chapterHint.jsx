import React from 'react';

const ChapterHint = () => {
  return (
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9" style={{borderRadius: "50%", background: "#545556"}}>
          <img className="image--ssuGm contentWrapper__badgeImage--rxFX5"
               src="https://s32640.cdn.ngenix.net/external-resources/images/buildingMark/57.svg"
               alt="Иконка бейджа"></img>
        </div>
        <span className="text-xs leading-5 opacity-90" style={{color: "#fff"}}>Зонирование</span>
      </div>
  );
};

export default ChapterHint;