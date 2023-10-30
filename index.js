const express = require('express');
require('dotenv').config();
const Routes = require('./routers/Routes');
const cors = require('cors');
const DataBase_Connection = require('./mongoDB config/connection');

const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));


app.use(express.json());
app.use('/', Routes);

DataBase_Connection();

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`App is listening at ${PORT}`));
