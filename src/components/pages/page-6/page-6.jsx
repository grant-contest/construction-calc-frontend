import React, {useEffect, useState} from 'react';
import RadioGroup from "../../UI/radioGroup";
import {Link} from "react-router-dom";
import axios from "axios";

const Page6 = ({rec, setRec, onActive}) => {
  const [windowMaterial, setWndowMaterial] = useState([]);
  const [windowType, setWindowType] = useState([]);
  const [doorMaterial, setDoorMaterial] = useState([]);
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  useEffect(() => {
    const storageWM = JSON.parse(localStorage.getItem("windowMaterial"));

    if (storageWM) {
      if (rec) {
        for (let w of storageWM) {
          w.isRecommended = w.title === rec.windowMaterial;
        }
        localStorage.setItem("windowMaterial", JSON.stringify(storageWM));
      }
      setWndowMaterial(storageWM);
      intermediateCost += incrementIntermediateCost(storageWM);
    } else {
      axios.get('http://localhost:8000/api/window-material')
        .then((response) => {
          if (rec) {
            for (let w of response.data) {
              w.isRecommended = w.title === rec.windowMaterial;
            }
            localStorage.setItem("windowMaterial", JSON.stringify(response.data));
          }
          setWndowMaterial(response.data);
        })
    }


    const storageWT = JSON.parse(localStorage.getItem("windowType"));

    if (storageWT) {
      if (rec) {
        for (let w of storageWT) {
          w.isRecommended = w.title === rec.windowType;
        }
        localStorage.setItem("windowType", JSON.stringify(storageWT));
      }
      setWindowType(storageWT);
      intermediateCost += incrementIntermediateCost(storageWT);
    } else {
      axios.get('http://localhost:8000/api/type-of-windows')
        .then((response) => {
          if (rec) {
            for (let w of response.data) {
              w.isRecommended = w.title === rec.windowType;
            }
            localStorage.setItem("windowType", JSON.stringify(response.data));
          }
          setWindowType(response.data);
        })
    }


    const storageDT = JSON.parse(localStorage.getItem("doorMaterial"));

    if (storageDT) {
      if (rec) {
        for (let d of storageDT) {
          d.isRecommended = d.title === rec.doorMaterial;
        }
        localStorage.setItem("doorMaterial", JSON.stringify(storageDT));
      }
      setDoorMaterial(storageDT);
      intermediateCost += incrementIntermediateCost(storageDT);
    } else {
      axios.get('http://localhost:8000/api/door-material')
        .then((response) => {
          if (rec) {
            for (let d of response.data) {
              d.isRecommended = d.title === rec.doorMaterial;
            }
            localStorage.setItem("doorMaterial", JSON.stringify(response.data));
          }
          setDoorMaterial(response.data);
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
    localStorage.setItem("windowMaterial", JSON.stringify(windowMaterial))
    localStorage.setItem("windowType", JSON.stringify(windowType))
    localStorage.setItem("doorMaterial", JSON.stringify(doorMaterial))
    localStorage.setItem("page-6-cost", JSON.stringify(cost))

    step6Join(windowMaterial, windowType, doorMaterial);
    localStorage.setItem("step6", JSON.stringify(step6));

    const homeParams = JSON.parse(localStorage.getItem("homeParams"));
    const step1 = JSON.parse(localStorage.getItem("step1"));
    const step2 = JSON.parse(localStorage.getItem("step2"));
    const step3 = JSON.parse(localStorage.getItem("step3"));
    const step4 = JSON.parse(localStorage.getItem("step4"));
    const step5 = JSON.parse(localStorage.getItem("step5"));

    axios.post("http://localhost:8000/api/recommedation-system/step7", {
      homeParams,
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
    })
      .then((response) => {
        localStorage.setItem("rec-step6", JSON.stringify(response.data))
        setRec(response.data)
      })

    onActive(7);
  }

  let step6 = {};
  const step6Join = (windowMaterial, windowType, doorMaterial) => {
    let wm;
    let wt;
    let dm;
    for (let w of windowMaterial) {
      if (w.checked) {
        wm = windowMaterial.title;
      }
    }
    for (let w of windowType) {
      if (w.checked) {
        wt = windowType.title;
      }
    }
    for (let w of windowMaterial) {
      if (w.checked) {
        dm = doorMaterial.title;
      }
    }

    step6 = {
      windowMaterial: wm,
      windowType: wt,
      doorMaterial: dm,
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <p>Промежуточная стоимость {cost} ₽</p>

        <div>Материал окон</div>
        <RadioGroup list={windowMaterial} onChange={calculateCost}/>

        <div>Тип окон</div>
        <RadioGroup list={windowType} onChange={calculateCost}/>

        <div>Материал дверей</div>
        <RadioGroup list={doorMaterial} onChange={calculateCost}/>

        <Link to={"/page-7"}>
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

export default Page6;
