const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  "id": Number,
  "full_name": String,
  "owner": {
    url: String,
    login: String
  },
  "created_at": String,
  "size": Number,
  "forks": Number,
  "watchers": Number,
  "has_issues": Boolean,
  "open_issues": Number
});

let Repo = mongoose.model('Repo', repoSchema);

let saveRepos = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // for (const repo of repos) {
  //   var newRepo = new Repo();
  //   newRepo.id = repo.id;
  //   newRepo.full_name = repo.full_name;
  //   newRepo.owner = repo.owner;
  //   newRepo.created_at = repo.created_at;
  //   newRepo.size = repo.size;
  //   newRepo.forks = repo.forks;
  //   newRepo.watchers = repo.watchers;
  //   newRepo.has_issues = repo.has_issues;
  //   newRepo.open_issues = repo.has_issues;
  //   newRepo.save();
  // }
  for (const repo of repos) {
    var newRepo = new Repo(repo);
    newRepo.save((err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log('This is the data: ', data)
      }
    });
  }

}

// module.exports.saveRepos = saveRepos;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected to mongoose')
});

module.exports = {
  db,
  saveRepos,
  Repo
};