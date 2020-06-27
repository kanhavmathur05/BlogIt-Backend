var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient

router.post('/savepost',function(req,res,next)
{
  console.log('sdfjksdkjfsdkfnksd.sdfsdf',req.body)   
  var x;     
  MongoClient.connect('mongodb://localhost:27017/blogitdb',{ useUnifiedTopology: true }, function (err, client) {
    if (err) throw err
     
    var db = client.db('blogitdb')


    db.collection('users').find().toArray(function (err, result) {
      if (err) throw err
      console.log(result)
    })
    // db.collection('users').insertOne(req.body, function(err,result){
    //   if (err) throw err
    //   console.log(err)
    // })
  })
  res.send(this.x)
});

module.exports = router;
