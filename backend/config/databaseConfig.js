const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect("mongodb+srv://afrinathar_29:riverusglobal@cluster0.dqhtm.mongodb.net/local_library?retryWrites=true&w=majority")
.then(() => {
    console.log("Connection successfully established");    
}).catch(err => {
    console.log('Could not connect to the database.');
    process.exit();
});