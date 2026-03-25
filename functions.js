//Functions-its a block of code that performs a specific task
//Function cannot run unless it is called
function greetings(){
    console.log("Hello World")
}
greetings()
//Function with parameters-parameters are variables inside a function
function sayHello(name){
    console.log("Hello "+name)
}
//The value passed inside the function is called an argument
sayHello("Brian")
sayHello("John")
function add(a,b,c){
    console.log(a+b+c)
}
add(10,20,30)
add(20,40,15)
//function with return values-
function multiply(x,y){
    return x*y
}
let results=multiply(20,30)
console.log(results)
function totalPrice(price,quantity){
    return price*quantity
}
let totalAmount=totalPrice(200,3)
console.log(totalAmount)
//Function with conditional statement
function checkAge(age){
    if(age>=18){
        console.log("You are an adult")
    }else{
        console.log("You are minor")
    }
}
checkAge(12)
checkAge(32)
//Function with default parameters
function greet(name="guest"){
    console.log("Hello "+name)
}
greet()
greet("Brian")
//Arrow function-it is a shorter way to write functions
// it is used inside other functions
const greetUser=user=>{
    console.log("Hello "+user)
}
greetUser("Brian")
greetUser("Jane")
const multiplication=(a,b)=>{
    console.log(a*b)
}
multiplication(34,2)
const checkScore=score=>{
    if(score>=50){
        console.log("pass")
    }else{
        console.log("fail")
    }
}
checkScore(35)
checkScore(68)
//callbacks-it is a function passed into another function and it is executed after something happens
function greetCustomer(name,callback){
    console.log("Hello "+name)
    callback()
}
greetCustomer("Mary",()=>{
    console.log("Wellcome to our website")
})
function processPayment(callback){
    console.log("Processing payment...")
    callback()
}
processPayment(()=>{
    console.log("payment successfull")
})
//global vs local variables
//global-it is declered outside a function and used everywhere
//local-declered inside a function and used only there
let globalVary="This is a global variable"
function test(){
    let localVary="This is a local variable"
    console.log(globalVary)
    console.log(localVary)
}
console.log(globalVary)
test()