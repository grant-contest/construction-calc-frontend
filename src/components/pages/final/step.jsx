import React from 'react';

const Step = ({number, title, cost}) => {
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-4 mb-4">
      <div className="flex items-center">
        <div className="flex justify-center items-center bg-gray-300 w-10 h-10 rounded-full mr-4">{number}</div>
        <div>{title}</div>
      </div>
      <div>{cost} ₽</div>
    </div>
  );
};

export default Step;
