import React, {useEffect, useState} from 'react';

const OptionalWork = ({works}) => {
  const [active, setActive] = useState(true);

  const changeActive = () => {
    setActive(!active);
  }

  return (
    <div className="mx-2">
      <div className="flex justify-between">
        <p>Необязательные работы</p>
        {active ?
          <img src="https://svoe-selo.ru/common/external/0b58c12cc41401006bb6.svg" alt="" className="rotate-180"
               onClick={changeActive}/>
          :
          <img src="https://svoe-selo.ru/common/external/0b58c12cc41401006bb6.svg" alt="" onClick={changeActive}/>
        }
      </div>

      {active ?
        <div className=" border border-gray-300 rounded-xl">
          <div className="grid grid-cols-2">
            <p>Работа и стоимость</p>
            <p>Необходимые материалы</p>
          </div>
          <hr/>
          {
            works.map((work) =>
              work.works.map((item) =>
                work.checked ?
                  <div key={item.name}
                       className="grid grid-cols-2 border-b border-gray-300">
                    <div>
                      <p>{item.name}</p>
                      <p>{item.price} ₽</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Не требуется</p>
                      <p>0 ₽</p>
                    </div>
                  </div>
                  : <div key={item.name}></div>
              ))
          }
        </div>
        : <div></div>
      }


    </div>
  );
};

export default OptionalWork;
