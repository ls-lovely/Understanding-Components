import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredamount:'',
  //     enteredDate:''

  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      description: enteredDescription,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredDescription('');
    setEnteredDate('');
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"
           value={enteredTitle}
           onChange={titleChangeHandler}
           />
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="close">Cancel</button>
        <button type="submit">Add New Note</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
