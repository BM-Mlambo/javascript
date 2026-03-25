//A promise is a javasript object that represent a value that maybe available now later or never
const myPromise=new Promise((resolve,reject)=>{
    const success=false
    if(success){
        resolve("Promise resolve")
    }else{
        reject("Promise rejected")
    }
})
myPromise
.then((message)=>console.log(message))//runs if success is true
.catch((error)=>console.log(error))//runs if promise fails


const checkExamscore=new Promise((resolve,reject)=>{
    const score=45
    if(score>=50){
        resolve("Congratulations you passed")
    }else{
        reject("Sorry you failed")
    }
})
checkExamscore
.then((message)=>console.log(message))
.catch((error)=>console.log(error))