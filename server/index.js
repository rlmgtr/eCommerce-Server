const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router')

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(router);

app.listen(8001,() => {
    console.log("Server is running on port 8001");
});

