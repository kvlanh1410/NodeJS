require('../db/db')
const User = require('../models/user')

// 62e0163b7fa12fdea0eb99f3
// User.findByIdAndUpdate('62e0163b7fa12fdea0eb99f3', {age: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result)=>{
//     console.log(result)
// })

// .catch((e)=>{

//     console.log(e)
// })

const updateAgeAndCount = async(id, age) =>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('62e0163b7fa12fdea0eb99f3', 2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})