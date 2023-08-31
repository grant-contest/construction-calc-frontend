import React, {useEffect, useState} from 'react';
import Step from "./step";
import Precost from "./precost";
import HouseInfo from "./houseInfo";

const FinalPage = ({rec, setRec, page9CostParam}) => {
  const [costs, setCosts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const page1Cost = JSON.parse(localStorage.getItem("page-1-cost"));
    const page2Cost = JSON.parse(localStorage.getItem("page-2-cost"));
    setCosts([page1Cost, page2Cost]);
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let cost of costs) {
      sum += cost;
    }
    setTotal(sum);
  }, [costs]);

  return (
    <div className="flex justify-center">
      <div className="flex w-9/12">
        <div>
          <div>Предварительная смета</div>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <Step number={1} title={"Подготовительные работы"} cost={costs[0]}/>
              <Step number={2} title={"Выбор фундамента"} cost={costs[1]}/>
              <Step number={3} title={"Выбор материала стен"} cost={123}/>
              <Step number={4} title={"Выбор кровли"} cost={123}/>
              <Step number={5} title={"Выбор фасада"} cost={123}/>
              <Step number={6} title={"Выбор дверей и окон"} cost={123}/>
              <Step number={7} title={"Инженерные коммуникации"} cost={123}/>
              <Step number={8} title={"Внутренние черновые работы"} cost={123}/>
              <Step number={9} title={"Внутренние чистовые отделочные работы"} cost={123}/>
            </div>

            <div className="col-span-2">
              <Precost cost={total}/>
              <HouseInfo/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
