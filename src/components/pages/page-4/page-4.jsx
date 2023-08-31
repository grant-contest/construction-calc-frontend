import React, {useEffect, useState} from 'react';
import RadioGroup from "../../UI/radioGroup";
import {Link} from "react-router-dom";
import axios from "axios";

const Page4 = ({rec, setRec}) => {
  const [slopes, setSlopes] = useState([]);
  const [roof, setRoof] = useState([]);
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  useEffect(() => {
    console.log(rec)
    const storageSlopes = JSON.parse(localStorage.getItem("slopes"));

    if (storageSlopes) {
      if (rec) {
        for (let slope of storageSlopes) {
          slope.isRecommended = Number(slope.id) === rec.slopesNumber;
        }
        localStorage.setItem("slopes", JSON.stringify(storageSlopes));
      }
      setSlopes(storageSlopes);
      intermediateCost += incrementIntermediateCost(storageSlopes);
    } else {
      axios.get('http://localhost:8000/api/number-of-stingrays')
        .then((response) => {
          console.log(response.data)

          if (rec) {
            for (let slope of response.data) {
              slope.isRecommended = Number(slope.id) === rec.slopesNumber;
            }
            localStorage.setItem("slopes", JSON.stringify(storageSlopes));
          }
          setSlopes(response.data);
        })
    }

    const storageRoof = JSON.parse(localStorage.getItem("roof"));
    if (storageRoof) {
      if (rec) {
        for (let roof of storageRoof) {
          roof.isRecommended = roof.title === rec.roofType;
        }
        localStorage.setItem("roof", JSON.stringify(storageRoof));
      }
      setRoof(storageRoof);
      intermediateCost += incrementIntermediateCost(storageRoof);
    } else {
      axios.get('http://localhost:8000/api/type-of-roof')
        .then((response) => {
          if (rec) {
            for (let roof of response.data) {
              roof.isRecommended = roof.title === rec.roofType;
            }
            localStorage.setItem("roof", JSON.stringify(storageRoof));
          }
          setRoof(response.data);
        })
    }

    setCost(intermediateCost);
  }, [rec]);

  const save = () => {
    localStorage.setItem("slopes", JSON.stringify(slopes))
    localStorage.setItem("roof", JSON.stringify(roof))

    step4Join(slopes, roof);
    localStorage.setItem("step4", JSON.stringify(step4))
    localStorage.setItem("page-4-cost", JSON.stringify(cost))

    const homeParams = JSON.parse(localStorage.getItem("homeParams"));
    const step1 = JSON.parse(localStorage.getItem("step1"));
    const step2 = JSON.parse(localStorage.getItem("step2"));
    const step3 = JSON.parse(localStorage.getItem("step3"));

    axios.post("http://localhost:8000/api/recommedation-system/step5", {
      homeParams,
      step1,
      step2,
      step3,
      step4,
    })
      .then((response) => {
        // localStorage.setItem("rec-step5", JSON.stringify(response.data))
        // setRec(response.data)
        console.log(response.data)
      })
  }

  let step4 = {}
  const step4Join = (slopes, roof) => {
    let slopesNum = 0;
    for (let slope of slopes) {
      if (slope.checked) {
        slopesNum = slope.id;
      }
    }

    let choosenRoof;
    for (let item of roof) {
      if (item.checked) {
        choosenRoof = item.title;
      }
    }

    step4 = {
      slopesNumber: slopesNum,
      roofType: choosenRoof,
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

        <div>Количество скатов</div>
        <RadioGroup list={slopes} onChange={calculateCost}/>

        <div>Вид кровли</div>
        <RadioGroup list={roof} onChange={calculateCost}/>

        <Link to={"/page-5"}>
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

export default Page4;
