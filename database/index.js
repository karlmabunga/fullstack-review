const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  "id": Number,
  "full_name": String,
  "owner": String,
  "created_at": String,
  "size": Number,
  "url": String,
  "forks": Number,
  "watchers": Number,
  "has_issues": Boolean,
  "open_issues": Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;