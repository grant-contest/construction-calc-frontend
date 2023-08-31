import React, {useEffect, useState} from 'react';
import Range from "../../UI/range";
import DropDown from "../../UI/drop-down";
import axios from "axios";
import Input from "../../UI/input";
import {Link} from "react-router-dom";

const HomeParameters = ({onChange}) => {
  const [regions, setRegions] = useState([]);

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

  useEffect(() => {
    axios.get('http://localhost:8000/api/regions')
      .then((response) => {
        setRegions(response.data);
      })

    const homeParams = JSON.parse(localStorage.getItem("homeParams"));
    if (homeParams) {
      setHomeSquare(homeParams.homeSquare);
      setAreaSquare(homeParams.areaSquare);
      setFloor(homeParams.floor);
      setRegion(homeParams.region);
      setGoal(homeParams.goal);
      setBudgetFrom(homeParams.budgetFrom);
      setBudgetUpto(homeParams.budgetUpto);
    }
  }, []);


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
      <div className="w-5/12 border border-gray-300 rounded-xl px-8 py-10 h-full">
        <p className="font-medium mb-7">Введите параметры дома и рассчитайте затраты</p>
        <Range title={"Площадь дома, м2"} maxValue={1000} onChange={homeSquareHandler} initValue={homeSquare}/>
        <Range title={"Площадь участка, сот"} maxValue={100} onChange={areaSquareHandler} initValue={areaSquare}/>
        <DropDown title="Количество этажей" options={["1 этаж", "2 этажа", "3 этажа"]} onChange={floorHandler}
                  initValue={floor}/>
        <DropDown title="Регион" options={regions} onChange={regionHandler} initValue={region}/>
        <DropDown title="Цель дома" options={["Постоянное место жительства", "Место отдыха, 'дача'", "Место работы"]}
                  onChange={goalHandler} initValue={goal}/>
        <div className="flex justify-between">
          <Input placeholder={"Бюджет от"} onChange={budgetFromHandler} initValue={budgetFrom}/>
          <Input placeholder={"до, руб"} onChange={budgetUptoHandler} initValue={budgetUpto}/>
        </div>
        <Link to={"/page-1"}>
          <button className="rounded-full bg-light-green text-white px-4 py-2 mt-2 mb-4" onClick={saveParams}>Рассчитать
          </button>
        </Link>
        <p className="text-xs text-stone-400 w-7/12">
          Онлайн-калькулятор строительства покажет приблизительную цену
          постройки дома с учётом расходных материалов
        </p>
      </div>
    </div>
  );
};

export default HomeParameters;
