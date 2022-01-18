import { useState } from "react";

import styles from "./Form.module.css";

import Button from "../UI/Button";

const Form = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!e.target[0].value || !e.target[1].value) {
      props.errorHandler(e);
      return;
    }
    const newUserData = {
      id: Math.random(),
      name: e.target[0].value,
      age: e.target[1].value,
    };
    props.newUserHandler(newUserData);
    setNameInput("");
    setAgeInput(0);
  };

  const updateNameInput = (e) => setNameInput(e.target.value);
  const updateAgeInput = (e) => setAgeInput(e.target.value);

  return (
    <form className={styles.form} action="submit" onSubmit={submitHandler}>
      <div className={styles["form__field-group"]}>
        <label>Name</label>
        <input type="text" value={nameInput} onChange={updateNameInput}></input>
      </div>
      <div className={styles["form__field-group"]}>
        <label>Age (Years)</label>
        <input
          type="number"
          min="0"
          value={ageInput}
          onChange={updateAgeInput}
        ></input>
      </div>
      <Button text="Add User" />
    </form>
  );
};

export default Form;
