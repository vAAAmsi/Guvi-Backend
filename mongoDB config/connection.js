const mongoose = require('mongoose')

const dburl = process.env.DB_URL

const DBConncetion = async() => {
    try{
        await mongoose.connect(dburl,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db connected')
    } catch(error){
        console.log(error)
    }
}

module.exports = DBConncetion ;