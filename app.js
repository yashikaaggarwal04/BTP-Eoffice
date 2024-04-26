const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
require('./config/db');


const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());
app.use('/api/v1', routes);

app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT: ${PORT}`);
})

app.use(cors({
    origin: 'http://localhost:3000'
}));

// Allow requests from multiple origins
app.use(cors({
    origin: ['http://localhost:3000', 'http://example.com']
}));