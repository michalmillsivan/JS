// console.log("=========================page 18, ex.5=========================")

// var a = Number(prompt("This is for ex. 5 on page 18. Please enter your first number"))
// var b = Number(prompt("This is for ex. 5 on page 18. Please enter your second number"))

// if (a >= b) {
//     console.log("1)" + b + " 2)" + a)
// } else {
//     console.log("1)" + a + " 2)" + b)
// }

// console.log("=========================page 20, ex.4=========================")

// var c = Number(prompt("This is for ex. 4 on page 20. Please enter a number between 1-9999"))

// if (c >= 1 && c < 10) {
//     console.log("1")

// } else if (c >= 10 && c < 100) {
//     console.log("2")

// } else if (c >= 100 && c < 1000) {
//     console.log("3")

// } else if (c >= 1000 && c < 10000) {
//     console.log("4")

// } else (console.log("number invalid"))

// console.log("=========================page 20, ex.4 option b=========================")

// var C = Number(prompt("This is for ex. 4 on page 20. Please enter a number between 1-9999"))
// var i = 1

// if (1 <= C < 10000) {

//     while (parseInt(C / 10) != 0) {
//         i = i + 1
//         C = parseInt(C / 10)
//     }
//     console.log(i)

// } else {

//     console.log("number invalid")

// }

// console.log("=========================page 27, ex.2=========================")

// var d = Number(prompt("This is for ex. 2 on page 27. Please enter your first number"))
// var e = Number(prompt("This is for ex. 2 on page 27. Please enter your second number"))

// while (d <= e) {
//     console.log(d);
//     d++;
// }

// console.log("=========================page 27, ex.3=========================")

// var f = Number(prompt("This is for ex. 3 on page 27. Please enter your number"))
// var I = 0

// while (I <= f) {

//     if (I % 2 == 0) {
//         console.log(I)
//     }
//     I = I + 1

// }

// console.log("=========================page 27, ex.5=========================")

// var g = Number(prompt("please enter a non negative number, if you want to stop write -99"))
// var sum = 0

// while (g != -99) {

//     if (g > 0) {

//         sum = sum + g

//     }

//     g = Number(prompt("please enter a non negative number, if you want to stop write -99"))

// }

// console.log(sum)




// console.log("=========================page 27, ex.7=========================")

// var h = +(prompt("This is for ex. 7 on page 27. please enter a number"))
// var max = 0

// while (h > 0) {
//     if (h > max) {
//         max = h
//     }
//     h = +(prompt("This is for ex. 7 on page 27. please enter a number"))
// }

// console.log(max)




// console.log("=========================page 27, ex.9=========================")

// var j = +(prompt("This is for ex. 9 on page 27. please enter a number"))
// var max = 0
// var index = 1
// var maxIndex = 0

// while (j > 0) {
//     if (j > max) {
//         max = j
//         maxIndex = index
//     }
//     index = index + 1
//     j = +(prompt("This is for ex. 9 on page 27. please enter a number"))
// }

// console.log(maxIndex)







// console.log("=========================page 27, ex.10=========================")

// var k = +(prompt("This is for ex. 10 on page 27. please enter a number"))

// while (k >= 10) {
//     k = parseInt(k / 10)
// }
// console.log(k)



// console.log("=========================page 28, ex.11=========================")

// var n = +(prompt("This is for ex. 11 on page 28. please enter a number"))
// var numberOfDigits = 1

// while (n >= 10) {
//     numberOfDigits ++
//     n = parseInt(n / 10)
// }

// console.log(numberOfDigits)



// console.log("=========================page 28, ex.13=========================")

// var n = +(prompt("This is for ex. 13 on page 28. please enter a number"))
// var dig = +(prompt("This is for ex. 13 on page 27. please enter a one digit number"))
// var digInN = 0

// while (n != 0) {
//     var currentDigit = n % 10;
//     if (currentDigit === dig) {
//         digInN++
//     }
//     n = parseInt(n / 10)


// }
// console.log(digInN)




// console.log("=========================page 28, ex.14=========================")

// var n = +(prompt("This is for ex. 14 on page 28. please enter a number"))  
// var reverse = 0

// while (n > 0) {
//     var reminder = n % 10;  
//     reverse = reverse * 10 + reminder  
//     n = parseInt(n / 10) 

// }
// console.log(reverse)  


// console.log("=========================page 28, ex.15=========================")

// var n = +(prompt("This is for ex. 15 on page 28. please enter a number")) 
// var reverse = 0
// var originNumber = n


