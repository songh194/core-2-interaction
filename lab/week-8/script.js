// var fruitName = "apple";
// x = 5

// function multiply(x) {
//     return fruitName * x 
// }

const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      return this.log[this.log.length - 1];
    },
  };
  
  console.log(obj.latest);
  // Expected output: "c"
