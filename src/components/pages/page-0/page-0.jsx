import React from 'react';
import HomeParameters from "./homeParameters";
import axios from "axios";

const Page0 = ({setRec, onActive}) => {
  const homeParams = {
    homeSquare: 0,
    areaSquare: 0,
    floor: "",
    region: "",
    goal: "",
    budgetFrom: 0,
    budgetUpto: 0,
  }

  const homeParamsHandler = (hp) => {
    homeParams.homeSquare = hp.homeSquare;
    homeParams.areaSquare = hp.areaSquare;
    homeParams.floor = hp.floor;
    homeParams.region = hp.region;
    homeParams.goal = hp.goal;
    homeParams.budgetFrom = hp.budgetFrom;
    homeParams.budgetUpto = hp.budgetUpto;

    localStorage.setItem("homeParams", JSON.stringify(homeParams))

    axios.post("http://localhost:8000/api/recommedation-system/step1", {
      homeParams
    })
      .then((response) => {
        localStorage.setItem("rec-step1", JSON.stringify(response.data))
        setRec(response.data);
      })
  }
  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <p className="text-2xl font-medium">Калькулятор строительства</p>
          <HomeParameters onChange={homeParamsHandler} onActive={onActive}/>
      </div>
    </div>
  );
};

export default Page0;
