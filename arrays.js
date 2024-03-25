// console.log(`Write a function that receive a string and check if the string length is
//  longer than 20 characters, return "too long string", otherwise return the last character.`)

//  var t = prompt("Please enter your text")

//  function stringLengh(text) {
//     if (text.toString().length>20) {
//          return "too long!"
//     } else {
//         return text.charAt(text.toString().length - 1)
//     }

//  }

//  var result = stringLengh(t)
//  console.log(result)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`Write a function that receive from the user 10 cars and print only the first and the last car`)

// function insertCars(numOfCars) { //5
//     if (typeof numOfCars !== 'number') return
//     var cars = [];
//     for (var index = 0; index < numOfCars; index++) {
//         var currentCar = prompt("enter car name")
//         cars.push(currentCar)
//     }
//     console.log(cars[0])
//     console.log(cars[cars.length - 1])
//     return [cars[0], cars[cars.length - 1]]
// }

// var result = insertCars(5)
// console.log(result)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`create a function that push products into cart, 10 products & print the cart`)

// function addToCart(numOfProducts) {
//     if (typeof numOfProducts !== `number`) return
//     var products = [];
//     for (let index = 0; index < numOfProducts; index++) {
//         var currentProduct = prompt("enter product name")
//         products.push(currentProduct)        
//     }
//     return cart;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`create a function that push products into cart & delete a selected product from prompt.`)

// function insertProducts(numOfProducts) {
//     if (typeof numOfProducts !== 'number') return
//     var cart = [];
//     for (let index = 0; index < numOfProducts; index++) {
//         var currentProduct = prompt("enter product name")
//         cart.push(currentProduct)
//     }
//     return cart;
// }

// function deleteFromCart(cart, productToDelete) {
//     var foundIndex = -1;
//     for (let index = 0; index < cart.length; index++) {
//         if (cart[index].toLowerCase() === productToDelete.toLowerCase()) {
//             foundIndex = index; // 2
//         }
//     }
//     if (foundIndex > -1) {
//         cart.splice(foundIndex, 1)
//     }

// }

// var cart = insertProducts(5)
// console.log(JSON.stringify(cart))
// deleteFromCart(cart, prompt("enter product to delete")) //["a","b","c","d","e"] "c"
// console.log(cart)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("=========================page 48, ex.1========================")

// var nikud = 0
// var nikudCopy = 0
// var games = 0

// function score(plus, minus) {
//     if (isNaN(plus) || isNaN(minus)) {
//         console.log("invalid score")
//     } else {
//         result = plus - minus
//         if (result > 0) {
//             nikud = nikudCopy + 2
//         } else if (result === 0) {
//             nikud = nikudCopy + 1
//         } else {
//             nikud = nikudCopy
//         } return nikud
//     }
// }


// for (var index = 0; index < 3; index++) {
//     var gameScore = score(prompt("how many gates macabi made"), prompt("how many gates macabi get"))
//     games++
//     console.log("on the " + games + " game macabi got " + gameScore + " points.")
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("=========================page 48, ex.2========================")

// // קלוט 4 נתונים. הצג את ממוצע הנתונים עד לנתון הראשון השווה 0 )לא כולל(.
//     לדוגמא: עבור רשימת הקלט: 9 0, 7, 5, →
//     כל הנתונים יקלטו, אבל יחושב הממוצע של 5 ו- 7 בלבד כלומר הפלט יהיה .6
//     יש לטפל גם במצבים הבאים: הנתון הראשון הוא 0; אף נתון לא שווה .0
//     .

// var num = []

// function calculateAvrage(array) {
//     if (array.length === 0) {
//         return 0;
//     }
//     var sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     var average = sum / array.length;
//     return average;
// }

// function calculateAverageWithoutLastNumber(array) {
//     if (array.length === 0) {
//         return 0;
//     }
//     if (array.length === 1) {
//         return array[0];
//     }
//     var sum = array.slice(0, -1).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     var average = sum / (array.length - 1);
//     return average;
// }


// for (var index = 0; index < 4; index++) {
//     var currentNum = +prompt("add number")
//     num.push(currentNum)
//     if (currentNum === 0) {
//         var avgr = calculateAverageWithoutLastNumber(num)
//         console.log("Average:", avgr);
//         break;
//     }
//     var avg = calculateAvrage(num)

// } console.log("Average:", avg);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// console.log("=========================page 48, ex.3========================")

// var numOfChecks = +prompt("how many checks would you like?")
// var totalMoney = +prompt("how much money do you need?")
// var singleCheck = totalMoney / numOfChecks

// for (var index = 0; index < numOfChecks; index++) {
//     if (singleCheck > 500) {
//         amla = ((singleCheck - 500) * 0.015) + 5
//     } else {
//         amla = 5
//     }  
// }

// var sum = totalMoney + amla

