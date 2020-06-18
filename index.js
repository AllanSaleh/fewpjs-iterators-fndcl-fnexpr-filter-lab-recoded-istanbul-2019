// Code your solution here

let drivers = [{ name: "Allan", age: 25 }, { name: "Mustafa", age: 22 }, { name: "MuWissam", age: 28 }, { name: "AllAn", age: 20 }]
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.name.toLowerCase() === str.toLowerCase());
}
console.log(findMatching(drivers, "Allan"));

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.name.startsWith(str));
}

console.log(fuzzyMatch(drivers, "Mu"));

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str);
}

console.log(findMatching(drivers, "Allan"));