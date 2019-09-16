import { useState } from "react";

interface Values {
  [key:string]: string;
}

export const useUserfrom = (init: any) => {
  const [inputs, setInputs] = useState(init);
  // const handleSubmit = event => {
  //   if (event) {
  //     event.preventDefault();
  //     //callback();
  //   }
  // };
  const handleInputChange = (event: any) => {
    event.persist();
    setInputs((inputs: any) => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
    console.log("input", inputs);
  };
  return {
    //handleSubmit,
    handleInputChange,
    inputs
  };
};