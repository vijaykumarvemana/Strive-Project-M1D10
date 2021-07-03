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

window.onload = function(){
    console.log("page loaded")
}
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

    /*  
        31) Get element with ID "container" from the page
        32) Get every "td" from the page
        33) Create a cycle that prints the text inside every td of the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add the class "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list
    */    
const gettingIdContainer = function () {
    const idElement = document.getElementById('center')
    console.log(idElement)
}
gettingIdContainer()

const everyTdElement = function () {
    const everyTd = document.querySelectorAll(' td')
    for(let td of everyTd){
    console.log(td.innerHTML="text")
    }
}
 everyTdElement()

 const changeHead = function (){
     const head = document.querySelector('h1')
     head.innerText = 'MODULE-1-D-10'
 }
 changeHead()

const colorChange = function () {
    let links = document.querySelectorAll('a')
    for(let link of links){
        link.style.backgroundColor = "yellow"
    } 
}
colorChange()
const addItemsInUl = function (content) {
    const ul = document.querySelector(" div ul");
    ul.innerHTML += `<li>${content}</li>`
    // const li = document.createElement("li");
    // li.innerText = "new list item";
    // ul.appendChild(li);
  };
  addItemsInUl("new item1")  
  addItemsInUl("new item2")

  const removeList = function (){
      let list = document.querySelector('div ul')
      list.remove()
  }
  removeList()


      /*41) Add an eventListener to alert when the mouse is over a link, displaying the URL
        42) Add a button to hide every image on the page
        43) Add a button to hide and show the table from the page
        44) Write a function to sum every number inside the TD (if the content is numeric)
        45) Delete the last letter from the title each time the user clicks on it
        46) Change a single TD background color when the user clicks on it
        47) Add a button DELETE, on click it should delete a random TD from the page
        48) Add a pink border to a cell when the mouse is over it
        49) Write a function to add a table with 4 rows and 3 columns programmatically
        50) Write a function to remove the table from the page
        */
const alertlinks =  function(){
    const links = document.querySelectorAll('a')
    for(link of links){
        link.onmouseenter = function(event){
            alert(event.target.href)
        }
    }
}
alertlinks()

const hideImages = function () {
    const btn = document.createElement("button")
    btn.innerText = "Hide images"
    btn.onclick = function () {
      const imgs = document.querySelectorAll("img")
      imgs.forEach((img) => {
        img.classList.add("d-none")
      })
    }
    const body = document.querySelector("body")
    body.appendChild(btn)
  }
  hideImages()


const toggleTable = function () {
    const btn = document.createElement("button")
    btn.innerText = "Toggle table"
    btn.onclick = function () {
      const table = document.querySelector("table")
      table.classList.toggle("d-none")
    }
    const body = document.querySelector("body")
    body.appendChild(btn);
  }
  toggleTable()



  const sumNumbers = function () {
    const tds = document.querySelectorAll("td")
    let sum = 0
    tds.forEach((td) => {
      const toNumber = parseInt(td.innerText)
      const isNotNumeric = isNaN(toNumber)
      if (!isNotNumeric) {
        sum += toNumber
      }
    })
    alert(sum)
  }
  sumNumbers()


  const deleteLastChar = function () {
    const h1 = document.querySelector("h1")
    h1.onclick = function (e) {
      h1.innerText = h1.innerText.substring(0, h1.innerText.length - 1)
    }
  }
  deleteLastChar()
  const changeTdBg = function () {
    const tds = document.querySelectorAll("td")
    tds.forEach((td) => {
      td.onclick = function (e) {
        e.target.classList.toggle("bg-red")
      }
    })
  }
  changeTdBg()


  const deleteRandom = function () {
    const btn = document.createElement("button")
    btn.innerText = "Delete random"
    btn.onclick = function () {
      const tds = document.querySelectorAll("td")
      const random = Math.floor(Math.random() * tds.length)
      tds[random].remove()
    }
    const body = document.querySelector("body")
    body.appendChild(btn)
  }

  deleteRandom()

  const addPinkBorder = function () {
    const cells = document.querySelectorAll("td")
    cells.forEach((td) => {
      td.onmouseenter = function (e) {
        e.target.classList.add("border-pink")
      }
      td.onmouseleave = function (e) {
        e.target.classList.remove("border-pink")
      }
    })
  }
  addPinkBorder()


  const createTable = function () {
    const body = document.querySelector("body")
    const table = document.createElement("table")
    const tbody = document.createElement("tbody")
    table.appendChild(tbody)
    body.appendChild(table)
    for (let i = 0; i < 5; i++) {
      const tr = document.createElement("tr")
      tbody.appendChild(tr)
      for (let j = 0; j < 3; j++) {
        if (i === 0) {
          const th = document.createElement("th")
          th.innerText = "Heading " + (j + 1)
          tr.appendChild(th)
        } else {
          const td = document.createElement("td")
          td.innerText = `Row ${i} Col ${j + 1}`
          tr.appendChild(td);
        }
      }
    }
  }
  

  const removeTable = function () {
    const table = document.querySelectorAll("table")[1]
    table.remove()
  }
  removeTable()



