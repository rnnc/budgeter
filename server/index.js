const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { logError } = require('./middleware');

const path = require('path');

const { seperator } = require('./utils');

//environment variables
require('dotenv').config();

const app = express();

const { MONGO_URI, SERVER_PORT, NODE_ENV } = process.env;

console.clear();
const now = new Date();
console.log("   " + now.toLocaleString());
console.log("\n\tSERVER STARTED\n");

console.log(MONGO_URI)

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  })
  .then((promise) => {
    console.log("MONGODB connected");
    seperator();
  })
  .catch((error) => {
    console.log("\nError,\n\t", error)
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes'));

app.use(logError);

/* app.use(passport.initialize());
require('./passport')(passport); */

// For Dev Use
if (NODE_ENV !== "production") {
  console.log("\n\t $ DEV ENV\n");
  app.use(require('cors')())
}

// For Production Only
if (NODE_ENV == "production") {
  console.log("\n\t $ PROD ENV\n");
  // deploying built front end
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    // directory pathing might be wrong here
    res.sendFile(path.resolve(
      __dirname, 'client', 'build', 'index.html'
    ));
  });
}

const PORT = SERVER_PORT || 5000;
app.listen(PORT, () => {
  seperator();
  console.log("Server Running @ PORT", PORT);
});
