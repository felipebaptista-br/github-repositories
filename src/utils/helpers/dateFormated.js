const formatedIso = (value) => {
    const originalDate = new Date(value);

    const day = String(originalDate.getUTCDate()).padStart(2, "0")
    const month = String(originalDate.getUTCMonth() + 1).padStart(2, "0")
    const year = originalDate.getUTCFullYear()

    const formatedDate = `${day}/${month}/${year}`

    return formatedDate
}

export { formatedIso };
