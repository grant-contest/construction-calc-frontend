import React from 'react';

const Logo = () => {
  return (
      <div className="flex justify-start items-center">
        <img src="https://s32640.cdn.ngenix.net/external-resources/images/logo/logo-19359685-MAIN_SELO.svg" alt=""/>
        <div className="mx-3">
          <div className="flex justify-between">
            <div className="font-medium text-lg">Своё</div>
            <div className="bg-gray-400 w-px"></div>
            <div className="text-lg">Село</div>
          </div>
          <div className="text-xs text-gray-500">от Россельхозбанка</div>
        </div>
      </div>
  );
};

export default Logo;