//jshint esversion:6

const express = require("express");

const app = express();

app.use("/userz", require("./routes/usersRoute"));

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(express.static("public"));


app.listen(3001, function () {
    console.log("Server started on port 3001");
});