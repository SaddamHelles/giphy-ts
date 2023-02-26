import React, { useState } from "react";

const useForm = <T,>(initValue: T) => {
  const [values, setValues] = useState(initValue);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { values, handleChange };
};

export default useForm;
