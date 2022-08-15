const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()




router.post('/users',(req, res) => {
    const user = new User(req.body)
    
    user.save().then(() => {
        res.send(user)
    }).catch(err => {
        res.status(400).send(err)
    })
    
})

//Get user
router.get('/users', auth, async (req, res) =>{
    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((err)=>{
    //     res.status(500).send(err)
    // })
    try{
        const user = await User.find({})
        res.send(user)
    }
    catch(e){
        res.status(500).send()
    }
})


//Get me
router.get('/users/me', auth, async (req, res) =>{

    try{
        res.send(req.user)
    }
    catch(e){
        res.status(500).send()
    }
})

//Get me
router.post('/users/logout', auth, async (req, res) =>{

    try{

        const tokenReq = req.header('authorization').replace('Bearer ', '')
        req.user.tokens= req.user.tokens.filter((token) =>{
            return token.token !== tokenReq
        })
        await req.user.save()
        res.send()
    }
    catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})


//Get by Id
router.get('/users/:id', (req, res)=>{
    // User.findById(id)
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})


router.patch('/users/:id', async (req, res) =>{
    try{
        const updates= Object.keys(req.body)
        const allowUpdate = ['name', 'age']
        const isvalidOperation = updates.every((update)=>{
            return allowUpdate.includes(update)
        })

        if(!isvalidOperation){
            return res.status(400).send({error: 'invalid updates'})
        }
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        // console.log(user)
        if(!user){
            return res.status(404).send("Not found")
        }
        res.send(user)
    }
    catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) =>{
    try{
         const result = await User.findByIdAndDelete(req.params.id)
         if(!result){
           res.status(400).send("Not found")
        }
        res.send(result)
    }
    catch(e){
        res.status(500).send(e)
    }
    
    
})

//Login

router.post('/users/login', async (req, res) =>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user: user.getPublicProfile(), token})
    }
    catch(e){
        console.log(e)
        res.status(500).send("Error: " +e)
    }
})

// const jwt = require('jsonwebtoken')
// const myFunction = async () =>{
//     const token = jwt.sign({_id : 'abc134'}, 'thisismynewcourse')
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse1')
//     console.log(data)
// }
// myFunction()

module.exports = router