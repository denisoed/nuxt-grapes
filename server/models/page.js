const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  html: { type: String, default: '' },
  css: { type: String, default: '' },
});

module.exports = mongoose.model('Page', PageSchema);
