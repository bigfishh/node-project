const { reverse } = require('./reverse')

// Index 2 holds the first actualy command line argument 
let argument = process.argv[2]
console.log(process.argv)
console.log(reverse(argument))

const { writeFile } = require('fs')
writeFile("file.txt", "Node was here", err => {
    if (err) console.log(`Failed to write file: ${err}`)
    else console.log("File written")
})

const { rename } = require('fs')
rename("file.txt", "hello.txt", (err) => {
    if (err) console.log(`Failed to write file: ${err}`)
})

let { readFile } = require('fs')
readFile("hello.txt", "utf8", (error, text) => {
    if (error) throw error;
    console.log("the file contains:", text)
})