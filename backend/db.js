const mongoose = require("mongoose");
const mongoURI = "mongodb://0.0.0.0:27017/inotebook";//replace localhost with 0.0.0.0

const connectToMongo = () =>{
    mongoose.connect(mongoURI,)
    .then(()=>{
        console.log("connected successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectToMongo;