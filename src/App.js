import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, isValid] = useState(false);
  const handlerFirstName = (e) => {
    setInputData({ ...inputData, firstName: e.target.value });
  };

  const handlerLastName = (e) => {
    setInputData({ ...inputData, lastName: e.target.value });
  };

  const handlerEmail = (e) => {
    setInputData({ ...inputData, email: e.target.value });
    console.log(inputData);
  };

  const handleEvent = (e) => {
    e.preventDefault();
    if (inputData.firstName && inputData.lastName && inputData.email) {
      isValid(true);
    }
    setSubmitted(true);
  };
  const clear = () => {
    setInputData({ firstName: "", lastName: "", email: "" });
    isValid(false);
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleEvent}>
        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
        <input value={inputData.firstName} onChange={handlerFirstName} id="first-name" className="form-field" type="text" placeholder="First Name" name="firstName" />
        {submitted && !inputData.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input value={inputData.lastName} onChange={handlerLastName} id="last-name" className="form-field" type="text" placeholder="Last Name" name="lastName" />
        {submitted && !inputData.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input value={inputData.email} onChange={handlerEmail} id="email" className="form-field" type="text" placeholder="Email" name="email" />
        {submitted && !inputData.email ? <span id="email-error">Please enter an email address</span> : null}

        <button className="form-field" type="submit">
          Register
        </button>
        <button className="form-field" type="clear" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
}
