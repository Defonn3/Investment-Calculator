import { useState } from "react";
import classes from './Form.module.css';

const inputState = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
const Form = (props) => {
  const [input, setInput] = useState(inputState);

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(inputState);
  };

  const reserHandler = () => {
    setInput(inputState);
  };

  const changeHandler = (input, value) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            value={input["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
            value={input["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
            value={input["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => changeHandler("duration", event.target.value)}
            value={input["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={reserHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
