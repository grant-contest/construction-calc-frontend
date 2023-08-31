import React, {useEffect, useState} from 'react';
import RadioGroup from "../../UI/radioGroup";
import {Link} from "react-router-dom";
import CheckboxGroup from "../../UI/checkboxGroup";
import axios from "axios";

const Page7 = ({rec, setRec}) => {
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  const [electrician, setElectrician] = useState([]);
  const [waterSupply, setWaterSupply] = useState([]);
  const [sewerage, setSewerage] = useState([]);
  const [heating, setHeating] = useState([]);
  const [ventilation, setVentilation] = useState([]);

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
    const storageElectrician = JSON.parse(localStorage.getItem("electrician"));
    if (storageElectrician) {
      if (rec) {
        storageElectrician[0].isRecommended =
          rec.electrician.plasticBoxesUpTo40mmWide ||
          rec.electrician.layingAThreeToFive ||
          rec.electrician.cableLaying ||
          rec.electrician.installationOfTwoKey ||
          rec.electrician.installationOfSingleKey ||
          rec.electrician.recessedTypeSocketDevice ||
          rec.electrician.installationOfPendant ||
          rec.electrician.chandeliersAndPendants;
        localStorage.setItem("electrician", JSON.stringify(storageElectrician));
      }
      setElectrician(storageElectrician);
      intermediateCost += incrementIntermediateCost(storageElectrician);
    } else {
      axios.get('http://localhost:8000/api/electrics')
        .then((response) => {
          if (rec) {
            response.data[0].isRecommended =
              rec.electrician.plasticBoxesUpTo40mmWide ||
              rec.electrician.layingAThreeToFive ||
              rec.electrician.cableLaying ||
              rec.electrician.installationOfTwoKey ||
              rec.electrician.installationOfSingleKey ||
              rec.electrician.recessedTypeSocketDevice ||
              rec.electrician.installationOfPendant ||
              rec.electrician.chandeliersAndPendants;
            localStorage.setItem("electrician", JSON.stringify(response.data));
          }
          setElectrician(response.data);
        })
    }


    const storageWaterSupply = JSON.parse(localStorage.getItem("waterSupply"));
    if (storageWaterSupply) {
      if (rec) {
        storageWaterSupply[0].isRecommended =
          rec.waterSupply.layingOfInternalWaterSupplyPipelines ||
          rec.waterSupply.installationOfBathtubs ||
          rec.waterSupply.installationOfSingle ||
          rec.waterSupply.installationOfMixers;
        localStorage.setItem("waterSupply", JSON.stringify(storageWaterSupply));
      }
      setWaterSupply(storageWaterSupply);
      intermediateCost += incrementIntermediateCost(storageWaterSupply);
    } else {
      axios.get('http://localhost:8000/api/water-supply')
        .then((response) => {
          if (rec) {
            response.data[0].isRecommended =
              rec.waterSupply.layingOfInternalWaterSupplyPipelines ||
              rec.waterSupply.installationOfBathtubs ||
              rec.waterSupply.installationOfSingle ||
              rec.waterSupply.installationOfMixers;
            localStorage.setItem("waterSupply", JSON.stringify(response.data));
          }
          setWaterSupply(response.data);
        })
    }


    const storageSewerage = JSON.parse(localStorage.getItem("sewerage"));
    if (storageSewerage) {
      if (rec) {
        storageSewerage[0].isRecommended =
          rec.sewerage.installationOfToilet ||
          rec.sewerage.layingOfSewerage50mm ||
          rec.sewerage.layingOfSewerage110mm;
        localStorage.setItem("sewerage", JSON.stringify(storageSewerage));
      }
      setSewerage(storageSewerage);
      intermediateCost += incrementIntermediateCost(storageSewerage);
    } else {
      axios.get('http://localhost:8000/api/sewage-system')
        .then((response) => {
          if (rec) {
            response.data[0].isRecommended =
              rec.sewerage.installationOfToilet ||
              rec.sewerage.layingOfSewerage50mm ||
              rec.sewerage.layingOfSewerage110mm;
            localStorage.setItem("sewerage", JSON.stringify(response.data));
          }
          setSewerage(response.data);
        })
    }


    const storageHeating = JSON.parse(localStorage.getItem("heating"));
    if (storageHeating) {
      if (rec) {
        storageHeating[0].isRecommended =
          rec.heating.assemblyOfAWaterSupply ||
          rec.heating.layingOfInternalHeatingPipelines ||
          rec.heating.installationOfWindowFixtures;
        localStorage.setItem("heating", JSON.stringify(storageHeating));
      }
      setHeating(storageHeating);
      intermediateCost += incrementIntermediateCost(storageHeating);
    } else {
      axios.get('http://localhost:8000/api/heating')
        .then((response) => {
          if (rec) {
            response.data[0].isRecommended =
              rec.heating.assemblyOfAWaterSupply ||
              rec.heating.layingOfInternalHeatingPipelines ||
              rec.heating.installationOfWindowFixtures;
            localStorage.setItem("heating", JSON.stringify(response.data));
          }
          setHeating(response.data);
        })
    }


    const storageVentilation = JSON.parse(localStorage.getItem("ventilation"));
    if (storageVentilation) {
      if (rec) {
        storageVentilation[0].isRecommended =
          rec.ventilation.installationOfSplitSystems ||
          rec.ventilation.cablingOnABrickWall;
        localStorage.setItem("heating", JSON.stringify(storageVentilation));
      }
      setVentilation(storageVentilation);
      intermediateCost += incrementIntermediateCost(storageVentilation);
    } else {
      axios.get('http://localhost:8000/api/ventilation')
        .then((response) => {
          if (rec) {
            response.data[0].isRecommended =
              rec.ventilation.installationOfSplitSystems ||
              rec.ventilation.cablingOnABrickWall;
            localStorage.setItem("ventilation", JSON.stringify(response.data));
          }
          setVentilation(response.data);
        })
    }

    setCost(intermediateCost);
  }, [rec]);


  const save = () => {
    localStorage.setItem("electrician", JSON.stringify(electrician))
    localStorage.setItem("waterSupply", JSON.stringify(waterSupply))
    localStorage.setItem("sewerage", JSON.stringify(sewerage))
    localStorage.setItem("heating", JSON.stringify(heating))
    localStorage.setItem("ventilation", JSON.stringify(ventilation))

    step7Join(electrician, waterSupply, sewerage, heating, ventilation);

    localStorage.setItem("step7", JSON.stringify(step7))
    localStorage.setItem("page-7-cost", JSON.stringify(cost))

    const homeParams = JSON.parse(localStorage.getItem("homeParams"));
    const step1 = JSON.parse(localStorage.getItem("step1"));
    const step2 = JSON.parse(localStorage.getItem("step2"));
    const step3 = JSON.parse(localStorage.getItem("step3"));
    const step4 = JSON.parse(localStorage.getItem("step4"));
    const step5 = JSON.parse(localStorage.getItem("step5"));
    const step6 = JSON.parse(localStorage.getItem("step6"));

    axios.post("http://localhost:8000/api/recommedation-system/step8", {
      homeParams,
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
    })
      .then((response) => {
        localStorage.setItem("rec-step8", JSON.stringify(response.data))
        setRec(response.data)
        console.log(response.data)
      })
  }

  let step7 = {}
  const step7Join = (electrician, waterSupply, sewerage, heating, ventilation) => {
    step7 = {
      electrician: electrician[0].checked,
      waterSupply: waterSupply[0].checked,
      sewerage: sewerage[0].checked,
      heating: heating[0].checked,
      ventilation: ventilation[0].checked,
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <p>Промежуточная стоимость {cost} ₽</p>

        <div>Электрика</div>
        <CheckboxGroup list={electrician} onChange={calculateCost}/>

        <div>Водоснабжение</div>
        <CheckboxGroup list={waterSupply} onChange={calculateCost}/>

        <div>Канализация</div>
        <CheckboxGroup list={sewerage} onChange={calculateCost}/>

        <div>Отопление</div>
        <CheckboxGroup list={heating} onChange={calculateCost}/>

        <div>Вентиляция и кондиционеры</div>
        <CheckboxGroup list={ventilation} onChange={calculateCost}/>


        <Link to={"/page-8"}>
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

export default Page7;
