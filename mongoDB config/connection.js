const mongoose = require('mongoose')

const DBURL = process.env.URI

const DataBase_Connection = async() => {
    try{
        await mongoose.connect(DBURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db connected')
    } catch(error){
        console.log(error)
    }
}

module.exports = DataBase_Connection;