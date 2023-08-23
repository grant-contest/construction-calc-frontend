import React from 'react';

const NavbarButton = ({page}) => {
  return (
    <div className="cursor-pointer bg-light-green rounded-full w-7 h-7 flex justify-center items-center">
      <p className="text-white">{page}</p>
    </div>
  );
};

export default NavbarButton;
