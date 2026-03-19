// Loops are used to repeat code multiple times instead of writing it again and again
//FOR loop -used when you know how many times you want to run the loop
//for(initialization;condition;icreament){}
for(let i=1;i<=20;i++){
    console.log (i)
}
//WHILE loop-used when we dont know how many times the loop will run
let x=4
while(x<=100){
    console.log(x)
    x++
}
//DO WHILE-it runs atleast once even if the condition is false
let y=2
do{
    console.log(y)
    y++
}while(y<=20)
 //looping through an array
 let fruits=["apple","banana","mangoes"]
 console.log(fruits)
 for(let fruit of fruits){
    console.log(fruit)
 }
 //break-it stops the loop early
 for(let a=1;a<=5;a++){
    if(a==3)break
    console.log(a)
 }
 //continue-skipps one iteration
 for(let b=5;b<=20;b++){
    if(b==7)continue
    console.log(b)
 }