const express = require('express')
require('./db/db');
const User = require('./models/user')
const Address = require('./models/address')
const userRouter = require('./routers/users')
const addressRouter = require('./routers/address')

const app = express()

const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(addressRouter)





//listen 
app.listen(port, ()=>{
    console.log('Server start')
})

const main = async() =>{
    const user = await User.findById('62ef7877393e3a01cd5cc259')
    await user.populate('address')
    console.log(user.address)

}
main()



