import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpensesFilter";
import Card from "../Card";
import './index.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
            {props.items.map((item, index) => (
                <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    key={item.id}
                />
            ))}
        </Card>
    );
}

export default Expenses;