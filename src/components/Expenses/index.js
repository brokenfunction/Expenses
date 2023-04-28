import React, { useState } from "react";
import ExpensesList from "../ExpensesList";
import ExpensesFilter from "../ExpensesFilter";
import Card from "../Card";
import ExpensesChart from "../ExpensesChart";
import './index.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;