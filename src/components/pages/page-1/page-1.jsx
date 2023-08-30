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

const Page1 = () => {
  const [jobs, setJobs] = useState([]);
  const [worksSite, setWorksSite] = useState([]);
  const [design, setDesign] = useState([]);

  useEffect(() => {
    // site-preparation-works
    // works-on-the-site
    // design-and-project-of-the-house
    const storageJobs = localStorage.getItem("sitePreparationWorks");
    if (storageJobs) {
      setJobs(JSON.parse(storageJobs));
    } else {
      axios.get('http://localhost:8000/api/site-preparation-works')
        .then((response) => {
          setJobs(response.data);
        })
    }

    const storageWorksSite = localStorage.getItem("worksOnTheSite");
    if (storageWorksSite) {
      setWorksSite(JSON.parse(storageWorksSite));
    } else {
      axios.get('http://localhost:8000/api/works-on-the-site')
        .then((response) => {
          setWorksSite(response.data);
        })
    }

    const storageDesign = localStorage.getItem("designAndProjectOfTheHouse");
    if (storageDesign) {
      setDesign(JSON.parse(storageDesign));
    } else {
      axios.get('http://localhost:8000/api/design-and-project-of-the-house')
          .then((response) => {
            setDesign(response.data);
          })
    }
  }, []);

  const save = () => {
    localStorage.setItem("sitePreparation", JSON.stringify(jobs))
    localStorage.setItem("worksOnTheSite", JSON.stringify(worksSite))
    localStorage.setItem("designAndProjectOfTheHouse", JSON.stringify(design))
  }

  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <CheckboxGroup list={jobs}/>
        <CheckboxGroup list={worksSite}/>
        <CheckboxGroup list={design}/>


        <button className="rounded-full bg-light-green text-white px-4 py-2 mt-2 mb-4"
                onClick={save}
        >
          Далее
        </button>
      </div>
    </div>
  );
};

export default Page1;