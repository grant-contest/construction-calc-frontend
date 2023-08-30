import React, {useEffect, useState} from 'react';
import axios from "axios";
import RadioGroup from "../../UI/radioGroup";

const Page2 = () => {
  const [bases, setBases] = useState([]);
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  useEffect(() => {
    const storageBases = localStorage.getItem("baseTypes");
    if (storageBases) {
      setBases(JSON.parse(storageBases));
      intermediateCost += incrementIntermediateCost(JSON.parse(storageBases));
    } else {
      axios.get('http://localhost:8000/api/base-types')
        .then((response) => {
          setBases(response.data);
        })
    }

    setCost(intermediateCost);
  }, []);

  const save = () => {
    localStorage.setItem("baseTypes", JSON.stringify(bases))
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

  const decrementIntermediateCost = (list) => {
    let intermediateCost = 0;
    for (let item of list) {
      if (item.checked) {
        for (let work of item.works) {
          intermediateCost -= work.price;
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

        <button className="rounded-full bg-light-green text-white px-4 py-2 mt-2 mb-4"
                onClick={save}
        >
          Далее
        </button>
      </div>
    </div>
  );
};

export default Page2;
