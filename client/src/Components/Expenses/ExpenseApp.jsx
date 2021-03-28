import { useState } from 'react';
import styled from 'styled-components';

import { Button, Input } from '../styles/common';

import ExpenseMenu from './ExpenseMenu';

const Title = styled.h2`
  font-weight: bold;
`;

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  border: 1px solid black;
`;

export default function ExpenseApp() {
  const [expenses, setExpense] = useState([]);

  function addNewExpense(amount, name, type, data) {
    const expense = { amount, name, type, data };
    setExpense(expenses.push(expense))
  }

  return (
    <ExpenseContainer>

      <label> Total Budget </label>

      <span style={{ padding: "0 1em" }}>
        <Input
          placeholder="income"
        />
        <Input
          placeholder="expense name"
        />
        <Button> Add Expense </Button>
      </span>

      {expenseView(expenses)}

    </ExpenseContainer>
  )
}

function expenseSelector() {
  let isSelected;
  return (
    <select>
      <option value="">SELECT CURRENCY</option>
      <option value="CAD">CAD</option>
      <option value="USD">USD</option>
    </select>
  )
}

function expenseView(expenses) {
  return (
    <div>
      {expenses.map((ex) => (
        <span>{ex.name}</span>
      ))}
    </div>
  )
}