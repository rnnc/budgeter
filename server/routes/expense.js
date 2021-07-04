const router = require('express').Router();
const Expense = require('../models/Expense');
const budget = require('../api/budget');

router.post('/add', async (req, res, next) => {
  const { budget_id, expense } = req.body;

  try {
    const new_expense = await budget.addExpense(budget_id, expense);
    console.log(new_expense);
    res.json(new_expense);
  } catch (error) {
    log(" [*] Expense Add Error");
    res.status(400);
    next(error);
  }
});

router.delete('/remove', async (req, res, next) => {
  const { budget_id, expense } = req.body;

  try {
    const deleted_expense = await budget.removeExpense(budget_id, expense);
    console.log(deleted_expense);
    res.json(deleted_expense);
  } catch (error) {
    log(" [*] Expense Removal Error");
    res.status(400);
    next(error);
  }
});

module.exports = router;