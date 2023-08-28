import React, {useEffect, useState} from 'react';

const Range = ({title, maxValue, onChange, initValue}) => {
  let [value, setValue] = useState(0);

  useEffect(() => {
    setValue(Number(initValue))
  }, [initValue]);

  const isDigitsOnly = (value) => {
    return /^\d+$/.test(value);
  }

  const changeValue = (event) => {
    const input = event.target;

    switch (input.type) {
      case "text":
        if (isDigitsOnly(input.value) && input.value <= maxValue) { // если в value число и оно меньше maxValue
          setValue(input.value.replace(/^0+/, ""));
          onChange(input.value.replace(/^0+/, ""));
        } else if (isDigitsOnly(input.value) && input.value > maxValue) {  // если в value число и оно больше maxValue
          setValue(maxValue);
          onChange(maxValue);
        } else if (input.value === "") {  // если в value пусто
          setValue(0);
          onChange(0);
        }
        break;

      case "range":
        setValue(input.value);
        onChange(input.value);
        break;

      default:
        break;
    }
  }

  return (
    <div className="border border-gray-300 rounded-xl w-full px-4 pt-1 flex flex-col mb-4">
      <p className="text-xs text-gray-500">{title}</p>
      <input
        type="text"
        className="text-sm"
        value={value}
        onChange={changeValue}
      />
      <input
        type="range"
        min="0"
        max={maxValue}
        onChange={changeValue}
        value={value}
        className="w-full h-1 mt-2 bg-light-green rounded-full appearance-none cursor-pointer range"/>
    </div>
  );
};

export default Range;
