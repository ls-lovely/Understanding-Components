import React, { useState } from 'react';
import ExpensesItem from './ExpensesItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
   let expensesContent = <p>No Expenses Found</p>;
   if (filteredExpenses.length>0) {
     expensesContent=filteredExpenses.map((expense) => (
      <ExpensesItem
        key={expense.id}
        title={expense.title}
       description={expense.description}
        date={expense.date}
      />
    ))
   }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;