// while (n > 0) {
//     var reminder = n % 10;  
//     reverse = reverse * 10 + reminder 
//     n = parseInt(n / 10) 


// }
// if (reverse === originNumber) {

//     console.log("polindrom")

// } else {

//     console.log("not polindrom")

// }




// console.log("=========================page 28, ex.16=========================")

// var a = +(prompt("This is for ex. 16 on page 28. please enter a number"))
// var b = +(prompt("This is for ex. 16 on page 28. please enter a number")) 
// var sum = 0


// while (b > 0) { 
//     sum = sum + a 
//     b-- 
// }
// console.log(sum)



// console.log("=========================page 28, ex.17=========================")

// var base = +(prompt("This is for ex. 17 on page 28. please enter a number")) //2
// var exponent = +(prompt("This is for ex. 17 on page 28. please enter a number")) //3
// var sum = 1

// while (exponent > 0) {

//     sum = sum * base
//     exponent --

// }
// console.log(sum)


// console.log("=========================page 31, ex.2=========================")

// var a = +(prompt("type number"))
// var b = +(prompt("type number"))
// var p = 1

// while (b > 0) {
//     m = 0
//     t = a
//     while (t > 0) {
//         m = m + p
//         t = t - 1
//     }
//     p = m
//     b = b - 1
// }
// console.log(p)


// console.log("=========================page 32, ex.4=========================")


// var n = +(prompt("type"))
// var index = 0

// if (n === 0) { console.log(n) }
// else {

//     while (index < 10) {
//         copy = n
//         while (copy != 0) {
//             digit = copy % 10
//             copy = parseInt(copy / 10)

//             if (digit === index) {
//                 console.log(digit)
//             }
//         }
//         index++
//     }
// }

// console.log("=========================page 32, ex.5========================")

// var n = +(prompt("type")) //3
// var b = 2
// var counter = 0
// var isnotrishoni = true

// while (isnotrishoni) {

//     while (n % b != 0) {
//         b++
//     }
//     if (b != n) { //lorishoni
//         counter++
//         n = +(prompt("type"))
//     } else (isnotrishoni = false) //ken rishoni

// }
// console.log(counter)

// console.log("=========================page 32, ex.5 Gal========================")

// var p = 1 //is it rishoni? //1 is not rishoni, 0 is rishoni
// var c = 0 //counter

// while (p = 1) {
//     var n = +(prompt("type")) //kelet 
//     d = parseInt(n / 2) //option to square //devider
//     p = 0 //asume integer is rishoni
//     while (d > 1 && p == 0) {
//         if (n % d == 0) { p = 1 } 
//         else { d-- }
//     }
//     c = c + p

// }
// console.log(c)

// console.log("=========================page 35, ex.4========================")

// var n = +(prompt("type"))
// var sum = 0

// for (var index = 0; index <= n; index++) {
//     if (index % 3 == 0) {
//         sum = sum + index
//     }
// }

// console.log(sum)


// console.log("=========================page 46, ex.1========================")

// function digitalWatch(hours, minutes, seconds) {
//     if (hours < 10) { hours = "0" + hours }
//     if (minutes < 10) { minutes = "0" + minutes }
//     if (seconds < 10) { seconds = "0" + seconds}
//     return hours + ":" + minutes + ":" + seconds
// }

// console.log(digitalWatch(14, 37, 28))
// console.log(digitalWatch(4, 3, 8))


// console.log("=========================Gal's home work 13/03========================")

// //Write a function that receive 2 numbers and return the sum between the numbers

// function sum(a, b) {
//     sum = a + b
//     return "The sum is " + sum
// }

// console.log(sum(2, -3))


// //Write a function that receive 2 numbers and return the max between the numbers

// function max(a, b) {
//     if (a >= b) {
//         console.log("the max number is " + a)
//     } else {
//         console.log("the max number is " + b)
//     }
// }

// console.log(max(7, 7))


//Write a function that receive 3 numbers and return the min between the numbers
// function min(a, b, c) {
//     if (a < b && a < c) {
//         return "the min number is " + a
//     } else if (b < a && b < c) {
//         return "the min number is " + b
//     } else {
//         return "the min number is " + c
//     }
// }

// console.log(min(2, 8, -23))
// console.log(min(2, 8, 1))
// console.log(min(2, 2, 2))
// console.log(min(2, 1, 8))
// console.log(min(2, 0, 9))
// console.log(min(-2, 0, 9))

// //Write a function that receive 2 names of products and return true if one of the products is "apple" otherwise the function will return false

