// const doworkCallback = (callback) =>{
//     setTimeout(()=>{
//         callback("this is my error");
//     }, 2000)
// }

// doworkCallback((err, result)=>{
//     if(err){
//         return console.log("err")
//     }
//     console.log(result)
// })

const axios = require('axios')

axios.get('https://localhost:5001/api/Category').then((result)=>{
    console.log(result.data)
}).catch((err) => {
    console.log({err})
})
