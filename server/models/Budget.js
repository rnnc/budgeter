const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  BudgetName: {
    type: String, required: true, index: true, unique: true
  },
  TotalIncome: { type: Number },
  Expenses: {
    type: Schema.Types.ObjectId,
    ref: 'expenses'
  }
}, {
  collation: { locale: "en", strength: 2 },
  timestamps: true
});

module.exports = mongoose.model('budget', BudgetSchema);