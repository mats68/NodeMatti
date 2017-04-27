const db = require('./../db')
var mongodb = require('mongodb')


exports.queryData = function (req, res, next) {
  const coll = db.get().collection(req.params.collection)
  coll.find().toArray((err, result) => res.send(result))
}

exports.insertData = function (req, res, next) {
  const coll = db.get().collection(req.params.collection)
  coll.insert(req.body, (err, result) => {
    if (err) { return res.send(err) }
    res.send(result)
  })
}

exports.updateData = function (req, res, next) {
  let data = req.body
  delete data._id
  console.log('update', data)
  const coll = db.get().collection(req.params.collection)
  coll.update({_id: new mongodb.ObjectID(req.params.id)},{$set:data},function (err, count, ok) {
     if (err) { return res.send(err) }
     //console.log('count',count)
     //console.log('ok',ok)
     res.send(req.body)
    
  })
}

exports.deleteData = function (req, res, next) {
  console.log('hello', req.params.id)
  const coll = db.get().collection(req.params.collection)
  //coll.find({ _id: new mongodb.ObjectID(req.params.id) }).toArray((err, result) => console.log(result[0]))
  coll.findOne({ _id: new mongodb.ObjectID(req.params.id) }, function (err, result) {
    if (result) {
      coll.remove({ _id: new mongodb.ObjectID(req.params.id) }, function (err, result) {
        if (err) { return res.send(err) }
        res.send('delete ok')
      })  
    }
    //console.log(result)
  })
  
  
  /*
  coll.remove({ _id: new ObjectID(req.params.id) }, function (err, result) {
    if (err)
      console.log('err)
    console.log(result)
  })
  */
}
