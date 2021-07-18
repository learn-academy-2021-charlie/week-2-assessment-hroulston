// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// First I will create a function called diviseThree
// It will take a parameter of number
// Next I will write a conditional to see if the number is divisible by three
// If it is it will do a return statement saying the number given is divisible by three using string interpolation.
// If it isn't it will return a statement using string interpolation saying the number given is not divisible by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("diviseThree", () =>{
  test("Want to see if number given as argument is divisible by three", () =>{
    expect(diviseThree(15)).toEqual("15 is divisble by three.")
    expect(diviseThree(-7)).toEqual("-7 is not divisble by three.")
  })
})
// Cool, it failed (woo hoo!) and I got the red reference error I was looking for. Now lets green this puppy.


var num1 = 15
// Expected output: "15 is divisible by three"


var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"



// b) Create the function that makes the test pass.

const diviseThree = (number) =>{
  if(number % 3 === 0){
  return `${number} is divisble by three.`
}else if(number % 3 !== 0){
  return `${number} is not divisble by three.`
}
}

// I learned a valuable lesson on making sure that .toEqual parameter is EXACTLY the same! It kept failing and I realized because I had put a period in my function and not in my .toEqual. Otherwise it passed!!


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// First I will create a function called capitalize
// It will take in a parameter of an array
// Now I know I need to use .toUpperCase BUT I only need it to work on the first letter
// I think I need to single that letter out using charAt()
// Let's see, I need these to methods to work on each value so I am going to need some form of iteraion. I am thinking .map might work here.
// Finally the function will return an array of the same length with each items capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capitalize",() => {
  test("It will take all of the values in the array and capitalize them.", () => {
    expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
  })
})

// Alright we got our red Reference Error of capitalize is not defined so that's awesome. Let's see how many more reds I get before I can get it to turn green lol.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.

// SO SO SO I did the function below and it did uppercase all of the letters I wanted it to! So that's pretty awesome. Only downside is it didn't give me the rest of the characters in the string, which is kind of a hilarious fail.

// const capitalize = (array) => {
// return array.map(value => value.charAt(0).toUpperCase())
// }

// In my logic I want to seperate the rest of that string from index one and then put them all back together. With a little research I found that .slice can maybe help me out here by slicing off the back end of the string and then putting it back together once the first letter is capitalized. Let's see what happens. Red number 2 here I come!

const capitalize = (array) => {
return array.map(value => value.charAt(0).toUpperCase() + value.slice(1))
}
// Oh WHaaaaaaaaaaaaattt! Got the green! Bam.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// First I need to create a function called firstVowel
// It will take in a parameter of a string
// Next I need to probably loop through the string
// I need to then figure out how to return the index of the value that matches with the vowel.
// I do need to figure out how to get the program to recognize the vowel.
// return the index of the first vowel

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  test("It will loop through the values in a string and return the index of the first vowel encountered", () => {
    expect(firstVowel("learn")).toEqual(1)
  })
})

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2



// b) Create the function that makes the test pass.

// Well, I'm jumping into this knowing what I have to do, but not entirely sure how I am going to get there. I tried using filter thinking it is going to return an array smaller than the initial array. But in order for it to work I have to split the string into an array. I figure I can write out each vowel and using the logical operator "or".

// const firstVowel = (string) => {
//   var string1 = string.split("")
//    var string2 = string1.filter((value, index) => {
//     if(value === "a" || value === "e" || value === "i" || value === "o" || value ==="u"){ return index
//     }
//   })
//   // return string2
//   console.log(string2)
// }
// Well that was a fail. I got a big fat red with it claiming syntax error on filter. I did do a log on string2 and it just returned the vowels so it basically did not work. Maybe I am over thinking this (which is my typical m.o.) so I am going to switch back to my best friend a basic for loop.
// I am going to see if I can loop through and use charAt for each index and use the logical operator to comapare once again to the vowels.
// Finally I will return the index and see what happens.


const firstVowel = (string) => {
  for (let i = 0; i < string.length; i ++){
    if(string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u"){
      return i
    }
  }
}

// Yesssss!!! I know testing works, but it's still a little unbelievable so I am going to console.log just in case...

console.log(firstVowel(vowelTester3))

// ...and it totally works. I guess I can learn a few things from my over thinking... don't over think it. 
