const nerdamer = require("nerdamer/all.min")

const solve = (a = 10, b = 200, c = 20, d = 15, e = 3) => {
    const equation = `(${a}-(${b}/(${c}+x+${d})))-(${a}-(${b}/(${c}+x)))=${e}`

    // returns array
    return JSON.parse(nerdamer.solve(equation, "x").toString())
}


console.log(solve())
