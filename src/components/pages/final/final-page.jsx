import React, {useEffect, useState} from 'react';
import Step from "./step";
import Precost from "./precost";
import HouseInfo from "./houseInfo";

const FinalPage = ({rec, setRec, page9CostParam}) => {
  const [costs, setCosts] = useState([]);
  const [total, setTotal] = useState(JSON.parse(localStorage.getItem("total-sum")));
  const [houseParams, setHouseParams] = useState(JSON.parse(localStorage.getItem("homeParams")))

  useEffect(() => {
    const page1Cost = JSON.parse(localStorage.getItem("page-1-cost"));
    const page2Cost = JSON.parse(localStorage.getItem("page-2-cost"));
    const page3Cost = JSON.parse(localStorage.getItem("page-3-cost"));
    const page4Cost = JSON.parse(localStorage.getItem("page-4-cost"));
    const page5Cost = JSON.parse(localStorage.getItem("page-5-cost"));
    const page6Cost = JSON.parse(localStorage.getItem("page-6-cost"));
    const page7Cost = JSON.parse(localStorage.getItem("page-7-cost"));
    const page8Cost = JSON.parse(localStorage.getItem("page-8-cost"));
    if (page9CostParam) {
      setCosts([page1Cost, page2Cost, page3Cost, page4Cost, page5Cost, page6Cost, page7Cost, page8Cost, page9CostParam]);
    } else {
      const page9CostStorage = JSON.parse(localStorage.getItem("page-9-cost"));
      setCosts([page1Cost, page2Cost, page3Cost, page4Cost, page5Cost, page6Cost, page7Cost, page8Cost, page9CostStorage]);
    }


    setHouseParams(JSON.parse(localStorage.getItem("homeParams")));
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let cost of costs) {
      sum += cost;
    }
    setTotal(sum);
    localStorage.setItem("total-sum", JSON.stringify(sum));
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
              <Step number={3} title={"Выбор материала стен"} cost={costs[2]}/>
              <Step number={4} title={"Выбор кровли"} cost={costs[3]}/>
              <Step number={5} title={"Выбор фасада"} cost={costs[4]}/>
              <Step number={6} title={"Выбор дверей и окон"} cost={costs[5]}/>
              <Step number={7} title={"Инженерные коммуникации"} cost={costs[6]}/>
              <Step number={8} title={"Внутренние черновые работы"} cost={costs[7]}/>
              <Step number={9} title={"Внутренние чистовые отделочные работы"} cost={costs[8]}/>
            </div>

            <div className="col-span-2">
              <Precost cost={total}/>
              <HouseInfo houseParams={houseParams}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
