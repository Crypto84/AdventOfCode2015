const fs = require("fs")

const inputString = fs.readFileSync("InputString.json", "utf8")
const input = JSON.parse(inputString)
let floors = 0
input.parens.split("").forEach((element, i) => {
    if(element === '(') {
        floors++
    } else {
        floors--
    }

    if (floors === -1) {
        console.log(i+1)
    }
});