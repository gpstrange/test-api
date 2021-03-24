const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// mongoose.Promise = Promise;
app.set('view engine', 'ejs');
// localhost:3000/app.txt
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server started at port 3000');
})
