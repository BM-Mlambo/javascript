//.Map()-it is used to transfer every item in an array into something new
let numbers=[1,2,3,4]
let doubled=numbers.map((num)=>{
    return num*2
})
console.log(doubled)
let names=["ann","jane","viona"]
let upperNames=names.map((name)=>{
    return name.toUpperCase()
})
console.log(upperNames)
// .filter()-used to select item that meets a condition
let marks=[74,80,43,35,58]
let passedStudents=marks.filter((mark)=>{
    return mark>=50
})
console.log(passedStudents)
let fruits=["apple","banana","avocado","oranges"]
let aFruits=fruits.filter((fruit)=>{
    return fruit.startsWith("a")
})
console.log(aFruits)
// .find()-used to get the first item that matches a condition
let scores=[23,45,65,73,90]
let results=scores.find((score)=>{
    return score>50
})
console.log(results)
let students=["ann","jane","viona","Charity"]
let studentName=students.find((student)=>{
    return student.length>4
})
console.log(studentName)