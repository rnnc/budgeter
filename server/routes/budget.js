const router = require("express").Router();
const Budget = require("../api/budget");
const { log } = require("../utils");


router.get('/getall:user_id', async (req, res) => {

  const { user_id } = req.query;

  try {
    const req_budgets = await Budget.getBudget(user_id);
    res.json(req_budgets);
  } catch (error) {
    log(" [*] Budget Retreival Error");
    res.status(400);
    next(error);
  }
});

router.post('/get/', async (req, res, next) => {

  const { user_id, budget_id } = req.query;
  
  try {
    const req_budget = await Budget.getBudget(user_id, req.params.budget_id);
    res.json(req_budget);
  } catch (error) {
    log(" [*] Budget Retrieval Error");
    res.status(400);
    next(error);
  }
});

router.post('/add', async (req, res, next) => {

  const { user_id, BudgetName, TotalIncome } = req.body;

  try {
    const new_budget = await Budget.newBudget(user_id, BudgetName, TotalIncome);
    res.json(new_budget);
  } catch (error) {
    log(" [*] New Budget Creation Error");
    res.status(400);
    next(error);
  }
})

router.delete('/remove:budget_id', async (req, res, next) => {

  const { budget_id } = req.query;

  try {
    const deleted_budget = await Budget.deleteBudget(budget_id);
    console.log(deleted_budget);
    res.json(deleted_budget);
  } catch (error) {
    log(" [*] Budgete Removal Error");
    res.status(400);
    next(error);
  }

})

module.exports = router;