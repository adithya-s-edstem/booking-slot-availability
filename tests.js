import { program } from './program.js'

function assert(message, expected, input) {
    const actual = program(...input);
    if (actual === expected) {
        console.log(`PASS: ${message}`)
        return
    }
    console.log(`FAIL: ${message}`)
    return
}

function tests(){
    assert("Sum", 5,[2,3])
}

tests();