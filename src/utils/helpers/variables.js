const objectMapKeys = (obj) => {
    const res = Object.keys(obj).map(key => {
        return typeof key === 'string' ? key.toUpperCase() : key
    });

    return res
}

const objectMapValues = (obj) => {
    const res = Object.values(obj).map(values => {
        return typeof values === 'string' ? valor.toUpperCase() : values;
    });

    return res
}

export {
    objectMapKeys,
    objectMapValues
}