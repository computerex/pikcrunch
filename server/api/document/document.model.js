'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var DocumentSchema = new mongoose.Schema({
  created: Date,
  userid: mongoose.Schema.Types.ObjectId,
  text: String
});

export default mongoose.model('Document', DocumentSchema);
