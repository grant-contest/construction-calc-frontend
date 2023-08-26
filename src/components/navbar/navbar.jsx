import React from 'react';
import NavbarButton from "./navbarButton";
import NavbarRow from "./navbarRow";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-9/12 justify-between items-center">
        <NavbarButton page={"https://s32640.cdn.ngenix.net/images/build-house/steps/active/first-icon.svg"} url={""} completed={true}/>
        <NavbarRow/>
        <NavbarButton page={1} url={"page-1"}/>
        <NavbarRow/>
        <NavbarButton page={2} url={"page-2"}/>
        <NavbarRow/>
        <NavbarButton page={3} url={"page-3"}/>
        <NavbarRow/>
        <NavbarButton page={4} url={"page-4"}/>
        <NavbarRow/>
        <NavbarButton page={5} url={"page-5"}/>
        <NavbarRow/>
        <NavbarButton page={6} url={"page-6"}/>
        <NavbarRow/>
        <NavbarButton page={7} url={"page-7"}/>
        <NavbarRow/>
        <NavbarButton page={8} url={"page-8"}/>
        <NavbarRow/>
        <NavbarButton page={9} url={"page-9"}/>
        <NavbarRow/>
        <NavbarButton page={"https://s32640.cdn.ngenix.net/images/build-house/steps/last-icon.svg"} url={"result"}/>
      </div>
    </div>
  );
};

export default Navbar;
