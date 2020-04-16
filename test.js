const memoOnce = require('./dist/bundle');

const memoAdd = memoOnce((a, b, c) => {
    console.log(`a + b + c = ?`)
    return a + b + c
})

// result from calculation
console.log(memoAdd(1, 2, 28))
// result from memoization
console.log(memoAdd(1, 2, 28))
console.log(memoAdd(1, 2, 28))
console.log(memoAdd(1, 2, 28))


/*
    `a + b + c = ?`  logged only once
*/