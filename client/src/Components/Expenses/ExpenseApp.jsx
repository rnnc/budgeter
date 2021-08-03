import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addExpense, getExpenses } from '../../store/expenseSlice';

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenses);
    console.log('dispatched');
  })

  const expenses = useSelector((state => state.expenses.expenses));
  console.log(expenses);
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


function expenseView(expenses) {
  return (
    <div>
      {expenses.map((ex) => (
        <span key={ex.id}>{ex.title}</span>
      ))}
    </div>
  )
}