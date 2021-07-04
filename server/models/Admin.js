const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    require: true
  }
})

module.exports = mongoose.model('admin', AdminSchema);