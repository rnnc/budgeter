import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addExpense, getExpenses } from '../../store/expenseSlice';

import { Button, Input, IconButton } from '../styles/common';

import { CloseO, Pencil, Comment } from '@styled-icons/evil';

import { ExpenseContainer, ExpenseViewCont }
  from '../styles/components/ExpenseStyles';


import sample_data from '../../sample_data';

export default function ExpenseApp() {

  const dispatch = useDispatch();

  const [in_ex_name, setExName] = useState('');
  const [in_ex_value, setExValue] = useState('');
  const [in_ex_desc, setExDesc] = useState('');

  const expenses_reducer = useSelector((state => state.expenses));
  const expenses = expenses_reducer.expenses;

  useEffect(() => {
    // temp, add backend requests
    // have to use user authentication
    dispatch(addExpense(sample_data()))
  }, []);

  function submitNewExpense(e) {
    e.preventDefault();
    // confirm dialogue
    dispatch(addExpense({
      id: expenses.length + 1,
      name: in_ex_name,
      amount: in_ex_value,
      description: in_ex_descrip,

    }))
  }

  return (
    <>
      <ExpenseContainer>
        <label> Total Budget </label>

        { // only view top 10 of sample data
          ExpenseView(expenses.slice(0, 10))
          // remove later when connected to backend
        }

        <div style={{ padding: "5px" }}>
          <span style={{ padding: "0 5px" }}>
            <Input
              placeholder="expense value"
              value={in_ex_value}
              onChange={e => setExValue(e.target.value)}
            />
          </span>
          <span style={{ padding: "0 5px" }}>
            <Input
              placeholder="expense name"
              value={in_ex_name}
              onChange={e => setExName(e.target.value)}
            />
          </span>
          <span>
            <input
              type="textarea" placeholder="description"
              value={in_ex_desc}
              onChange={e => setExDesc(e.target.value)}
            />
          </span>
          <span style={{ padding: "0 5px" }}>
            <Button onClick={submitNewExpense}>
              Add Expense
            </Button>
          </span >
        </div>

      </ExpenseContainer>
    </>
  )
}


function ExpenseView(expenses) {

  const [editExpense, toggleEditExpense] = useState(false);
  const [showDescription, toggleDescription] = useState([false, 0]);

  function buttonClick(e, type, expense_id) {
    e.preventDefault();
    if (type == 'edit') {
      toggleEditExpense(editExpense => !editExpense);
      toggleDescription(showDescription =>
        (editExpense) ? [false, 0] : [true, expense_id]
      );
    }
    if (type == 'descrip') {
      toggleDescription(showDescription =>
        showDescription[0] ? [false, 0] : [true, expense_id]
      );
    }
    if (type == 'delete') {
      if (window.confirm("You sure?"))
        alert("NOT ALLOWED");

    }
    if (type == 'save') {
      toggleEditExpense(false);
      toggleDescription(false);
    }
  }

  return (

    <ExpenseViewCont>
      {expenses.map((ex) => {

        const expense_out = editExpense
          ?
          <>
            <div> <Input placeholder={ex.name} /></div>
            <div> <Input placeholder={ex.amount} /></div>
          </>
          :
          <>
            <div> {ex.name} </div>
            <div> {ex.amount} </div>
          </>;

        return (
          <>
            <li key={ex.id}>

              {expense_out}

              <div className="buttons">
                <span>
                  <IconButton
                    onClick={(e) => buttonClick(e, "edit", ex.id)}>
                    <Pencil />
                  </IconButton>
                </span>
                <span>
                  <IconButton type="descrip"
                    onClick={(e) => buttonClick(e, "descrip", ex.id)}>
                    <Comment />
                  </IconButton>
                </span>
                <span>
                  <IconButton type="delete"
                    onClick={(e) => buttonClick(e, "delete", ex.id)}>
                    <CloseO />
                  </IconButton>
                </span>
              </div>

            </li>

            <div
              className={`descrip ${(!showDescription[0]) ? "hide" : ""}`}
              hidden={!(showDescription[0] && (showDescription[1] === ex.id))}
            >
              DESCRIPTION
            </div>


          </>
        )
      })}
    </ExpenseViewCont>
  )
}

function ExpenseInputMenu() {

}