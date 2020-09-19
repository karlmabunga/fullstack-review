const axios = require('axios');
const config = require('../config.js');

// ------- returns a promise ------------
let getReposByUsername = (searchUser) => {

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${searchUser}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios(options)

    // TODO - Use the axios module to request repos for a specific
    // user from the github API
    // axios.get(options.url, options.headers)
      // .then(repos => callback(null, repos))
      // .catch(err => console.log(err))

}

// ----------- utilize callback in server ------------
// let getReposByUsername = (searchUser, callback) => {

//   let options = {
//     url: `https://api.github.com/users/${searchUser}/repos`,
//     headers: {
//       'User-Agent': 'request',
//       'Authorization': `token ${config.TOKEN}`
//     }
//   };

//   axios(options)
//     .then(repos => callback(null, repos))
//     .catch(err => callback(err))


//     // axios.get(options.url, options.headers)
//       // .then(repos => callback(null, repos))
//       // .catch(err => console.log(err))

// }


module.exports.getReposByUsername = getReposByUsername;