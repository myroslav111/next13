import React from "react";

const Form = () => {
  const foo = (a: number, b: number): number => {
    const sum: number = a + b;
    return sum;
  };

  const fooMinus = (a: number, b: number): number => {
    const sum = a - b;
    return sum;
  };
  return <div>Form</div>;
};

export default Form;
