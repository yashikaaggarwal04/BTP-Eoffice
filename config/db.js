const mongoose = require('mongoose');
const url = "mongodb://localhost:27017";

mongoose.connect(url)
    .then(()=>{
        console.log('MongoDB Connected...');
    }).catch((err)=>{
        console.log('Error while creating MongoDB connection ',err);
    })