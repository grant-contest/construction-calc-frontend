import React from 'react';
import ChaptersCard from "./chaptersCard";
import ChapterHint from "./chapterHint";

const PagesChapter = () => {
  return (
      <div className="py-16 border-b-4 border-solid" style={{backgroundColor: "#454647", borderColor: "#494a4b"}}>
        <div className="flex justify-between px-20">
          <span className="text-xl font-medium leading-6" style={{color: "#fff"}}>Подбор и подготовка участка</span>
          <div className="flex justify-between gap-8">
            <ChapterHint/>
            <ChapterHint/>

            {/* Передать через пропсы */}

            {/*<div className="flex justify-between items-center gap-3">*/}
            {/*  <div className="flex items-center justify-center w-9 h-9" style={{borderRadius: "50%", background: "#545556"}}>*/}
            {/*    <img className="image--ssuGm contentWrapper__badgeImage--rxFX5"*/}
            {/*         src="https://s32640.cdn.ngenix.net/external-resources/images/buildingMark/57.svg"*/}
            {/*         alt="Иконка бейджа"></img>*/}
            {/*  </div>*/}
            {/*  <span className="text-xs leading-5 opacity-90" style={{color: "#fff"}}>Зонирование</span>*/}
            {/*</div>*/}

            {/*<div className="flex justify-between items-center gap-3">*/}
            {/*  <div className="flex items-center justify-center w-9 h-9" style={{borderRadius: "50%", background: "#545556"}}>*/}
            {/*    <img className="image--ssuGm contentWrapper__badgeImage--rxFX5"*/}
            {/*         src="https://s32640.cdn.ngenix.net/external-resources/images/buildingMark/56.svg"*/}
            {/*         alt="Иконка бейджа"></img>*/}
            {/*  </div>*/}
            {/*  <span className="text-xs leading-5 opacity-90" style={{color: "#fff"}}>Удобное расположение</span>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="mt-5 px-20 flex flex-wrap gap-5 justify-between">
          <ChaptersCard/>
          <ChaptersCard/>
          <ChaptersCard/>
          <ChaptersCard/>
        </div>
      </div>
  );
};

export default PagesChapter;