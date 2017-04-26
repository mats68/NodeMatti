const db = require('./../db')



exports.insertData = function (req, res, next) {
  const coll = db.get().collection(req.params.collection)

  coll.insert(req.body, (err, result) => {
    res.send(result)
  })  
}

exports.queryData = function (req, res, next) {
  const coll = db.get().collection(req.params.collection)
  coll.find().toArray((err,result) => res.send(result))
}