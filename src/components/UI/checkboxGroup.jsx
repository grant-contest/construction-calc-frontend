import React, {useEffect, useState} from 'react';
import OptionalWork from "./optionalWork";

const CheckboxGroup = ({list, onChange}) => {
  const [change, setChange] = useState(0);
  const changeCrutch = () => {
    setChange(change + 1)
  }
  console.log(list)

  const checkboxClicked = (event) => {
    const cb = event.currentTarget.getElementsByTagName("input")
    if (event.target.tagName !== "INPUT") {
      cb[0].checked = !cb[0].checked;
    }
    const res = list.find((obj) => {
      return obj.id === event.currentTarget.id;
    })
    res.checked = !res.checked;

    changeCrutch(); // wtf ???

    let intermediateCost = 0;
    if (res.checked) {
      for (let work of res.works) {
        intermediateCost += work.price;
      }
    } else {
      for (let work of res.works) {
        intermediateCost -= work.price;
      }
    }
    onChange(intermediateCost);
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        { // checkbox
          list.map((item) =>
            <div key={item.id}>
              {item.isRecommended ?
                <div className="border border-orange-800 rounded-xl h-20 px-8 mx-2 my-2 flex justify-between items-center"
                     id={item.id}
                     onClick={checkboxClicked}
                >
                  <div className="flex justify-start items-center w-5/12">
                    <input type="checkbox" className="mr-2" defaultChecked={item.checked} onChange={() => {
                    }}/>
                    <div className="flex justify-between items-center">
                      <p className="text-lg mr-4">{item.title}</p>
                      <img src="https://s32640.cdn.ngenix.net/images/icons/important-tooltip-gray.svg" alt=""
                           className="mr-2"/>
                    </div>
                    <img src={item.image} alt=""/>
                  </div>
                  <p>{item.price} ₽</p>
                </div>
                :
                <div className="border border-gray-300 rounded-xl h-20 px-8 mx-2 my-2 flex justify-between items-center"
                     id={item.id}
                     onClick={checkboxClicked}
                >
                  <div className="flex justify-start items-center w-5/12">
                    <input type="checkbox" className="mr-2" defaultChecked={item.checked} onChange={() => {
                    }}/>
                    <div className="flex justify-between items-center">
                      <p className="text-lg mr-4">{item.title}</p>
                      <img src="https://s32640.cdn.ngenix.net/images/icons/important-tooltip-gray.svg" alt=""
                           className="mr-2"/>
                    </div>
                    <img src={item.image} alt=""/>
                  </div>
                  <p>{item.price} ₽</p>
                </div>
              }
            </div>

          )
        }
      </div>

      <OptionalWork works={list} isNecessary={false}/>
    </div>
  );
};

export default CheckboxGroup;
