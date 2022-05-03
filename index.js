


let string = '0'

function snapCrackle(maxValue) {
    for (let i = 1; i <= maxValue; i++)
        if (i % 2 !== 0 && i % 5 !== 0) {
            string += ', Snap'
        }
        else if (i % 5 === 0 % 2 === 0) {
            string += ', Crackle'
        }
        else if (i % 2 !== 0 && i % 5 === 0) {
            string += ', SnapCrackle'
        } else {
            string += ', ' + i
        }
    return string

}

