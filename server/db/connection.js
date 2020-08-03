var mongoose = require('mongoose');
var MONGO_PATH = "localhost";
var MONGODB_DATABASE = "candidates";
var MONGO_USER = "";
var MONGO_PASSWORD = "";

const connectToTheDatabase = () => {
  mongoose.connect(`mongodb://${MONGO_PATH}/${MONGODB_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology:true
    // Uncomment this if you have user and password in mongodb
    // auth: {
    //   user: MONGO_USER || '',
    //   password: MONGO_PASSWORD || ''
    // }
  }).then(res => {
    console.log("Connected To Db");
  }).catch(err => console.log('Error connecting: ', err))
}
require("../model/candidate");
module.exports = connectToTheDatabase;