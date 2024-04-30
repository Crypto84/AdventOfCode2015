// Not yet working!

const fs = require("fs")

function calculatePaper(l, w, h) {
    let minimumFace = Math.min(l*w, w*h, l*h)
    return (minimumFace + 2*l*w + 2*w*h + 2*l*h)
}

const total = fs.readFileSync("./inputs.txt", "utf8")
    .split('\n')
    .reduce((total, line) => {
        measurements = line.split('x')
        return(total + calculatePaper([...measurements]))
    }, 0)

console.log(total)
