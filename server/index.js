const express = require('express');
let app = express();
const { db } = require('../database');
const { saveRepos } = require('../database')
const { Repo } = require('../database')
var helper = require('../helpers/github.js');
const bodyParser = require('body-parser');
const axios = require('axios');


app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

// app.post('/repos', function (req, res) {
//   const { user } = req.body.params;
//   console.log(user)
//   helper.getReposByUsername(user, (err, repos) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(repos);
//     }
//   });

//   // TODO - your code here!
//   // This route should take the github username provided
//   // and get the repo information from the github API, then
//   // save the repo information in the database
// });

//  ------- promises -----------
app.post('/repos', function (req, res) {
  const { user } = req.body.params;
  console.log(user)
  // axios.get(`https://api.github.com/users/${user}/repos`)
  //   .then(repos => res.send(repos))
  //   .catch(error => console.log(error))

  helper.getReposByUsername(user)
    .then(response => {
      saveRepos(response.data)
      console.log('Saved to database?')
      res.status(200).send()
      // res.send(response.data)
    })
    .catch(error => {
      console.log(error)
    })

})



app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  Repo.find({}, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('something went wrong...')
    } else {
      // console.log(results)
      res.status(200).send(results)
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

