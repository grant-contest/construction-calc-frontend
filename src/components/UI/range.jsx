import React, {useState} from 'react';

const Range = (props) => {
  let [value, setValue] = useState(0);

  const isDigitsOnly = (value) => {
    return /^\d+$/.test(value);
  }

  const changeValue = (event) => {
    console.log(event.target.value)
    const input = event.target;

    switch (input.type) {
      case "text":
        if (isDigitsOnly(input.value) && input.value <= props.maxValue) { // если в value число и оно меньше maxValue
          setValue(input.value.replace(/^0+/, ""));
        } else if (isDigitsOnly(input.value) && input.value > props.maxValue) {  // если в value число и оно больше maxValue
          setValue(props.maxValue);
        } else if (input.value === "") {  // если в value пусто
          setValue(0);
        }
        break;

      case "range":
        setValue(input.value);
        break;

      default:
        break;
    }
  }

  return (
    <div className="border border-gray-300 rounded-xl w-full px-4 pt-2 flex flex-col mb-4">
      <p className="text-xs text-gray-500">{props.title}</p>
      <input
        type="text"
        className="text-sm"
        value={value}
        onChange={changeValue}
      />
      <input
        type="range"
        min="0"
        max={props.maxValue}
        onChange={changeValue}
        value={value}
        className="w-full h-1 mt-2 bg-light-green rounded-full appearance-none cursor-pointer range"/>
    </div>
  );
};

export default Range;
