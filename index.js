const Big = require("big.js");

const solve = (params = ["10", "200", "20", "15", "3"]) => {
    Big.DP = 10
    params = params.map(e => new Big(e))

    let a = params[0] || 10,
        b = params[1] || 200,
        c = params[2] || 20,
        d = params[3] || 15,
        e = params[4] || 3

    // const D = `(2 * 20 + 15) ^ 2 - 4 * (20 ^ 2 + 20 * 15 - ((200 * 15) / 3))`

    const D =
        (new Big("2").times(c).plus(d).pow(2)).minus(
            (new Big("4").times(
                c.pow(2).plus(
                    c.times(d).minus(
                        ((b.times(d)).div(e))
                    )
                )
            ))
        )

    const minusB = (new Big(0).minus(
        new Big(2).times(c).plus(d)
    ))

    if(D.lt(0)) return []
    if(D.eq(0)) return [
        minusB.div(2).toString()
    ]
    if(D.gt(0)) return [
        (minusB.plus(D.sqrt())).div(2).toString(),
        (minusB.minus(D.sqrt())).div(2).toString()
    ]
}

console.log(
    solve([
        "2500",
        "1000",
        "2500",
        "3500",
        "30"
    ])
)

