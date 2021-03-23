//5 Unique Numbers
const rokket = (arr1, arr2) =>{
    let newArr = arr1.concat(arr2);
    console.log(newArr);

    let uniqueArr = new Set(newArr);
    return uniqueArr;
}

console.log(rokket([1, 2, 5], [2, 1, 6]));

console.log(rokket([1, 2, 3], [4, 5, 6]));