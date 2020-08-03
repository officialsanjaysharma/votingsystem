//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var candidateModelSchema = new Schema({
  name: String,
  challengesSolved: Number,
  candidateExpertiseLevel: Number,
  expertIn: [{
    value: String,
    rating: String
  }],
  votes: Number,
  hasVoted: Boolean,
  ip: { type: String, unique: true, index: true },
});
const candidateModel = mongoose.model('Candidate', candidateModelSchema);
module.exports = candidateModel;