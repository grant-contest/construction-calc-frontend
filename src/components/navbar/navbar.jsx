import React from 'react';
import NavbarButton from "./navbarButton";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-9/12 justify-between">
        <NavbarButton page={"H"}/>
        <NavbarButton page={1}/>
        <NavbarButton page={2}/>
        <NavbarButton page={3}/>
        <NavbarButton page={4}/>
        <NavbarButton page={5}/>
        <NavbarButton page={6}/>
        <NavbarButton page={7}/>
        <NavbarButton page={8}/>
        <NavbarButton page={9}/>
        <NavbarButton page={"R"}/>
      </div>
    </div>
  );
};

export default Navbar;
