import React from 'react';

const PageNavigation = () => {
  return (
      <div>
        {/* Вставить нормальные изображения, сделать круглешки вокруг */}
        <div className="flex justify-around py-7 px-20" style={{backgroundColor: "#4e4f50"}}>
          <button>Дом</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>Итог</button>
        </div>
      </div>
  );
};

export default PageNavigation;