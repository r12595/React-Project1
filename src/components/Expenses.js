import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseFilter.css'
import './Expenses.css'

const Expenses = (props) => {
  const expenseFilterData = (value) =>{
    console.log('expenseFilterData clicked',value );
  }
    
      return (
        <div>
        
        <Card className="expenses">
        <ExpenseFilter expenseFilteredValue={expenseFilterData} />
          {/* <h2>Let's get started!</h2> */}
          <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
          <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
          <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
          <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
        </Card>
        </div>
      );
}

export default Expenses;