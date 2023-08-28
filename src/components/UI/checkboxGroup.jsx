import React from 'react';

const CheckboxGroup = ({list}) => {
  const checkboxClicked = (event) => {
    const cb = event.currentTarget.getElementsByTagName("input")
    if (event.target.tagName !== "INPUT") {
      cb[0].checked = !cb[0].checked;
    }
    const res = list.find((obj) => {
      return obj.id === event.currentTarget.id;
    })
    res.checked = !res.checked;
  }

  return (
    <div className="grid grid-cols-2">
      { // checkbox
        list.map((item) =>
          <div className="border border-gray-300 rounded-xl h-20 px-8 mx-2 my-2 flex justify-between items-center"
               key={item.id}
               id={item.id}
               onClick={checkboxClicked}
          >
            <div className="flex justify-start items-center w-5/12">
              <input type="checkbox" className="mr-2" checked={item.checked} onChange={() => {}}/>
              <div className="flex justify-between items-center">
                <p className="text-lg mr-4">{item.title}</p>
                <img src="https://s32640.cdn.ngenix.net/images/icons/important-tooltip-gray.svg" alt="" className="mr-2"/>
              </div>
              <img src={item.image} alt=""/>
            </div>
            <p>{item.price} ₽</p>
          </div>
        )
      }
    </div>
  );
};

export default CheckboxGroup;
