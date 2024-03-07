console.log("=========================page 18, ex.5=========================")

var a = Number(prompt("This is for ex. 5 on page 18. Please enter your first number"))
var b = Number(prompt("This is for ex. 5 on page 18. Please enter your second number"))

if (a >= b) {
    console.log("1)" + b + " 2)" + a)
} else {
    console.log("1)" + a + " 2)" + b)
}

console.log("=========================page 20, ex.4=========================")

var c = Number(prompt("This is for ex. 4 on page 20. Please enter a number between 1-9999"))

if (c >= 1 && c < 10) {
    console.log("1")

} else if (c >= 10 && c < 100) {
    console.log("2")

} else if (c >= 100 && c < 1000) {
    console.log("3")

} else if (c >= 1000 && c < 10000) {
    console.log("4")

} else (console.log("number invalid"))

console.log("=========================page 20, ex.4 option b=========================")

var C = Number(prompt("This is for ex. 4 on page 20. Please enter a number between 1-9999"))
var i = 1

if (1 <= C < 10000) {

    while (parseInt(C / 10) != 0) {
        i = i + 1
        C = parseInt(C / 10)
    }
    console.log(i)

} else {

    console.log("number invalid")

}

console.log("=========================page 27, ex.2=========================")

var d = Number(prompt("This is for ex. 2 on page 27. Please enter your first number"))
var e = Number(prompt("This is for ex. 2 on page 27. Please enter your second number"))

while (d <= e) {
    console.log(d);
    d++;
}

console.log("=========================page 27, ex.3=========================")

var f = Number(prompt("This is for ex. 3 on page 27. Please enter your number"))
var I = 0

while (I <= f) {

    if (I % 2 == 0) {
        console.log(I)
    }
    I = I + 1

}

console.log("=========================page 27, ex.5=========================")

var g = Number(prompt("please enter a non negative number, if you want to stop write -99"))
var sum = 0

while (g != -99) {

    if (g >= 0) {

        sum = sum + g
        
    }

    g = Number(prompt("please enter a non negative number, if you want to stop write -99"))
    
}

console.log(sum)
