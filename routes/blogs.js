var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient

router.post('/savepost',function(req,res,next)
{
  console.log('sdfjksdkjfsdkfnksd.sdfsdf',req.body)   
  MongoClient.connect('mongodb://localhost:27017/blogitdb',{ useUnifiedTopology: true }, function (err, client) {
    if (err) throw err
     
    var db = client.db('blogitdb')


    db.collection('users').insertOne(req.body.data, function(err, result){
      if(err) throw err;
      console.log("1 Document Inserted");

    })

    // db.collection('users').find().toArray(function (err, result) {
    //   if (err) throw err
    //   console.log(result)
    // })
  })
  res.send("Hit Occured")
});

router.get("/getuser/:userId/:newid",function(req,res,next)
{
    console.log('this.reqparam->',req.params.newid)
   res.send(req.params.newid);
  // console.log();
});

module.exports = router;
