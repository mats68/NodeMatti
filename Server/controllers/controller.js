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
  

  

    // collection.insert({ name: 'taco', tasty: true }, function (err, result) {
    //   collection.find({ name: 'taco' }).toArray(function (err, docs) {
    //     console.log(docs[0])
    //     db.close()
    //   })
    // })
  

}