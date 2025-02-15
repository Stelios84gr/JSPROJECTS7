function greet(name) {
//     if (name === undefined) {
//     name = "Guest"
// }
console.log(`Hello, ${name || "Guest"}.`)
}

greet()

// default params
function getUser(name = "Guest",  age = 18) {
    return { name, age }
}
const obj = getUser("Stelios")
console.log(obj)    // name: name ή Stelios αν δεν έχει δοθεί, age: age ή 18 αν δεν έχει δοθεί

function getFormattedDateTime(
    locale,
    options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Europe/Athens"
    }
) {
    const now = new Date()
    return now.toLocaleString(locale, options)
}
console.log(getFormattedDateTime("el-GR"))