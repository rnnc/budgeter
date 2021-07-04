const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String, required: true,
    index: true, unique: true
  },
  password: {
    type: String, required: true
  },
  email: {
    type: String
  },
  joined: {
    type: Date, default: Date.now
  },
  Budgets: {
    type: [Schema.Types.ObjectId],
    ref: 'budget'
  }
});

module.exports = mongoose.model('user', UserSchema);
