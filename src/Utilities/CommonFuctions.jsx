const getFromLocalStorage = (item)=>{
    const stringValue = localStorage.getItem(item);
    const value = JSON.parse(stringValue);
    if(value){
        return value;
    }else{
        return [];
    }
}
const setToLocalStorage = (itemName, itemValue)=>{
    const valueFromLocalStorage = getFromLocalStorage(itemName);
    valueFromLocalStorage.push(itemValue);
    const itemValueString = JSON.stringify(valueFromLocalStorage);
    localStorage.setItem(itemName, itemValueString);
}
export {getFromLocalStorage, setToLocalStorage}