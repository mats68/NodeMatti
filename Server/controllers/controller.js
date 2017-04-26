const db = require('./../db')



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
  const coll = db.get().collection(req.params.collection)
  coll.findOne(req.params.id, (err, result) => {
    if (err) { return res.send(err) }
    console.log(result)
    res.send(result)
  })
}

exports.deleteData = function (req, res, next) {
}
