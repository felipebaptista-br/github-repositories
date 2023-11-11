
const validateCharacter = (value, amount) => {
    const dataString = String(value)
    var myArray = []
    var newValue

    if (dataString.length >= amount) {
        for (let i = 0; i < amount; i++) {
            myArray.push(dataString[i])
        }
        myArray.push('...')
        newValue = myArray.join('').toString()
    } else {
        newValue = value
    }

    return newValue
}

export { validateCharacter };