// function apple(a, b) {
//     if (a == "apple" || b == "apple") {
//         return true
//     } else {
//         return false
//     }

// }

// console.log(apple("orange", "banana"))
// console.log(apple("apple", "banana"))
// console.log(apple("orange", "apple"))
// console.log(apple("apple", "apple"))

// console.log("=========================page 35, ex.6========================")

// var n = +(prompt("type"))
// var sum = 0

// for (var index = 0; index <= n; index++) {

//     sum = sum + Math.pow(2, index)

// }

// console.log(sum)

// console.log("=========================page 35, ex.7========================")

// var n = +(prompt("type number"))

// for (var index = 1; index <= n; index++) {
//     console.log(index)

// }
// for (let index = 1; index <= n; index++) {
//    console.log(index*2)

// }



// console.log("=========================page 35, ex.8========================")

// var n = +(prompt("type"))
// var sum = 0

// for (var index = 0; index <= n; index++) {
//     if (index % 4 == 0 || index % 7 == 0) {
//         sum = sum + index
//     }

// }

// console.log(sum)

// console.log("=========================page 36, ex.15========================")


// var sum = 0
// var count = 0
// var grade
// var studentName

// function avrage(count, sum) {
// if (count == 0){
//     return "you are all stupid"
// } else {avrage = sum / count
// return avrage}
// }

// for (var index = 0; index < 99; index++) {
//     studentName = prompt("student name")
//     grade = +(prompt("grade"))
//     if (grade > 70) {
//         console.log(studentName)
//         count++
//         sum = sum + grade
//     }
// }

// console.log(avrage(count,sum))

// console.log("=========================page 37, ex.17========================")

// var count = +(prompt("how many numbers do you want to check?"))
// maxNum = 0
// maxIndex = 0
// numOfTimes = 0

// for (var index = 1; index <= count; index++) {
//     var num = +(prompt("type number"))
//     if (num > maxNum) {
//         maxIndex = index
//         maxNum = num
//     }
//     if (num = maxNum) {
//         numOfTimes++
//     }

// }

// console.log(maxIndex + ") " + maxNum + "  X " + numOfIndex)




// console.log("=========================page 37, ex.18========================")

// var amount = +(prompt("how many numbers do you want to check?"))
// var m1 = +(prompt("type in your first number"))
// var im1 = 1
// var im2 = 0
// var m2 = +(prompt("type in another number"))

// for (var index = 2; index <= amount; index++) {
//     n = +(prompt("type in another number"))
//     updateSecondMaxNumber.call(n)
// }
// if (im2 > 0) {
//     console.log(m2, im2)
// } else { console.log("all equal") }

// function updateSecondMaxNumber(x) {
//     var x

//     if (x > m2) {
//         if (x > m1) {
//             m2 = m1
//             im2 = im1
//             m1 = x
//         }
//         im1 = index
//     } else {
//         if (im2 > 0 && x < m1) {

//         } else {
//             m2 = x
//             im2 = index
//         }
//     }
// }




// console.log("=========================page 37, ex.18========================")

// var amount = +(prompt("how many numbers do you want to check?"))
// var maxNumber = +(prompt("type in your first number"))
// var indexMaxNumber = 1
// var indexSecondMaxNumber = 0
// var secondMaxNumber = +(prompt("type in another number"))

// for (var index = 2; index <= amount-2; index++) {
//     n = +(prompt("type in another number"))
//     if (n > secondMaxNumber) {
//         if (n > maxNumber) {
//             secondMaxNumber = maxNumber
//             indexSecondMaxNumber = indexMaxNumber
//             maxNumber = n
//             indexMaxNumber = index
//         } else {
//             secondMaxNumber = n
//             indexSecondMaxNumber = index
//         }
//     }

// }
// if (indexSecondMaxNumber > 0) {
//     console.log(secondMaxNumber, indexSecondMaxNumber)
// } else { console.log("all equal") }


console.log("=========================page 48, ex.1========================")


var nekudot = 0

function Nikud(numOfSalimLezhoot, numOfSalimHov){
tozaa = numOfSalimLezhoot - numOfSalimHov
if (tozaa > 0) {
    nekudot = nekudot + 2
} else if (tozaa = 0) {
    nekudot++
}
return nekudot}


console.log("mcabi has " + Nikud(5, 2) + " nekudot")
console.log("mcabi has " + Nikud(2, 2) + " nekudot")
console.log("mcabi has " + Nikud(5, 7) + " nekudot")









