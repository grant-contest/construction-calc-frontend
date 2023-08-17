import React, {useEffect, useState} from 'react';
import Range from "../../UI/range";
import DropDown from "../../UI/drop-down";
import axios from "axios";
import Input from "../../UI/input";

const HomeParameters = ({onChange}) => {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/regions')
      .then((response) => {
        setRegions(response.data);
      })
  }, []);

  const [homeSquare, setHomeSquare] = useState(0);
  const homeSquareHandler = (square) => {
    setHomeSquare(square);
  }

  const [areaSquare, setAreaSquare] = useState(0);
  const areaSquareHandler = (square) => {
    setAreaSquare(square);
  }

  const [floor, setFloor] = useState("");
  const floorHandler = (floorNums) => {
    setFloor(floorNums);
  }

  const [region, setRegion] = useState("");
  const regionHandler = (rg) => {
    setRegion(rg);
  }

  const [goal, setGoal] = useState("");
  const goalHandler = (g) => {
    setGoal(g);
  }

  const [budgetFrom, setBudgetFrom] = useState(0);
  const budgetFromHandler = (budget) => {
    setBudgetFrom(budget);
  }

  const [budgetUpto, setBudgetUpto] = useState(0);
  const budgetUptoHandler = (budget) => {
    setBudgetUpto(budget);
  }

  const saveParams = () => {
    onChange({
      homeSquare,
      areaSquare,
      floor,
      region,
      goal,
      budgetFrom,
      budgetUpto,
    });
  }

  return (
    <div className="flex justify-between items-start">
      {
        floor === "2 этажа" ?
          <img src="https://s32640.cdn.ngenix.net/images/build-house/footage/2/build-house-step-0.svg" alt=""/>
          : floor === "3 этажа" ?
            <img src="https://s32640.cdn.ngenix.net/images/build-house/footage/3/build-house-step-0.svg" alt=""/>
            :
            <img src="https://s32640.cdn.ngenix.net/images/build-house/footage/1/build-house-step-0.svg" alt=""/>
      }
      <div className="w-4/12 border border-gray-300 rounded-xl px-8 py-10 h-full">
        <p className="font-medium mb-7">Введите параметры дома и рассчитайте затраты</p>
        <Range title={"Площадь дома, м2"} maxValue={1000} onChange={homeSquareHandler}/>
        <Range title={"Площадь участка, сот"} maxValue={100} onChange={areaSquareHandler}/>
        <DropDown title="Количество этажей" options={["1 этаж", "2 этажа", "3 этажа"]} onChange={floorHandler}/>
        <DropDown title="Регион" options={regions} onChange={regionHandler}/>
        <DropDown title="Цель дома" options={["Постоянное место жительства", "Место отдыха, 'дача'", "Место работы"]}
                  onChange={goalHandler}/>
        <div className="flex justify-between">
          <Input placeholder={"Бюджет от"} onChange={budgetFromHandler}/>
          <Input placeholder={"до, руб"} onChange={budgetUptoHandler}/>
        </div>
        <p className="text-xs text-stone-400 w-7/12">
          Онлайн-калькулятор строительства покажет приблизительную цену
          постройки дома с учётом расходных материалов
        </p>
        <button className="rounded-xl bg-light-green text-white px-4 py-2 mt-2" onClick={saveParams}>Дальше</button>
      </div>
    </div>
  );
};

export default HomeParameters;
