import React, {useState} from 'react';
import OptionalWork from "./optionalWork";

const RadioGroup = ({list, onChange}) => {
  const [change, setChange] = useState(0);
  const changeCrutch = () => {
    setChange(change + 1)
  }

  const radioClicked = (event) => {
    const radio = event.currentTarget.getElementsByTagName("input")

    const radioGroup = event.currentTarget.parentElement;
    const radioList = radioGroup.getElementsByTagName("input");
    for (let item of radioList) {
      item.checked = item.id === radio[0].id;
    }

    let intermediateCost = 0;
    for (let item of list) {
      if (item.checked && item.id !== radio[0].id) {
        for (let work of item.works) {
          intermediateCost -= work.price;
        }
      }
      if (!item.checked && item.id === radio[0].id) {
        for (let work of item.works) {
          intermediateCost += work.price;
        }
      }
      item.checked = item.id === radio[0].id;
    }
    onChange(intermediateCost);

    changeCrutch(); // wtf ???
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        { // radio
          list.map((item) =>
            <div key={item.id}>
              {item.isRecommended ?
                <div className="border border-light-green rounded-xl h-20 px-8 mx-2 my-2 flex justify-between items-center"
                     id={item.id}
                     onClick={radioClicked}
                >
                  <div className="flex justify-start items-center w-5/12">
                    <input type="radio" id={item.id} className="mr-2" defaultChecked={item.checked} onChange={() => {
                    }}/>
                    <div className="flex justify-between items-center">
                      <p className="text-lg mr-4">{item.title}</p>
                      <img src="https://s32640.cdn.ngenix.net/images/icons/important-tooltip-gray.svg" alt=""
                           className="mr-2"/>
                    </div>
                    <img src={item.image} alt=""/>
                  </div>
                  <div className="text-light-green">Рекомендовано</div>
                  <p>{item.price} ₽</p>
                </div>
                :
                <div className="border border-gray-300 rounded-xl h-20 px-8 mx-2 my-2 flex justify-between items-center"
                     id={item.id}
                     onClick={radioClicked}
                >
                  <div className="flex justify-start items-center w-5/12">
                    <input type="radio" id={item.id} className="mr-2" defaultChecked={item.checked} onChange={() => {
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

      <OptionalWork works={list} isNecessary={true}/>
    </div>
  );
};

export default RadioGroup;
