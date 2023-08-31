// import React from 'react';
// import PageHeader from "./pageHeader";
// import PageChapter from "./pageChapter";
// import PageNavigation from "./pageNavigation";
//
// const Page1 = () => {
//   return (
//       <div>
//         <PageHeader/>
//         <PageNavigation/>
//         {/* Такое выделение рекомендованного показали экспертам*/}
//         {/*<img src="https://static.tildacdn.com/tild3832-6533-4337-b730-343762383239/_-1.jpg"*/}
//         {/*     style={{width: "40px", marginLeft: "35px"}} alt="Recomended"></img>*/}
//         {/*<span style={{color: "#42ab44", marginLeft: "8px"}}>Рекомендованное</span>*/}
//         <PageChapter/>
//       </div>
//   );
// };
//
// export default Page1;

import React, {useEffect, useState} from 'react';
import CheckboxGroup from "../../UI/checkboxGroup";
import axios from "axios";
import {Link} from "react-router-dom";

const Page1 = ({rec, setRec}) => {
  const [jobs, setJobs] = useState([]);
  const [worksSite, setWorksSite] = useState([]);
  const [design, setDesign] = useState([]);
  const [cost, setCost] = useState(0);
  let intermediateCost = 0;

  useEffect(() => {
    // site-preparation-works
    // works-on-the-site
    // design-and-project-of-the-house
    const storageJobs = JSON.parse(localStorage.getItem("sitePreparationWorks"));
    if (storageJobs) {
      if (rec) {
        storageJobs[0].isRecommended = rec.sitePreparation.siteChoosing
        storageJobs[1].isRecommended = rec.sitePreparation.geodeticalWorks
        storageJobs[2].isRecommended = rec.sitePreparation.geologicalWorks
        storageJobs[3].isRecommended = rec.sitePreparation.cuttingBushesAndSmallForests || rec.sitePreparation.clearingTheSiteOfDebris;
        localStorage.setItem("sitePreparationWorks", JSON.stringify(storageJobs));
      }
      setJobs(storageJobs);
      intermediateCost += incrementIntermediateCost(storageJobs);
    } else {
      axios.get('http://localhost:8000/api/site-preparation-works')
        .then((response) => {
          if (rec) {
            response.data[0].isRecommended = rec.sitePreparation.siteChoosing
            response.data[1].isRecommended = rec.sitePreparation.geodeticalWorks
            response.data[2].isRecommended = rec.sitePreparation.geologicalWorks
            response.data[3].isRecommended = rec.sitePreparation.cuttingBushesAndSmallForests || rec.sitePreparation.clearingTheSiteOfDebris;
            localStorage.setItem("sitePreparationWorks", JSON.stringify(response.data));
          }
          setJobs(response.data);
        })
    }

    const storageWorksSite = JSON.parse(localStorage.getItem("worksOnTheSite"));
    if (storageWorksSite) {
      if (rec) {
        storageWorksSite[0].isRecommended = rec.siteWorks.cameras
        storageWorksSite[1].isRecommended = rec.siteWorks.temporaryFence
        localStorage.setItem("worksOnTheSite", JSON.stringify(storageWorksSite));
      }
      setWorksSite(storageWorksSite);
      intermediateCost += incrementIntermediateCost(storageWorksSite);
    } else {
      axios.get('http://localhost:8000/api/works-on-the-site')
        .then((response) => {
          if (rec) {
            response.data[0].isRecommended = rec.siteWorks.cameras
            response.data[1].isRecommended = rec.siteWorks.temporaryFence
            localStorage.setItem("worksOnTheSite", JSON.stringify(response.data));
          }
          setWorksSite(response.data);
        })
    }

    const storageDesign = JSON.parse(localStorage.getItem("designAndProjectOfTheHouse"));
    if (storageDesign) {
      if (rec) {
        storageDesign[0].isRecommended = rec.houseDesignAndProject.homeProject
        storageDesign[1].isRecommended = rec.houseDesignAndProject.designProject
        localStorage.setItem("designAndProjectOfTheHouse", JSON.stringify(storageDesign));
      }
      setDesign(storageDesign);
      intermediateCost += incrementIntermediateCost(storageDesign);
    } else {
      axios.get('http://localhost:8000/api/design-and-project-of-the-house')
        .then((response) => {
          if (rec) {
            response.data[0].isRecommended = rec.houseDesignAndProject.homeProject
            response.data[1].isRecommended = rec.houseDesignAndProject.designProject
            localStorage.setItem("designAndProjectOfTheHouse", JSON.stringify(response.data));
          }
          setDesign(response.data);
        })
    }

    setCost(intermediateCost);
  }, [rec]);

  const save = () => {
    localStorage.setItem("sitePreparationWorks", JSON.stringify(jobs))
    localStorage.setItem("worksOnTheSite", JSON.stringify(worksSite))
    localStorage.setItem("designAndProjectOfTheHouse", JSON.stringify(design))

    const homeParams = JSON.parse(localStorage.getItem("homeParams"));
    step1Join(jobs, worksSite, design);

    localStorage.setItem("step1", JSON.stringify(step1))
    localStorage.setItem("page-1-cost", JSON.stringify(cost))

    axios.post("http://localhost:8000/api/recommedation-system/step2", {
      homeParams,
      step1,
    })
      .then((response) => {
        localStorage.setItem("rec-step2", JSON.stringify(response.data))
        setRec(response.data)
      })
  }

  let step1 = {}
  const step1Join = (jobs, worksite, design) => {
    step1 = {
      sitePreparation: {
        siteChoosing: jobs[0].checked,
        geologicalWorks: jobs[1].checked,
        geodeticalWorks: jobs[2].checked,
        cuttingBushesAndSmallForests: jobs[3].checked,
        clearingTheSiteOfDebris: jobs[3].checked,
      },
      SiteWorks: {
        cameras: worksite[0].checked,
        temporaryFence: worksite[0].checked,
      },
      HouseDesignAndProject: {
        homeProject: design[0].checked,
        designProject: design[1].checked,
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
        <CheckboxGroup list={worksSite} onChange={calculateCost}/>
        <CheckboxGroup list={design} onChange={calculateCost}/>

        <Link to={"/page-2"}>
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

export default Page1;
