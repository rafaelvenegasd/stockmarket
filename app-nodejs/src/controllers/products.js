const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
    axios
    .get("https://assembler-stock-market-webapi.herokuapp.com/api/actions")
    .then((response) => {
        let companiesArray = [];
        response.data.map((products)=>{
            companiesArray.push(products);
        });
        res.render('pages/products', { companies: companiesArray });  
    })
    .catch(err => console.error(err)) 
});

router.get(`/:id`, (req, res) => {
    res.render('pages/item'); 
});

module.exports = router;