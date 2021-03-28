import { useRef } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em .5em;
`;

const ExpenseInput = styled.input`
  max-width: 15em;
  padding: 4px 7px;
`;

export default function Expense({
  expenseName, expenseType
}) {
  return (
    <Container>
      <label>{expenseName}</label>
      <span>
        <ExpenseInput
          placeholder={expenseName}
          maxW="15em"
          padding="4px 7px"
        />
      </span>
    </Container>
  )
}
