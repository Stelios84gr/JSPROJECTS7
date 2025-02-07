const s = "Athens Uni Of Eco And Bus"

// for ... of iterables
for (const letter of s) {   // const ή let ή var ή τίποτα (εννοείται var)
    console.log(letter)
}

// spread operator iterables
const b =[..."Hello World"]
console.log(b);