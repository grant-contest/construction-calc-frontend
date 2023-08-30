import React from 'react';
import PageHeader from "./pageHeader";
import PageChapter from "./pageChapter";
import PageNavigation from "./pageNavigation";

const Page1 = () => {
  return (
      <div>
        <PageHeader/>
        <PageNavigation/>
        {/* Такое выделение рекомендованного показали экспертам*/}
        {/*<img src="https://static.tildacdn.com/tild3832-6533-4337-b730-343762383239/_-1.jpg"*/}
        {/*     style={{width: "40px", marginLeft: "35px"}} alt="Recomended"></img>*/}
        {/*<span style={{color: "#42ab44", marginLeft: "8px"}}>Рекомендованное</span>*/}
        <PageChapter/>
      </div>
  );
};

export default Page1;