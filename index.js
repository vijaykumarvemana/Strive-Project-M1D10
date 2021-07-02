//JS EXERCISES

       /*-----21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
              22) Create an object with properties such name, surname, email
              23) Delete Email from the previously created object
              24) Create an array with 10 strings in it
              25) Print in the console every string in the previous array
              26) Create an array with 100 random numbers in it
              27) Wrote a function to get the MAX and the MIN from the previously created array
              28) Create an array of arrays, in which every array has 10 random numbers
              29) Create a function that gets 2 arrays and returns the longest one
              30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
       */

let x = "John"
let y = "Doe"
console.log(x +"<>"+ y)

const obj = {
    name:"vijay Kumar",
    surname:"Vemana",
    email:"vemanavijaykumar154@gmail.com",
}

delete obj.email

let arrayStrings = ["html","css","javascript","git","gitHub","VScode","Reviews","zoom","peer-learning","live lectures"]
console.log(arrayStrings)

let arrayRandomNumbers = []
for (let i=0, t=100; i<t; i++) {
    arrayRandomNumbers.push(Math.round(Math.random() * t))
}
console.log(arrayRandomNumbers)

const minMax = function (array){
let maxValue = array[0]
for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
           maxValue  = array[i]
        }
    }

console.log(maxValue)

let minvalue = array[0]
for (let i = 1; i < array.length; i++){
  if (array[i] < minvalue) {
     minvalue  = array[i]
  }
}

console.log(minvalue)

}

minMax(arrayRandomNumbers)


let arr = []
for(let i = 0; i < 4; i++){
     let current = []
     for(let j = 0; j < 10; j++)
          current.push(Math.floor(Math.random() * 10))
     arr.push(current)
}
console.log(arr)


const longestArray = function (array1, array2){
    if(array1.length > array2.length){
        console.log(array1)
    }else{
        console.log(array2)
    }
}
longestArray([1,2,4,6,7], [3, 4, 5])

const sumOfArray = function (array1, array2) {
    let sum1 = 0
    for(i = 0; i < array1.length; i++){
        sum1 += array1[i]
    }
    let sum2 = 0
    for(i = 0; i < array2.length; i++){
        sum2 += array2[i]
    }
    if(sum1 > sum2){
        console.log(sum1)
    }else{
        console.log(sum2)
    }
    
}
sumOfArray([1,3,5,6], [34,67,2,0])