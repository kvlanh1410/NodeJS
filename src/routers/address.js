const express = require('express')
const Address = require('../models/address')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/address',auth ,(req, res) => {
    console.log(req.user._id)
    const address = new Address({
        ...req.body,
        Owner: req.user._id
    })
    
    address.save().then(() => {
        res.send(address)
    }).catch(err => {
        res.status(400).send(err)
    })
    
})

module.exports = router