
const axios = require('axios');

export function getDetails(id, cb){
    axios.get(`http://localhost:3000/items/` + id)
    .then(function (res) {
        cb(null, res.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        cb(error, null);
    })
}

export function getContentFromApi(cb){
  console.log("Getting Content From API...");
  axios.get(`http://localhost:3000/items/`)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

