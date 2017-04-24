const db = require('./../db')


/*exports.helloworld = function (req, res, next) {
  res.status(200).json({
    message: "Hello world!"
  })
}
*/

exports.insertData = function (req, res, next) {
  const coll = db.get().collection(req.params.collection)

  coll.insert({ name: 'tubel', tasty: true }, (err, result) => {
    res.send(result)
  })  
}

exports.queryData = function (req, res, next) {
  const coll = db.get().collection(req.params.collection)
  console.log(coll)

  coll.find({}, (err, result) => {
    res.send(result)
  })  
}