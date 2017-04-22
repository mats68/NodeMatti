var MongoClient = require('mongodb').MongoClient
const db = require('./../db')


/*exports.helloworld = function (req, res, next) {
  res.status(200).json({
    message: "Hello world!"
  })
}
*/

exports.insertData = function (req, res, next) {
  const coll = db.get().collection('foods')

  coll.insert({ name: 'tubel', tasty: true })  
  

    // collection.insert({ name: 'taco', tasty: true }, function (err, result) {
    //   collection.find({ name: 'taco' }).toArray(function (err, docs) {
    //     console.log(docs[0])
    //     db.close()
    //   })
    // })
  

}