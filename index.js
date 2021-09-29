const nerdamer = require("nerdamer/all.min")

const solve = (a = 10, b = 200, c = 20, d = 15, e = 3) => {
    const equation = `(${a}-(${b}/(${c}+x+${d})))-(${a}-(${b}/(${c}+x)))=${e}`

    // returns array
    const solved = nerdamer.solve(equation, "x")
    const arr = solved.symbol.elements.map(e => (e.multiplier.num / e.multiplier.den))

    return arr
}


console.log(solve(112477.754, 153262.677 * 112477.754, 153262.677, 1200, 800.0055186911923))
