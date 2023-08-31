import React, {useEffect, useState} from 'react';
import NavbarButton from "./navbarButton";
import NavbarRow from "./navbarRow";
import {useLocation, useParams} from "react-router-dom";

const Navbar = () => {
  const [change, setChange] = useState(0);
  const changeCrutch = () => {
    setChange(change + 1)
  }

  const param = useLocation().pathname;
  let page;
  switch (param) {
    case "/":
      page = 0;
      break;
    case "/page-1":
      page = 1;
      break;
    case "/page-2":
      page = 2;
      break;
    case "/page-3":
      page = 3;
      break;
    case "/page-4":
      page = 4;
      break;
    case "/page-5":
      page = 5;
      break;
    case "/page-6":
      page = 6;
      break;
    case "/page-7":
      page = 7;
      break;
    case "/page-8":
      page = 8;
      break;
    case "/page-9":
      page = 9;
      break;
    default:
      page = 10;
      break;
  }

  const [completedList, setCompletedList] = useState([true, false, false, false, false, false, false, false, false, false, false]);

  const clicked = (pageNumber) => {
    for (let btn = 0; btn <= pageNumber; btn++) {
      completedList[btn] = true;
    }
    for (let btn = pageNumber + 1; btn <= 10; btn++) {
      completedList[btn] = false;
    }
    setCompletedList(completedList);
    changeCrutch()
  }

  useEffect(() => {
    clicked(page)
  }, []);

  return (
    <div className="flex justify-center py-5">
      <div className="flex w-9/12 justify-between items-center">
        <NavbarButton page={"https://s32640.cdn.ngenix.net/images/build-house/steps/active/first-icon.svg"}
                      pageNumber={0} url={""} onChange={clicked} completed={completedList[0]}/>
        <NavbarRow/>
        <NavbarButton page={1} pageNumber={1} url={"page-1"} onChange={clicked} completed={completedList[1]}/>
        <NavbarRow/>
        <NavbarButton page={2} pageNumber={2} url={"page-2"} onChange={clicked} completed={completedList[2]}/>
        <NavbarRow/>
        <NavbarButton page={3} pageNumber={3} url={"page-3"} onChange={clicked} completed={completedList[3]}/>
        <NavbarRow/>
        <NavbarButton page={4} pageNumber={4} url={"page-4"} onChange={clicked} completed={completedList[4]}/>
        <NavbarRow/>
        <NavbarButton page={5} pageNumber={5} url={"page-5"} onChange={clicked} completed={completedList[5]}/>
        <NavbarRow/>
        <NavbarButton page={6} pageNumber={6} url={"page-6"} onChange={clicked} completed={completedList[6]}/>
        <NavbarRow/>
        <NavbarButton page={7} pageNumber={7} url={"page-7"} onChange={clicked} completed={completedList[7]}/>
        <NavbarRow/>
        <NavbarButton page={8} pageNumber={8} url={"page-8"} onChange={clicked} completed={completedList[8]}/>
        <NavbarRow/>
        <NavbarButton page={9} pageNumber={9} url={"page-9"} onChange={clicked} completed={completedList[9]}/>
        <NavbarRow/>
        <NavbarButton page={"https://s32640.cdn.ngenix.net/images/build-house/steps/last-icon.svg"} pageNumber={10}
                      url={"result"} onChange={clicked} completed={completedList[10]}/>
      </div>
    </div>
  );
};

export default Navbar;
