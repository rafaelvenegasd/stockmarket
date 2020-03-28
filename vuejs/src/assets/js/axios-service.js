
const axios = require('axios');

export function getDetails(id, cb){
    axios.get(`http://assembler-stock-market-webapi.herokuapp.com/api/actions` + id)
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
  axios.get(`http://assembler-stock-market-webapi.herokuapp.com/api/actions`)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

