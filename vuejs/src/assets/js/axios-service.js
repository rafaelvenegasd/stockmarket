
const axios = require('axios');

export function getDetails(name, cb){
    axios.get(`https://assembler-stock-market-webapi.herokuapp.com/api/actions/` + name)
    .then(function (res) {
        cb(null, res.data);
    })
    .catch(function (error) {
        console.log(error);
        cb(error, null);
    })
}

export function getContentFromApi(cb){
  axios.get(`https://assembler-stock-market-webapi.herokuapp.com/api/actions`)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

export function getTop5(cb){
  axios.get(`https://assembler-stock-market-webapi.herokuapp.com/api/actions/topactualprices`)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

export function getValues(id, cb){
    axios.get(`https://assembler-stock-market-webapi.herokuapp.com/api/actualprices/`+ id)
    .then(function (res) {
        cb(null, res.data);
    })
    .catch(function (error) {
        console.log(error);
        cb(error, null);
    })
  }

