import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://jb0:H9VKk9AzH9OgIxQt8YbPgThvNnPDHWR1Pmn@cluster0-q7fqn.gcp.mongodb.net/test?retryWrites=true&w=majority",
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
