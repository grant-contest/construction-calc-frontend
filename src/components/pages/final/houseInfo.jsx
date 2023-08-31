import React from 'react';

const HouseInfo = ({houseParams}) => {
  return (
    <div className="border border-gray-300 rounded-xl p-6">
      <div className="flex items-center">
        <img className="w-5" src="https://s32640.cdn.ngenix.net/images/icons/house.svg" alt=""/>
        <div>Сведения о доме</div>
      </div>

      <HouseInfoElem title={"Площадь дома, м2"} value={houseParams.homeSquare}/>
      <HouseInfoElem title={"Площадь участка, сот"} value={houseParams.areaSquare}/>
      <HouseInfoElem title={"Количество этажей"} value={houseParams.floor}/>
      <HouseInfoElem title={"Регион"} value={houseParams.region}/>
      <HouseInfoElem title={"Цель постройки"} value={houseParams.goal}/>
    </div>
  );
};

const HouseInfoElem = ({title, value}) => {
  return (
    <div className="flex items-center justify-between text-sm m-2">
      <div className="text-gray-500">{title}</div>
      <div>{value}</div>
    </div>
  );
}

export default HouseInfo;
