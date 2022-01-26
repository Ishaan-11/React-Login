import React from "react";

type InputType = {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
};

const Input: React.FC<InputType> = (props) => {
  return <input type={props.type} placeholder={props.placeholder} />;
};

export default Input;
