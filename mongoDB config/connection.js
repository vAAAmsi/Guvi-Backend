const mongoose = require('mongoose')

const dburl = process.env.DB_URL

const DBConncetion = async() => {
    try{
        await mongoose.connect('mongodb+srv://mamillapallivamsi11:qA8rQvzZ8YBmxyYX@cluster0.ddw20wj.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db connected')
    } catch(error){
        console.log(error)
    }
}

module.exports = DBConncetion ;
