import React from 'react';

const Checkbox = () => {
  return (
    <div>
      <input className="block w-6 h-6 cursor-pointer" type="checkbox"/>

      {/* В будущем стилизовать инпут чекбокс за счёт кода ниже */}
      {/* (ниже не сделано, что при клике возникает белая галочка на зелёном фоне) */}
      {/*<input className="absolute h-full w-full z-10 inset-0 cursor-pointer opacity-0 border-0 outline-0"*/}
      {/*       type="checkbox"/>*/}
      {/*<span className="block w-6 h-6 rounded-lg transition-all border border-solid"*/}
      {/*style={{borderColor: "#c9cacc"}}></span>*/}
    </div>
  );
};

export default Checkbox;
