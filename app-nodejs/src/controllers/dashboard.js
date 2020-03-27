const express = require('express');
const router = express.Router();
const axios = require('axios');

// function getTodos() {
//     axios
//       .get("http://localhost:3000/companies")
//       .then(res => res.data.forEach(function(todo,i){
//             console.log(todo.name);
//         }))
//       .catch(err => console.error(err))      
// };

// getTodos();

router.get('/', (req, res, next) => {  
    
    axios
    .get("http://localhost:3000/companies")
    .then((response) => {
        let companiesArray = [];
        response.data.map((dashboard)=>{
            companiesArray.push(dashboard);
        });
        res.render('pages/dashboard', { companies: companiesArray });  
    })
    .catch(err => console.error(err)) 
     
});

module.exports = router;