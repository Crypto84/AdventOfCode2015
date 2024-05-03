const fs = require("fs")

let row = 0
let col = 0
let visited = [{col:0 , row:0}]

fs.readFileSync("./input.txt", "utf8").split('').forEach(d => {
    let found = false
    console.log(d)
    switch(d){
        case '<':
            col = col-1
        case '>':
            col = col+1
        case '^':
            row = row-1
        case 'v':
            row = row+1
    }
    console.log(row, col)
    for (let i=0; i<visited.length; i++) {
        if (visited[i].col == col && visited[i].row == row) {
            found = true
        }
    }
    if(!found) {
        visited.push({col:col, row:row})
    }
});

console.log(visited.length)