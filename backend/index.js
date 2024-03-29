const connectToMongo = require("./db");
const express = require("express");
connectToMongo();
const app = express();
const port = 5000;// not 3000 because our react app will be rendered on that port
// Available Routes
//  app.get("/", (req, res) => {
//    res.send("Hello World!");
//  });

app.use(express.json())// middle-ware used to get the json body content rather than undefined value

app.use('/api/auth',require('./routes/auth'))
app.use("/api/notes", require("./routes/notes"));


 app.listen(port, () => {
   console.log(`Example app listening on port http://localhost:${port}`);
 });