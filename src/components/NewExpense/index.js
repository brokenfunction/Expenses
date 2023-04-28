import React, { useState } from "react";

import './index.css';
import ExpenseForm from "../ExpenseForm";

const NewExpense = (props) => {
    const [addExpense, setAddExpense] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setAddExpense(false);
    }
    const onAddExpenseButtonClickHandler = () => {
        setAddExpense(true);
    }
    const onCancelButtonClickHandler = () => {
        setAddExpense(false);
    }
    return (
        <div className='new-expense'>
            {addExpense ?
                <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancelButtonClick={onCancelButtonClickHandler}
            /> : <button onClick={onAddExpenseButtonClickHandler}>Add Expense</button>}
        </div>
    );
};

export default NewExpense;