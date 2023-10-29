const express = require('express')
const ModelSchema = require('../mongoDB config/model')
const router = express.Router()

router.post('/',async (req,res) => {
    const {email,password} = req.body;
    
    try {
        const user = await ModelSchema.findOne({email : email})
        if(user) {
            if(user.password === password){
                res.json('SUCCESS')
            } else{
                res.json('password incorrect')
            }
        } else{
            res.json("not a user")
        }
    } catch (error) {
        console.log(error)
    }
})

router.post('/signup',async(req,res) => {

    const {name, email, password} = req.body;
    try {
        const user = await ModelSchema.findOne({email : email})
        if(user){
            console.log("existing user")
            res.json("existing user")
        } else {
            const newuser = await ModelSchema.create(req.body)
            res.json(await ModelSchema.find())
        }
    } catch (error) {
        console.log(error)
    }
   
})

router.get('/userinfo/:id', async(req,res) => {
    try {
        const user = await ModelSchema.findOne({email : req.params.id}).select('-password');
        if(user) {
            res.json(user)
        } else{
            res.json("error")
        }
    } catch (error) {
        res.json('error')
    }
    
})

module.exports = router;