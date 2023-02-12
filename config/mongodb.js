const mongoose= require('mongoose');

let connectMongo=function () {
 
  mongoose.pluralize(null);
  return new Promise((resolve, reject) => mongoose.connect(process.env.DB_CONNECTION_STRING,
    {useNewUrlParser: true, useUnifiedTopology: true })
    .then(yes => {
      //console.log("yes--->>",yes);
      resolve('conneted mongo', yes)})
    .catch(err => {
      console.log("err--->>",err);
      reject('not connected', err)}));
}

let getObjectID= function (ID) {
  return mongoose.Types.ObjectId(ID);
}

module.exports ={connectMongo,getObjectID}