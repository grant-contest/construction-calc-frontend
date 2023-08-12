import React from 'react';
import Range from "../../UI/range";
import DropDown from "../../UI/drop-down";

const HomeParameters = () => {
  return (
    <div className="w-4/12 border border-gray-300 rounded-xl px-8 py-10 h-full">
      <p className="font-medium mb-7">Введите параметры дома и рассчитайте затраты</p>
      <Range title={"Площадь дома, м2"} maxValue={1000}/>
      <Range title={"Площадь участка, сот"} maxValue={100}/>
      <DropDown title="Количество этажей" options={["1 этаж", "2 этажа", "3 этажа"]}/>
      <DropDown title="Регион" options={["Алтайский край", "Амурская область", "Архангельская область"]}/>
      <p className="text-xs text-stone-400 w-7/12">Онлайн-калькулятор строительства покажет приблизительную цену постройки дома с учётом расходных материалов</p>
    </div>
  );
};

export default HomeParameters;
