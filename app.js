#!/usr/bin/env node
var cheer = require('./lib/name.js')


var name = process.argv[2]

process.stdout.write(cheer.cheerYeller(cheer.spaceBreaker(name)))





// console.log('Give me a ....!')
