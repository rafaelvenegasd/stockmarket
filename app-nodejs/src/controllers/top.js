const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
    axios
    .get("https://assembler-stock-market-webapi.herokuapp.com/api/actions")
    .then((response) => {
        let companiesArray = [];
        response.data.map((top)=>{
            companiesArray.push(top);
        });
        res.render('pages/top', { companies: companiesArray });  
    })
    .catch(err => console.error(err)) 
});

module.exports = router;