const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  name: { type: String },
  amount: { type: Number },
  recurring: {
    is_recurring: {
      type: Boolean, default: false
    },
    length: {
      type: Number, default: 1
    },
    unit: {
      type: String,
      enum: ['DAY, WEEK, MONTH, YEAR'],
      default: 'WEEK'
    }
  },
  type: {
    type: String,
    enum: ['BILL', 'LOAN', 'OTE'],
    default: 'OTE'
    // OTE = One Time Expense
  }
});

module.exports = mongoose.model('expense', ExpenseSchema);