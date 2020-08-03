var express = require('express');
var router = express.Router();
const candidateSchema = require("../model/candidate");


router.get('/', function (request, response) {
  candidateSchema
    .find({})
    .sort({votes:'descending'})
    .then(res => {
      if (res) {
        console.log(res)
        response.send(res).status(200);
      } else {
        response.send("Error in getting candidates").statusCode(500);
      }
    }).catch(err => response.send("Error in getting candidates").statusCode(500));
});

router.get('/:id', (request, response) => {
  candidateSchema
    .findById(request.params.id)
    .then(res => {
      if (res) {
        response.send(res).statusCode(200);
      } else {
        response.send("Error in getting candidates").statusCode(500);
      }
    }).catch(err => response.send("Error in getting candidate").statusCode(500));
})

router.post('/', (request, response) => {
  console.log(request.body)
  candidateSchema
    .create(request.body)
    .then(res => {
      if (res) {
        console.log(res)
        response.status(200).send(JSON.stringify(res))
      } else {
        response.send("Error in saving candidate").status(500);
      }
    }).catch(err => {
      console.log(err)
      response.send("Error in saving candidates").status(500)
    });
})

router.delete('/:id', (request, response) => {
  candidateSchema
    .findByIdAndRemove(request.params.id)
    .then(res => {
      if (res) {
        response.send(res).statusCode(200);
      } else {
        response.send("Error in deleting candidate").statusCode(500);
      }
    }).catch(err => response.send("Error in deleting candidate").statusCode(500));
})

router.put('/:id', (request, response) => {
  candidateSchema
    .findByIdAndUpdate({ _id: request.params.id }, { $set: request.body }, { new: true })
    .then(res => {
      if (res) {
        response.send(res).statusCode(200);
      }
      else {
        response.send("Error in updating candidate").statusCode(500);
      }
    }).catch(err=>response.send("Error in updating candidate").statusCode(500));
})

module.exports = router;
