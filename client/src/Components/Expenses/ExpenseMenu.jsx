import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em 0.5em;
`;

const ExpenseInput = styled.input`
  max-width: 15em;
  padding: 4px 7px;
`;

export default function ExpenseMenu({ expenseName, expenseMenu }) {
  return (
    <div>
      <Container>
        <label>{expenseName}</label>
        <span>
          <ExpenseInput
            placeholder={expenseName}
          />
        </span>
      </Container>
    </div>
  )
}