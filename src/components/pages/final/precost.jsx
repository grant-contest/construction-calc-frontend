import React from 'react';
import Button from "../../UI/button";

const Precost = ({cost}) => {
  return (
    <div className="border border-gray-300 rounded-xl p-6 mb-4">
      <div className="flex items-center mb-4">
        <img className="w-5" src="https://s32640.cdn.ngenix.net/images/icons/pencil.svg" alt=""/>
        <div className="text-xl">Предварительная стоимость</div>
      </div>
      <div className="text-sm text-gray-500">В расчёт входит стоимость материалов и оценка объёмов работ. Общая оценка
                                             затрат предварительна.
      </div>

      <hr className="my-6"/>

      <div className="flex items-center justify-between">
        <div>Общая стоимость</div>
        <div>{cost} ₽</div>
      </div>

      <Button title={"Подобрать ипотеку"}/>
    </div>
  );
};

export default Precost;
