// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(""))

// a) Your answer: ["C","h","a","r","l","i","e","2","0","2","1"]
// b) Verify and explain: Well I am going to take a mostly correct on this one. I did miss the space between Charlie and 2021. What .split() does is it splits all of the indexes in a string and puts them in an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I believe this will return and error because the function needs to have a return statement and there isn't one.
// b) Verify and explain: Almost there... The function did not give any output because there wasn't a return statement. The function did run, there just isn't any output for us to look at.

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8,10,12,14,16]
// b) Verify and explain: It was correct! What is happening is map is filtering through the array and for every value it interacts with it is multiplying that value by 2. I was initally worried because I am so used to using .map() on a variable, but the variable is assigned an array so logically this syntax should make sense too.

// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: [12,14]
// b) Verify and explain: My answer was correct. In this line of code .filter() has a condition saying for each value it goes over in the array, it is only going to show the ones that are even (or have no remainder when divided by 2).


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer: {student: George, cohort: Charlie, year: 2021}
// b) Verify and explain: My syntax was off and I missed Learn at the beginning. The answer was: Learn { student: 'George', cohort: 'Charlie', year: 2021 }. In the code above a class was created with different key:value pairs. Below the class an object was created and was assigned the class Learn which means it now holds all of the features defined in Learn.
