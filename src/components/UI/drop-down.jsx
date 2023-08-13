import React, {useState} from 'react';
import axios from "axios";

const DropDown = (props) => {
  let [dropDownTitle, setDropDownTitle] = useState(props.title)

  axios.get('http://localhost:8000/regions')
    .then((response) => {
      const data = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="border border-gray-300 rounded-xl w-full px-4 py-3 mb-4 flex justify-between hover:border-light-green">
      <p className="text-gray-500 text-sm">{dropDownTitle}</p>
      <img src="https://svoe-selo.ru/common/external/0b58c12cc41401006bb6.svg" alt=""/>

    </div>
  );
};

export default DropDown;
