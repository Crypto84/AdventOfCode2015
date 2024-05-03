const fs = require("fs")

function calculateRibbonRequired(l, w, h) {
    let minimumFacePerimeter = Math.min(2*l + 2*w, 2*l + 2*h, 2*w + 2*h)
    return (minimumFacePerimeter + l*w*h)
}

const total = fs.readFileSync("./inputs.txt", "utf8")
    .split('\n')
    .reduce((total, line) => {
        measurements = line.split('x')
        return(total + calculateRibbonRequired(...measurements))
    }, 0)

console.log(total)