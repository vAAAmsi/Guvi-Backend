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

    const {name, email, password,age,gender,dob,phnumber} = req.body;
    console.log(name,age,gender,dob)
    // res.json({name,dob,gender})
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
    console.log(req.params.id)
    try {
        const user = await ModelSchema.findOne({email : req.params.id}).select('-password');
        console.log(user)
        if(user) {
            res.json(user)
        } else{
            res.json("error")
        }
    } catch (error) {
        res.json(error.message)
    }
    
})

router.put('/update/:id', async(req,res) => {
    const updateddata = req.body;
    const user = await ModelSchema.findOne({_id : req.params.id})
    try {
        const ud = await ModelSchema.findByIdAndUpdate(req.params.id,updateddata,{ new: true })
        res.status(201).json(ud)
    } catch (error) {
        res.status(error.message)
    }
})

module.exports = router;