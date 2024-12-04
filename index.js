// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the array destructively
function destructivelyAppendCat(name) {
    cats.push(name); // Adds the name to the end of the cats array
}

// Function to prepend a cat to the beginning of the array destructively
function destructivelyPrependCat(name) {
    cats.unshift(name); // Adds the name to the start of the cats array
}

// Function to remove the last cat destructively
function destructivelyRemoveLastCat() {
    cats.pop(); // Removes the last element of the cats array
}

// Function to remove the first cat destructively
function destructivelyRemoveFirstCat() {
    cats.shift(); // Removes the first element of the cats array
}

// Function to append a cat to the end of the array non-destructively
function appendCat(name) {
    return [...cats, name]; // Returns a new array with the name added to the end
}

// Function to prepend a cat to the beginning of the array non-destructively
function prependCat(name) {
    return [name, ...cats]; // Returns a new array with the name added to the start
}
// Function to remove the last cat non-destructively
function removeLastCat() {
    return cats.slice(0, -1); // Returns a new array excluding the last element
}

// Function to remove the first cat non-destructively
function removeFirstCat() {
    return cats.slice(1); // Returns a new array excluding the first element
}
module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};