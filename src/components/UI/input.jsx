import React, {useState} from 'react';

const Input = ({placeholder, onChange}) => {
  let [value, setValue] = useState("");

  const isDigitsOnly = (value) => {
    return /^\d+$/.test(value);
  }

  const changeBudget = (event) => {
    const value = event.target.value;

    if (isDigitsOnly(value) || value === "") {
      setValue(value.replace(/^0+/, ""));
      onChange(value.replace(/^0+/, ""));
    }
  }

  return (
    <input
      type="text"
      className="text-sm border border-gray-300 rounded-xl
              px-4 py-3 mb-4 w-5/12
              active:border-light-green"
      placeholder={placeholder}
      value={value}
      onChange={changeBudget}
    />
  );
};

export default Input;
