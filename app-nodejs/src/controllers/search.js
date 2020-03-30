const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
     
    axios
    .get("https://assembler-stock-market-webapi.herokuapp.com/api/actions")
    .then((response) => {
        let companiesArray = [];
        response.data.map((search)=>{
            companiesArray.push(search);
        });
        res.render('pages/search', { companies: companiesArray });  
    })
    .catch(err => console.error(err)) 
});

module.exports = router;