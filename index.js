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