import React, {useEffect, useState} from 'react';
import CheckboxGroup from "../../UI/checkboxGroup";
import axios from "axios";
import RadioGroup from "../../UI/radioGroup";

const Page2 = () => {
  const [jobs, setJobs] = useState([]);
  const [bases, setBases] = useState([]);

  useEffect(() => {
    const storageJobs = localStorage.getItem("sitePreparation");
    if (storageJobs) {
      setJobs(JSON.parse(storageJobs));
    } else {
      axios.get('http://localhost:8000/api/site-preparation-jobs')
        .then((response) => {
          setJobs(response.data);
        })
    }

    const storageBases = localStorage.getItem("baseTypes");
    if (storageBases) {
      setBases(JSON.parse(storageBases));
    } else {
      axios.get('http://localhost:8000/api/base-types')
        .then((response) => {
          setBases(response.data);
        })
    }
  }, []);

  const getJobs = () => {
  }

  const save = () => {
    localStorage.setItem("sitePreparation", JSON.stringify(jobs))
    localStorage.setItem("baseTypes", JSON.stringify(bases))
  }

  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <CheckboxGroup list={jobs}/>
        <RadioGroup list={bases}/>

        <button className="rounded-full bg-light-green text-white px-4 py-2 mt-2 mb-4"
                onClick={save}
        >Далее
        </button>
      </div>
    </div>
  );
};

export default Page2;
