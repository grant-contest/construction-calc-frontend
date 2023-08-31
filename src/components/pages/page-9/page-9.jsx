import React, {useEffect, useState} from 'react';
import CheckboxGroup from "../../UI/checkboxGroup";
import RadioGroup from "../../UI/radioGroup";
import {Link} from "react-router-dom";
import axios from "axios";

const Page9 = ({rec, setRec, setPageCost, onActive}) => {
  const [ceilCovering, setCeilCovering] = useState([]);
  const [floorCovering, setFloorCovering] = useState([]);
  const [wallDecoration, setWallDecoration] = useState([]);
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  useEffect(() => {
    const storageCeilCovering = JSON.parse(localStorage.getItem("ceilCovering"));
    if (storageCeilCovering) {
      if (rec) {
        for (let ceiling of storageCeilCovering) {
          ceiling.isRecommended = ceiling.title === rec.ceilCovering;
        }
        localStorage.setItem("ceilCovering", JSON.stringify(storageCeilCovering));
      }
      setCeilCovering(storageCeilCovering);
      intermediateCost += incrementIntermediateCost(storageCeilCovering);
    } else {
      axios.get('http://localhost:8000/api/ceiling-covering')
        .then((response) => {
          if (rec) {
            for (let ceiling of response.data) {
              ceiling.isRecommended = ceiling.title === rec.ceilCovering;
            }
            localStorage.setItem("ceilCovering", JSON.stringify(response.data));
          }
          setCeilCovering(response.data);
        })
    }


    const storageFloorCovering = JSON.parse(localStorage.getItem("floorCovering"));
    if (storageFloorCovering) {
      if (rec) {
        for (let floor of storageFloorCovering) {
          floor.isRecommended = floor.title === rec.floorCovering;
        }
        localStorage.setItem("floorCovering", JSON.stringify(storageFloorCovering));
      }
      setFloorCovering(storageFloorCovering);
      intermediateCost += incrementIntermediateCost(storageFloorCovering);
    } else {
      axios.get('http://localhost:8000/api/floor-covering')
        .then((response) => {
          if (rec) {
            for (let floor of response.data) {
              floor.isRecommended = floor.title === rec.floorCovering;
            }
            localStorage.setItem("floorCovering", JSON.stringify(response.data));
          }
          setFloorCovering(response.data);
        })
    }


    const storageWallDecoration = JSON.parse(localStorage.getItem("wallDecoration"));
    if (storageWallDecoration) {
      if (rec) {
        for (let floor of storageWallDecoration) {
          floor.isRecommended = floor.title === rec.wallDecoration;
        }
        localStorage.setItem("wallDecoration", JSON.stringify(storageWallDecoration));
      }
      setWallDecoration(storageWallDecoration);
      intermediateCost += incrementIntermediateCost(storageWallDecoration);
    } else {
      axios.get('http://localhost:8000/api/wall-decoration')
        .then((response) => {
          if (rec) {
            for (let floor of response.data) {
              floor.isRecommended = floor.title === rec.wallDecoration;
            }
            localStorage.setItem("wallDecoration", JSON.stringify(response.data));
          }
          setWallDecoration(response.data);
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
    localStorage.setItem("ceilCovering", JSON.stringify(ceilCovering))
    localStorage.setItem("floorCovering", JSON.stringify(floorCovering))
    localStorage.setItem("wallDecoration", JSON.stringify(wallDecoration))
    localStorage.setItem("page-9-cost", JSON.stringify(cost))

    step9Join(ceilCovering, floorCovering, wallDecoration);
    localStorage.setItem("step9", JSON.stringify(step9));
    setPageCost(cost);

    onActive(10);
  }

  let step9 = {};
  const step9Join = (ceilCovering, floorCovering, wallDecoration) => {
    let cc;
    let fc;
    let wd;
    for (let ceiling of ceilCovering) {
      if (ceiling.checked) {
        cc = ceiling.title;
      }
    }
    for (let floor of floorCovering) {
      if (floor.checked) {
        fc = floor.title;
      }
    }
    for (let wall of wallDecoration) {
      if (wall.checked) {
        wd = wall.title;
      }
    }

    step9 = {
      ceilCovering: cc,
      floorCovering: fc,
      wallDecoration: wd,
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <p>Промежуточная стоимость {cost} ₽</p>

        <div>Черновые работы</div>
        <RadioGroup list={wallDecoration} onChange={calculateCost}/>

        <div>Материалы лестниц</div>
        <RadioGroup list={floorCovering} onChange={calculateCost}/>

        <div>Материалы лестниц</div>
        <RadioGroup list={ceilCovering} onChange={calculateCost}/>

        <Link to={"/result"}>
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

export default Page9;
