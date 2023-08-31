import React, {useEffect, useState} from 'react';
import RadioGroup from "../../UI/radioGroup";
import axios from "axios";
import {Link} from "react-router-dom";

const Page3 = ({rec, setRec, onActive}) => {
  const [walls, setWalls] = useState([]);
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  useEffect(() => {
    const storageWalls = JSON.parse(localStorage.getItem("wallMaterial"));

    if (storageWalls) {
      if (rec) {
        for (let wall of storageWalls) {
          wall.isRecommended = wall.title === rec.wallsMaterial;
        }
        localStorage.setItem("wallMaterial", JSON.stringify(storageWalls));
      }
      setWalls(storageWalls);
      intermediateCost += incrementIntermediateCost(storageWalls);
    } else {
      axios.get('http://localhost:8000/api/wall-material')
        .then((response) => {
          if (rec) {
            for (let wall of response.data) {
              wall.isRecommended = wall.title === rec.wallsMaterial;
            }
            localStorage.setItem("wallMaterial", JSON.stringify(response.data));
          }
          setWalls(response.data);
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
    localStorage.setItem("wallMaterial", JSON.stringify(walls))
    localStorage.setItem("page-3-cost", JSON.stringify(cost))

    step3Join(walls);
    localStorage.setItem("step3", JSON.stringify(step3));

    const homeParams = JSON.parse(localStorage.getItem("homeParams"));
    const step1 = JSON.parse(localStorage.getItem("step1"));
    const step2 = JSON.parse(localStorage.getItem("step2"));

    axios.post("http://localhost:8000/api/recommedation-system/step4", {
      homeParams,
      step1,
      step2,
      step3,
    })
      .then((response) => {
        localStorage.setItem("rec-step4", JSON.stringify(response.data))
        setRec(response.data)
      })

    onActive(4);
  }

  let step3 = {};
  const step3Join = (walls) => {
    for (let wall of walls) {
      if (wall.checked) {
        step3 = {
          wallsMaterial: wall.title,
        }
      }
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <p>Промежуточная стоимость {cost} ₽</p>

        <div>Материал стен</div>
        <RadioGroup list={walls} onChange={calculateCost}/>

        <Link to={"/page-4"}>
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

export default Page3;
