import React, {useEffect, useState} from 'react';

const DropDown = ({title, options, onChange, initValue}) => {
  const [active, setActive] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  useEffect(() => {
    if (initValue) {
      setListTitle(initValue);
      setActive(false);
    }
  }, [initValue]);

  const clickDropDown = () => {
    setActive(!active);
  }

  const clickElem = (event) => {
    const value = event.target.innerText;
    setActive(!active);
    setListTitle(value);
    onChange(value);
  }

  return (
    <div>
      <div  // кнопка списка (хз как ее назвать)
        className="border border-gray-300 rounded-xl w-full px-4 py-3 mb-4 flex justify-between hover:border-light-green"
        onClick={clickDropDown}
      >
        <p className="text-gray-500 text-sm">{listTitle}</p>
        {active ?
          <img src="https://svoe-selo.ru/common/external/0b58c12cc41401006bb6.svg" alt="" className="rotate-180"/>
        :
          <img src="https://svoe-selo.ru/common/external/0b58c12cc41401006bb6.svg" alt=""/>
        }
      </div>

      {active &&
        <div className="border border-gray-300 rounded-xl w-full px-4 py-3 mb-4 relative bg-white max-h-32 overflow-y-auto"> {/* сам список */}
          {
            options.map((region) =>
              <div className="text-gray-500" key={options.indexOf(region)} onClick={clickElem}>  {/* элемент списка */}
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
