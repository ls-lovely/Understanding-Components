import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesItem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      ></ExpensesItem>
      <ExpensesItem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      ></ExpensesItem>
      <ExpensesItem
        title={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      ></ExpensesItem>
      <ExpensesItem
        title={props.items[3].title}
        price={props.items[3].price}
        date={props.items[3].date}
      ></ExpensesItem>
    </Card>
  );
}
export default Expenses;