// console.log("The number of checks you asked for is: " + numOfChecks + ".")
// console.log("The total amount of money you asked for is: " + totalMoney + ".")
// console.log("The total amount of amla you need to pay is: " + amla + ".")
// console.log("The total amount of you need to pay, including everything is: " + sum + ".")


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// console.log(`page 57, ex. 5`)

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (var index = 0; index < array.length; index++) {
//     if (array[index] % 2 === 0) {
//         swap = array[index]
//         deleteFromArray(array, array[index])
//         array.push(swap)
//     }
// } console.log(array)

// function deleteFromArray(Array, thingToDelete) {
//     var foundIndex = -1;
//     for (let index = 0; index < Array.length; index++) {
//         if (Array[index] === thingToDelete) {
//             foundIndex = index;
//         }
//     }
//     if (foundIndex > -1) {
//         Array.splice(foundIndex, 1)
//     }
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// console.log(`practice sheet, page 14- switch statement part 2`)

// var a = +prompt(`type first number`)
// var b = +prompt(`type second number`)
// var c = prompt(`type action`)

// switch (c) {
//     case `+`:
//         alert(a + b)
//         break;
//     case `-`:
//         alert(a - b)
//         break;
//     case `/`:
//         alert(a / b)
//         break;
//     case `*`:
//         alert(a * b)
//         break;
//     case `%`:
//         alert(a % b)
//         break;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`practice sheet, page 17- loops 1`)

// var num = +prompt(`please write a number`) //1234
// var sum = 0
// while (num != 0) {
//     rightDigit = num % 10 //4
//     sum = sum + rightDigit
//     num = parseInt(num / 10)
// }

// console.log(sum)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`practice sheet, page 17- loops 2`)


// let isPrime = true;

// if(number == 1) {
//     isPrime = false;
// }
// else {
//     for (let i = 2; i <= number / 2; i++) { // i <= Math.sqrt(number) - more efficient.
//         if(number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if(isPrime) {
//     alert("This is a prime number");
// }
// else {
//     alert("This is not a prime number");
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`practice sheet, page 19- array 1`)
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// maxNum = 0

// for (let index = 0; index < array.length; index++) {
//   if (array[index] > maxNum) {
//     maxNum = array[index]
//   }
// } console.log(`the max number is ${maxNum}`)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// console.log(`practice sheet, page 19- array 2`)

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var sumZ = 0
// var sumE = 0

// for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 === 0) {
//         sumZ++
//     } else {
//         sumE++
//     }
// }
// console.log(`the array has ${sumZ} zoogi numbers and ${sumE} Ezoogis numbers`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`practice sheet, page 22- function`)

// const num = +prompt(`type number get azeret`)
// alert(azeret(num))

// function azeret(number) {
//     let sum = 1
//     for (let index = 1; index <= number; index++) {
//         sum *= index
//     }
//     return sum
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`practice sheet, page 23- object`)


// let profile = []

// for (let index = 0; index < 3; index++) {
//     let firstName = prompt(`type first`)
//     let lastName = prompt(`type last`)
//     let age = +prompt(`type age`)
//     let pro = firstName + " " + lastName + " " + age
//     profile.push(pro)
// }
// document.write(profile)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`gal's home work, page 57 ex.6`)

// var array = []

// for (let index = 0; index < 20; index++) {
//     array.push(prompt(`insert data`))
// }
// console.log(array)


// function swap(array) {
//     for (let index = 0; index < array.length / 2; index++) {
//         var swapi = array[index]
//         array[index] = array[array.length - 1 - index]
//         array[array.length - 1 - index] = swapi
//     }  return array
// }

// console.log(swap(array))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`gal's home work, page 57 ex.7`)

// var array = []
// var sumNum = 0
// var sumString = 0
// var sumElse = 0

// for (let index = 0; index < 5; index++) {
//     var data = prompt(`insert data`)
//     var isNum = parseFloat(data)
//     if (!isNaN(isNum)) {
//         array.push(isNum)
//     } else if (data === `true` || data === `false`) {
//         array.push(data === `true`)
//     } else { array.push(data) }
// }

// function sort(array) {
//     for (let index = 0; index < array.length; index++) {
//         if (typeof array[index] === `string`) {
//             sumString++
//         } else if (typeof array[index] === `number`) {
//             sumNum++
//         } else { sumElse++ }
//     }
// }

// sort(array)

// console.log(`the sum num is ${sumNum} the sum string is ${sumString} and else is ${sumElse}`)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log(`gal's home work, page 57 ex.8`)

var array = [`a`, `b`, `c`, `d`, `c`, `b`, `a`]

function isPalindrome(array) {
    for (let index = 0; index < array.length / 2; index++) {
        if (array[index] !== array[array.length - 1 - index]) {
            console.log(`not polindrome`);
            return false
        }
    }
    console.log(`is polindrome`)
    return true
}

isPalindrome(array)
