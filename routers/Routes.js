const express = require('express')
const ModelSchema = require('../mongoDB config/model')
const router = express.Router()

router.post('/',async (req,res) => {
    const {email,password} = req.body;
    
    try {
        const user = await ModelSchema.findOne({email : email})
        if(user) {
            if(user.password === password){
                return res.json('SUCCESS')
            } else{
                return res.json('password incorrect')
            }
        } else{
            return res.json("not a user")
        }
    } catch (error) {
        return res.json(error.message)
    }
})

router.post('/signup',async(req,res) => {

    const {name, email, password} = req.body;
    try {
        const user = await ModelSchema.findOne({email : email})
        if(user){
            console.log("existing user")
            return res.json("existing user")
        } else {
            const newuser = await ModelSchema.create(req.body)
            return res.json("SUCCESS")
            
        }
    } catch (error) {
        return res.json(error.message)
    }
   
})
router.get('/',(req,res) => {
    res.json('hello vamsi')
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
        res.json(error.message)
    }
    
})

module.exports = router;