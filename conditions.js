//Conditional statements are used to make decision in your code.
//IF statement-it runs only if a condition is true
let age=23
if(age>=18){
    console.log("you are an adult")
}
//Else-it runs only if a condition is false
let citizenAge=14
if(citizenAge>=18){
    console.log("you are an adult you can vote")
}else{
    console.log("you are minor you can not vote")
}
//else If
let score=38
if(score>=80){
    console.log("grade A")
}else if(score>=70){
    console.log("grade B")
}else if(score>=60){
    console.log("grade C")
}else if (score>=50){
    console.log("grade D")
}else{
    console.log("you failed")
}
let hour=14
if(hour<12){
    console.log("Good morning")
}else if(hour<18){
    console.log("Good afternoon")
}else{
    console.log("Good evening")
}

//switch statement-
let amount=1800
switch(amount){
    case 500:
        console.log("small pizza")
        break
    case 800:
        console.log("medium pizza")
        break
    case 1200:
        console.log("large pizza")
        break
    default:
        console.log("Sorry we only have small,medium and large pizzas")
}