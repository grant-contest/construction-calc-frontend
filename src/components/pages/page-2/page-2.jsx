import React, {useEffect, useState} from 'react';
import CheckboxGroup from "../../UI/checkboxGroup";
import axios from "axios";
import RadioGroup from "../../UI/radioGroup";

const Page2 = () => {
  const [jobs, setJobs] = useState([]);
  const [bases, setBases] = useState([]);
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  useEffect(() => {
    const storageJobs = localStorage.getItem("sitePreparation");
    if (storageJobs) {
      setJobs(JSON.parse(storageJobs));
      intermediateCost += incrementIntermediateCost(JSON.parse(storageJobs));
    } else {
      axios.get('http://localhost:8000/api/site-preparation-works')
        .then((response) => {
          setJobs(response.data);
        })
    }

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
    localStorage.setItem("sitePreparation", JSON.stringify(jobs))
    localStorage.setItem("baseTypes", JSON.stringify(bases))
    localStorage.setItem("page-2-cost", JSON.stringify(cost))
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

        <CheckboxGroup list={jobs} onChange={calculateCost}/>
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
