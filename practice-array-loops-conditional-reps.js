//====Part I: HTML & CSS
//Rate 4.5

//====Part II: JavaScript Reps
//====Easy Going
//Write a for loop that will log the numbers 1 through 20.

for (i = 1; i <= 20; i++){
    console.log(i);
}

//====Get Even
//Write a for loop that will log only the even numbers in 0 through 200.
for (i = 0; i <= 200; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

//====Fizz Buzz
for (let i = 1; i <= 100; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz")
    } else if (i%3 === 0){
        console.log("Fizz")
    } else if (i%5 === 0 && !i%3 === 0){
        console.log("Buzz")
    } else {
    console.log(i)
}
}


//====Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.

plantee[2] = 5001

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

wolfy[3] = "Gotham City"

// Give D'Art a second hometown by adding "Hawkins"

dart.push("Hawkins")

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".

wolfy.splice(0, 1, "Gameboy")

//====Yell at the Ninja Turtles

const ninja = ["Donatello", "Leonardo","Raphael","Michaelangelo"]
for (const element of ninja){
    console.log(element.toUpperCase());
}

//====Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


console.log(favMovies.indexOf("Titanic"));

favMovies.sort()
favMovies.pop()
favMovies.push("Guardians of the Galaxy")
favMovies.reverse()
favMovies.shift() //remove GoG
favMovies.unshift() //return nothing as no movie was added
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, 'Avatar')
const half = Math.floor(favMovies.length / 2)
const sliceMovies = favMovies.slice(0, half)
// favMovies.slice(0, half) w/o variable does not change array
console.log(sliceMovies); //slice half
console.log(sliceMovies.indexOf("Fast and Furious")) //-1 is returned
//const of array is mutable

//====Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",["Lucinda", "Jacc", "Neff", "Snoop"],["Petunia", ["Baked Goods", "Waldo"]]]

whereIsWaldo.splice(1, 1)
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo[2][1][1]);
//====Excited Kitten

for (i = 0; i <= 20; i++){
    console.log("Love me, pet me! HSSSSSS!");
    if(i % 2 == 0){
        const catTalk = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."]
    let meow = Math.round(Math.random() * catTalk.length-1)    
    console.log(catTalk[meow])
}
}

//====Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15
nums.sort()
const median = Math.floor(nums.length/2)
console.log(nums[median]);