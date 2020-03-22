import React, { useState } from 'react';

const useSignUpForm = (callback, defaultDOW) => {
  const [inputs, setInputs] = useState({
    content: '',
    time: 0,
    dow: defaultDOW
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof callback === "function") callback(inputs.dow, {content: inputs.content, time: parseInt(inputs.time)});
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default (props) => {
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(props.createTask, props.day);
  return <form className="create-task" onSubmit={handleSubmit}>
      <div>
        <label>Task name</label>
        <input type="text" name="content" required onChange={handleInputChange} value={inputs.content} />
      </div>
      <div>
        <label>Estimated time</label>
        <input type="number" name="time" required onChange={handleInputChange} value={inputs.time} />
      </div>
      <div>
        <label>Day of week</label>
        <select name="dow" value={inputs.dow} onChange={handleInputChange}>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>
      <button type="submit">Add</button>
  </form>
}