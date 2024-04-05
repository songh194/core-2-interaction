// function add(x,y) {
//     var result = x + y;
//     console.log(result)
// }

// function subtract(x,y) {
//     var result = x - y;
//     console.log(result)
// }

// function multiply(x,y) {
//     var result = x * y;
//     console.log(result)
// }

function math(x, y, operation) {
    if (operation === "add") {
        var result = x + y;
        console.log(x + " + " + y + " = " + result)
    }
    else if (operation === "subtract") {
        var result = x - y;
        console.log(x + " - " + y + " = " + result)
    }
    else if (operation === "multiply") {
        var result = x * y;
        console.log(x + " x " + y + ' = ' + result)
    }
    else {
        console.log("I don't know how to do that.")
    }
}

math(2, 4, "add");
math(5, 6, "subtract");

// var fruits = ['apple','banana','pineapple','cherry','orange']

// function reverseList(li,number){
//     for (var i = 0; i < li.length; i++) {
//         li[i] = li[i].split("").reverse().join()
//     }
//     console.log(li[number])
// }
// reverseList(fruits,2)