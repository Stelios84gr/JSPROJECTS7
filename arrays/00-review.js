const cities = ["Athens", "Paris", "Toronto"]

Add
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "London"

cities.forEach(c => console.log(c))

cities.sort()

cities.sort((a, b) => a.localeCompare(b, "en"))
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b, "en"))    // όταν δεν θέλουμε να τροποποιήσουμε τον αρχικό πίνακα, shallow copy με το slice και sort αυτόν

// Copy deep copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))  // το stringify μετατρέπει ένα object σε string και η parse μετατρέπει το string πάλι σε object δημιουργώντας ένα deep copy

const cities2 = structuredClone(cities)

// Shallow copies -- Spread operator
const cities3 = [...cities]

const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = cities.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)
