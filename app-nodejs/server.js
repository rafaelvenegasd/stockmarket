const express = require('express');

const app = express();

const server = app.listen(3000, listening);

function listening() {
    console.log('Server listening in port 3000');
}

app.use(express.static('src'));