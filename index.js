const express = require('express')
require('dotenv').config();
const Routes = require('./routers/Routes')
const cors = require('cors')

const DataBase_Connection = require('./mongoDB config/connection')


const app = express()
app.use(cors(
    {
        origin: ['https://guvi-user-app.vercel.app/'],
        methods: ["POST","GET"],
        credentials: true
    }
))
app.use(express.json())
app.use('/',Routes)

DataBase_Connection()

const PORT = process.env.PORT || 7000
app.listen(PORT,() => console.log(`app is listning at ${PORT}`))
