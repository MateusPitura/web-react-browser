export const save = (key: string, value: Object) => {
    const dataRetrieve = localStorage.getItem(key)
    const dataParsed = dataRetrieve?JSON.parse(dataRetrieve):[]
    const newData = [...dataParsed, value]
    const dataStringfy = JSON.stringify(newData) 
    localStorage.setItem(key, dataStringfy);
}