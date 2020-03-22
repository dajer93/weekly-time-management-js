import React, { useState } from "react";
import "./create-task.scss";

let contentInput = null;

const useSignUpForm = (callback, defaultDOW) => {
  const defaultState = {
    content: "",
    time: "",
    dow: defaultDOW
  };
  const [inputs, setInputs] = useState(defaultState);
  const handleSubmit = event => {
    event.preventDefault();
    if (typeof callback === "function")
      callback(inputs.dow, {
        content: inputs.content,
        time: parseInt(inputs.time)
      });
    setInputs(inputs => (defaultState));
    contentInput.focus();
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default props => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    props.createTask,
    props.day
  );
  return (
    <form className="create-task" onSubmit={handleSubmit}>
      <input
        type="text"
        name="time"
        placeHolder="2"
        required
        onChange={handleInputChange}
        value={inputs.time}
        ref={input => {
          contentInput = input;
        }}
      />
      <input
        type="text"
        name="content"
        placeHolder="Workout"
        required
        onChange={handleInputChange}
        value={inputs.content}
      />
      <button type="submit">Add</button>
    </form>
  );
};
