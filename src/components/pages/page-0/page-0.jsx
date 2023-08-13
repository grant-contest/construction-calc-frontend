import React from 'react';
import HomeParameters from "./homeParameters";

const Page0 = () => {
  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <p className="text-2xl font-medium">Калькулятор строительства</p>
        <div className="flex">
          <img src="https://s32640.cdn.ngenix.net/images/build-house/footage/1/build-house-step-0.svg" alt=""/>
          <HomeParameters/>
        </div>
      </div>
    </div>
  );
};

export default Page0;
