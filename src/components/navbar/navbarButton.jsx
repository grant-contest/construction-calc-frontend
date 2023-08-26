import React from 'react';
import {Link} from "react-router-dom";

const NavbarButton = ({page, url, completed}) => {
  return (
    <Link to={url}>
      {completed ?
        <div className="border border-light-green rounded-full">
          <div className="border border-white rounded-full">
            <div
              className="cursor-pointer bg-light-green rounded-full w-8 h-8 flex justify-center items-center text-xs">
              {typeof page === "number" ?
                <p className="text-white">{page}</p>
                :
                <img src={page} alt="" className="w-5/12"/>
              }
            </div>
          </div>
        </div>
        :
        <div className="border border-gray-300 rounded-full">
          <div className="border border-white rounded-full">
            <div
              className="cursor-pointer bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center text-xs">
              {typeof page === "number" ?
                <p className="text-gray-400">{page}</p>
                :
                <img src={page} alt="" className="w-5/12"/>
              }
            </div>
          </div>
        </div>
      }
    </Link>
  );
};

export default NavbarButton;
