import React, {useState} from 'react';
import axios from "axios";

const DropDown = (props) => {
  let [dropDownTitle, setDropDownTitle] = useState(props.title);
  let [active, setActive] = useState(false);

  const clickDropDown = () => {
    setActive(!active);
  }

  // axios.get('http://localhost:8000/regions')   пример запроса
  //   .then((response) => {
  //     const data = response.data;
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return (
    <div>
      <div  // кнопка списка (хз как ее назвать)
        className="border border-gray-300 rounded-xl w-full px-4 py-3 mb-4 flex justify-between hover:border-light-green"
        onClick={clickDropDown}
      >
        <p className="text-gray-500 text-sm">{dropDownTitle}</p>
        <img src="https://svoe-selo.ru/common/external/0b58c12cc41401006bb6.svg" alt=""/>
      </div>

      { active &&
        <div className="border border-gray-300 rounded-xl w-full px-4 py-3 mb-4 relative bg-white"> {/* сам список */}
          {
            props.options.map((region) =>
              <div className="text-gray-500">  {/* элемент списка */}
                {region}
              </div>
            )
          }
        </div>
      }
    </div>
  );
};

export default DropDown;
