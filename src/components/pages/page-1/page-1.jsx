import React from 'react';
import PagesHeader from "./pagesHeader";
import PagesChapter from "./pagesChapter";
import PagesNavigation from "./pagesNavigation";

const Page1 = () => {
  return (
      <div>
        <PagesHeader/>
        <PagesNavigation/>
        {/* Такое выделение рекомендованного показали экспертам*/}
        {/*<img src="https://static.tildacdn.com/tild3832-6533-4337-b730-343762383239/_-1.jpg"*/}
        {/*     style={{width: "40px", marginLeft: "35px"}} alt="Recomended"></img>*/}
        {/*<span style={{color: "#42ab44", marginLeft: "8px"}}>Рекомендованное</span>*/}
        <PagesChapter/>
      </div>
  );
};

export default Page1;