import React, {useState} from 'react';

const OptionalWork = ({works, isNecessary}) => {
  const [active, setActive] = useState(true);

  const changeActive = () => {
    setActive(!active);
  }

  return (
    <div className="mx-2">
      <div className="flex justify-between">
        {isNecessary ?
          <p>Обязательные работы</p>
          :
          <p>Необязательные работы</p>
        }
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

                    <div>
                      {
                        item.materials.map((material) =>
                          <div key={material.name}
                               className="flex justify-between items-center">
                            <p>{material.name}</p>
                            <p>{material.price} ₽</p>
                          </div>
                        )
                      }
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
