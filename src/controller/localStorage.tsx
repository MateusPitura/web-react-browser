export const save = (key: string, value: Object) => {
    const dataRetrieve = localStorage.getItem(key)
    const dataParsed = dataRetrieve?JSON.parse(dataRetrieve):[]
    const newData = [...dataParsed, value]
    const dataStringfy = JSON.stringify(newData) 
    localStorage.setItem(key, dataStringfy);
}

export const set = (key: string, value: Object) => {
    const dataStringfy = JSON.stringify(value) 
    localStorage.setItem(key, dataStringfy);
}

export const get = (key: string) => {
    const dataRetrieve = localStorage.getItem(key)
    const dataParsed = dataRetrieve?JSON.parse(dataRetrieve):[]
    return dataParsed;
}

export const remove = (key: string) => {
    localStorage.removeItem(key)
}