// Write your solution here!




const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat (name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newArray = [...cats]
    newArray.splice(newArray.length, 0, name);
    return( newArray )
}


function prependCat(name) {
    return([name, ...cats])
}

function removeLastCat() {
    return( cats.slice(0, -1) )
}

function removeFirstCat() {
    return(cats.slice(1, cats.length))
}


console.log( prependCat("Mario") )

console.log( removeLastCat() )

console.log( removeFirstCat() )








// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) {
//     cats.push(name);
// }

// function destructivelyPrependCat(name) {
//     cats.unshift(name);
// }

// function destructivelyRemoveLastCat() {
//     cats.pop();
// }

// function destructivelyRemoveFirstCat() {
//     cats.shift();    
// }

// function appendCat(name) {
//     const newArray = [...cats, name];
//     return(newArray);
// }

// function prependCat(name) {
//     const newArray = [name, ...cats];
//     return(newArray);
// }

// function removeLastCat() {
//     const newArray = cats.slice(0, -1);
//     return(newArray);
// }

// function removeFirstCat() {
//     const newArray = cats.slice(1);
//     return(newArray);
// }
