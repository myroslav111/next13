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

  const fooMult = (a: number, b: number): number => {
    const sum = a * b;
    return sum;
  };
  return (
    <div>
      <h1>Form</h1>
      <form>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="radio" />
        </label>
        <label htmlFor="">
          <input type="checkbox" />
        </label>
      </form>
    </div>
  );
};

export default Form;
