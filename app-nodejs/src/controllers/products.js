const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
    axios
    .get("http://localhost:3000/companies?_page=1&_limit=5")
    .then((response) => {
        let companiesArray = [];
        response.data.map((products)=>{
            companiesArray.push(products);
        });
        res.render('pages/products', { companies: companiesArray });  
    })
    .catch(err => console.error(err)) 
});


router.get(`/:id`, (req, res, next) => {
    axios
    .get(`http://localhost:3000/companies?id=1`)
    .then((response) => {
        let companiesArray = [];
        response.data.map((item)=>{
            companiesArray.push(item);
        });
        res.render('pages/item', { companies: companiesArray });  
    })
    .catch(err => console.error(err)) 
});

module.exports = router;