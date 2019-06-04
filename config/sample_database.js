import mongoose from "mongoose";

mongoose.connect(
  // The below line is from https://cloud.mongodb.com, retrieve user credentials from there (cloud based database API).
  "mongodb+srv://<dbusername>:<dbuserpassword>@cluster0-q7fqn.gcp.mongodb.net/test?retryWrites=true&w=majority",
    { 
      useNewUrlParser: true
    }
  );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to MongoDB database")
});

module.exports = db;