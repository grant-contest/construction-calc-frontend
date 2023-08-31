import React, {useEffect, useState} from 'react';
import axios from "axios";
import RadioGroup from "../../UI/radioGroup";
import {Link} from "react-router-dom";

const Page2 = ({rec, setRec}) => {
  const [bases, setBases] = useState([]);
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  useEffect(() => {
    const storageBases = JSON.parse(localStorage.getItem("baseTypes"));

    if (storageBases) {
      if (rec) {
        for (let base of storageBases) {
          base.isRecommended = base.title === rec.foundationType;
        }
        localStorage.setItem("baseTypes", JSON.stringify(storageBases));
      }
      setBases(storageBases);
      intermediateCost += incrementIntermediateCost(storageBases);
    } else {
      axios.get('http://localhost:8000/api/base-types')
        .then((response) => {
          if (rec) {
            for (let base of response.data) {
              base.isRecommended = base.title === rec.foundationType;
            }
            localStorage.setItem("baseTypes", JSON.stringify(response.data));
          }
          setBases(response.data);
        })
    }

    setCost(intermediateCost);
  }, [rec]);

  const save = () => {
    localStorage.setItem("baseTypes", JSON.stringify(bases))
    localStorage.setItem("page-2-cost", JSON.stringify(cost))

    step2Join(bases);
    localStorage.setItem("step2", JSON.stringify(step2));

    const homeParams = JSON.parse(localStorage.getItem("homeParams"));
    const step1 = JSON.parse(localStorage.getItem("step1"));

    axios.post("http://localhost:8000/api/recommedation-system/step3", {
      homeParams,
      step1,
      step2,
    })
      .then((response) => {
        localStorage.setItem("rec-step3", JSON.stringify(response.data))
        setRec(response.data)
      })
  }

  let step2 = {};
  const step2Join = (bases) => {
    for (let base of bases) {
      if (base.checked) {
        step2 = {
          foundationType: base.title,
        }
      }
    }
  }

  const calculateCost = (price) => {
    setCost(cost + price);
  }

  const incrementIntermediateCost = (list) => {
    let intermediateCost = 0;
    for (let item of list) {
      if (item.checked) {
        for (let work of item.works) {
          intermediateCost += work.price;
        }
      }
    }
    return intermediateCost;
  }

  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <p>Промежуточная стоимость {cost} ₽</p>

        <RadioGroup list={bases} onChange={calculateCost}/>

        <Link to={"/page-3"}>
          <button className="rounded-full bg-light-green text-white px-4 py-2 mt-2 mb-4"
                  onClick={save}
          >
            Далее
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page2;
