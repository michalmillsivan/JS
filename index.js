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

console.log("=========================page 32, ex.5========================")

var n = +(prompt("type")) //3
var b = 2
var counter = 0
var isnotrishoni = true

while (isnotrishoni) {

    while (n % b != 0) {
      b++  
    }
    if (b != n) { //lorishoni
        counter++
        n = +(prompt("type"))
    } else (isnotrishoni = false) //ken rishoni

}
console.log(counter)
