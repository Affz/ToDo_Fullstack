const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/databaseConfig.js');
const Category = require('./app/models/categories.model');
const cors = require("cors");
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors())

// define a simple route
app.post('/notes', (req, res) => {
        if(!req.body) {
            return res.status(400).send({
                message: "Fields can not be empty"
            });
        }

        // Create a Category
        const category = new Category ({
            items: req.body.items, 
            bucketName: req.body.bucketName
        });
    
        // Save Category in the database
        category.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong."
            });
        });
});
app.get('/findAll',(req, res) => {
        Category.find()
        .then(categories => {
            res.send(categories);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong."
            });
        });  
});

// listen for requests
app.listen(3000, () => {
    console.log("Node JS Server running on port 3000");
});