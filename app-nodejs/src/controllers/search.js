const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
     
    axios
    .get("http://localhost:3000/companies")
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