const add = (a, b)=>{
    return new Promise((resolve, rejct)=>{
        setTimeout(()=>{
            resolve(a+b)
        }, 2000)
    })
}

const doWork = async ()=> {
    const sum =  await add(1,2)
    const sum1 = await add(sum, 2)
    return sum1
}


doWork().then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e)
})