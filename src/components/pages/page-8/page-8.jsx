import React, {useEffect, useState} from 'react';
import CheckboxGroup from "../../UI/checkboxGroup";
import {Link} from "react-router-dom";
import RadioGroup from "../../UI/radioGroup";
import axios from "axios";

const Page8 = ({rec, setRec}) => {
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  const [warmFloor, setWarmFloor] = useState([]);
  const [ladderMaterial, setLadderMaterial] = useState([]);

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

  useEffect(() => {
    const storageWarmFloor = JSON.parse(localStorage.getItem("warmFloor"));
    if (storageWarmFloor) {
      if (rec) {
        storageWarmFloor[0].isRecommended = rec.warmFloor;
        localStorage.setItem("warmFloor", JSON.stringify(storageWarmFloor));
      }
      setWarmFloor(storageWarmFloor);
      intermediateCost += incrementIntermediateCost(storageWarmFloor);
    } else {
      axios.get('http://localhost:8000/api/rough-work')
        .then((response) => {
          if (rec) {
            for (let wf of response.data) {
              wf.isRecommended = wf.title === rec.facadeTechnology;
            }
            localStorage.setItem("warmFloor", JSON.stringify(response.data));
          }
          setWarmFloor(response.data);
        })
    }

    const storageLM = JSON.parse(localStorage.getItem("ladderMaterial"));
    if (storageLM) {
      if (rec) {
        for (let lm of storageLM) {
          lm.isRecommended = lm.title === rec.ladderMaterial;
        }
        localStorage.setItem("ladderMaterial", JSON.stringify(storageLM));
      }
      setLadderMaterial(storageLM);
      intermediateCost += incrementIntermediateCost(storageLM);
    } else {
      axios.get('http://localhost:8000/api/stairs-material')
        .then((response) => {
          if (rec) {
            for (let lm of response.data) {
              lm.isRecommended = lm.title === rec.ladderMaterial;
            }
            localStorage.setItem("ladderMaterial", JSON.stringify(response.data));
          }
          setLadderMaterial(response.data);
        })
    }

    setCost(intermediateCost);
  }, [rec]);


  const save = () => {
    localStorage.setItem("warmFloor", JSON.stringify(warmFloor))
    localStorage.setItem("ladderMaterial", JSON.stringify(ladderMaterial))

    step8Join(warmFloor, ladderMaterial);

    localStorage.setItem("step8", JSON.stringify(step8))
    localStorage.setItem("page-8-cost", JSON.stringify(cost))

    const homeParams = JSON.parse(localStorage.getItem("homeParams"));
    const step1 = JSON.parse(localStorage.getItem("step1"));
    const step2 = JSON.parse(localStorage.getItem("step2"));
    const step3 = JSON.parse(localStorage.getItem("step3"));
    const step4 = JSON.parse(localStorage.getItem("step4"));
    const step5 = JSON.parse(localStorage.getItem("step5"));
    const step6 = JSON.parse(localStorage.getItem("step6"));
    const step7 = JSON.parse(localStorage.getItem("step7"));

    axios.post("http://localhost:8000/api/recommedation-system/step9", {
      homeParams,
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
      step8,
    })
      .then((response) => {
        localStorage.setItem("rec-step8", JSON.stringify(response.data))
        setRec(response.data)
        console.log(response.data)
      })
  }

  let step8 = {}
  const step8Join = (warmFloor, ladderMaterial) => {
    for (let lm of ladderMaterial) {
      if (lm.checked) {
        step8 = {
          warmFloor: warmFloor[0].checked,
          ladderMaterial: lm.title,
        }
      }
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <p>Промежуточная стоимость {cost} ₽</p>

        <div>Черновые работы</div>
        <CheckboxGroup list={warmFloor} onChange={calculateCost}/>

        <div>Материалы лестниц</div>
        <RadioGroup list={ladderMaterial} onChange={calculateCost}/>

        <Link to={"/page-9"}>
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

export default Page8;
