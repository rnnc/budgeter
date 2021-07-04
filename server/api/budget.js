const Budget = require('../models/Budget');
const Expense = require('../models/Expense');
const User = require('../models/User');

module.exports.getBudget = async (user_id, budget_id = null) => {
  const user_budgets = (await User.findOne({ _id: user_id }).populate('budget').exec()).Budgets

  if (!budget_id)
    return user_budgets;

  const req_budget = await Budget.findById(budget_id);

  if (req_budget[0].user._id === user_id)
    return req_budget[0];

  throw "User isn't authorized to access";
}

module.exports.newBudget = async (user_id,
  { BudgetName, TotalIncome, Expenses }) => {

  const new_budget = await (new Budget({
    User: user_id, BudgetName, TotalIncome, Expenses
  }).save());

  const up_user = await User.findByIdAndUpdate(user_id, {
    $addToSet: { Budgets: new_budget._id }
  }, { new: true },
  );

  if (new_budget)
    return new_budget;

  throw "Error adding new budget";
}

module.exports.deleteBudget = async (budget_id) => {
  return await Budget.findByIdAndDelete(budget_id);
}

/* module.exports.modifyBudget = async (budget_id, budget) => {
  return await Budget.findByIdAndUpdate(budget_id, budget, { new: true })
} */

module.exports.addExpense = async (budget_id, expense) => {

  const new_expense = await ((new Expense(expense)).save());

  await Budget.findOneAndUpdate({ _id: budget_id },
    { $addToSet: { Expenses: new_expense } }, { new: true });

  return new_expense;
}

module.exports.updateExpense = async (budget_id, expense) => {

  const { _id, ...expense_update } = expense;

  return await Expense.findByIdAndUpdate(_id, expense_update, { new: true });
}

module.exports.removeExpense = async (budget_id, expense_id) => {

  const up_budget = await (Budget.findOneAndUpdate({ _id: budget_id },
    { $pull: { Expenses: expense_id } }, { new: true }
  ))

  return up_budget;
}