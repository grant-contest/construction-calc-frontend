import React, {useEffect, useState} from 'react';
import RadioGroup from "../../UI/radioGroup";
import {Link} from "react-router-dom";
import axios from "axios";

const Page5 = ({rec, setRec}) => {
  const [facade, setFacade] = useState([]);
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  useEffect(() => {
    const storageFacade = JSON.parse(localStorage.getItem("facadeTechnology"));

    if (storageFacade) {
      if (rec) {
        for (let face of storageFacade) {
          face.isRecommended = face.title === rec.facadeTechnology;
        }
        localStorage.setItem("facadeTechnology", JSON.stringify(storageFacade));
      }
      setFacade(storageFacade);
      intermediateCost += incrementIntermediateCost(storageFacade);
    } else {
      axios.get('http://localhost:8000/api/facade-technology')
        .then((response) => {
          if (rec) {
            for (let face of response.data) {
              face.isRecommended = face.title === rec.facadeTechnology;
            }
            localStorage.setItem("facadeTechnology", JSON.stringify(response.data));
          }
          setFacade(response.data);
        })
    }

    setCost(intermediateCost);
  }, [rec]);

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

  const save = () => {
    localStorage.setItem("facadeTechnology", JSON.stringify(facade))
    localStorage.setItem("page-5-cost", JSON.stringify(cost))

    step5Join(facade);
    localStorage.setItem("step5", JSON.stringify(step5));

    const homeParams = JSON.parse(localStorage.getItem("homeParams"));
    const step1 = JSON.parse(localStorage.getItem("step1"));
    const step2 = JSON.parse(localStorage.getItem("step2"));
    const step3 = JSON.parse(localStorage.getItem("step3"));
    const step4 = JSON.parse(localStorage.getItem("step4"));

    axios.post("http://localhost:8000/api/recommedation-system/step6", {
      homeParams,
      step1,
      step2,
      step3,
      step4,
      step5,
    })
      .then((response) => {
        localStorage.setItem("rec-step6", JSON.stringify(response.data))
        setRec(response.data)
        console.log(response.data)
      })
  }

  let step5 = {};
  const step5Join = (facades) => {
    for (let facade of facades) {
      if (facade.checked) {
        step5 = {
          facadeTechnology: facade.title,
        }
      }
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <p>Промежуточная стоимость {cost} ₽</p>

        <div>Технология фасада</div>
        <RadioGroup list={facade} onChange={calculateCost}/>

        <Link to={"/page-6"}>
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

export default Page5;
