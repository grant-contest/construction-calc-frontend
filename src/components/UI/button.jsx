import React from 'react';

const Button = ({title}) => {
  return (
    <div className="px-8 py-2 rounded-full bg-light-green text-white text-sm w-fit">
      {title}
    </div>
  );
};

export default Button;
