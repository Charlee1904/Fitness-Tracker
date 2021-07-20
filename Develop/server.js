const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require('morgan');
// const seed = require('./seeders/seed');

const PORT = process.env.PORT || 3000;
// const Workout = require("./models/workout")  ;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});