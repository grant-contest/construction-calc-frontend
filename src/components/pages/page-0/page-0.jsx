import React, {useState} from 'react';
import HomeParameters from "./homeParameters";

const Page0 = () => {
  const [homeParams, setHomeParams] = useState({
    homeSquare: 0,
    areaSquare: 0,
    floor: "",
    region: "",
    goal: "",
    budgetFrom: 0,
    budgetUpto: 0,
  })
  const homeParamsHandler = (hp) => {
    setHomeParams(hp);
    setTimeout(() => {
      console.log(homeParams)
    }, 1000)
  }
  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <p className="text-2xl font-medium">Калькулятор строительства</p>
          <HomeParameters onChange={homeParamsHandler}/>
      </div>
    </div>
  );
};

export default Page0;
