const express =require("express");
const app=express();
var bodyParser = require('body-parser')
var cors = require('cors')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())
require("./router/index")(app);



app.listen(3001,()=>{
 console.log("Port : 3001");   
})
