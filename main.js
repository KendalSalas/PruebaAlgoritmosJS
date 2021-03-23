//1 Composite Function

// const rokket = (a, b, c) =>{
//     return a * b * c;
// }

// console.log(rokket(2, 5, 3));


//2 Longest String
// const list = ['best', 'company', 'ever'];

// const rokket = (strings) => {
//     let largest = '';

//     for(let i = 0; i < list.length; i++){
//         if(strings[i].length > largest.length){
//             largest = strings[i];
//         }
//     }

//     return largest;
//   }

// console.log(rokket(list));

//3 String Repetition
// const rokket = (a, n) =>{
//     return a.repeat(n);
// }

// console.log(rokket('node', 5));


//4 Only Last Names
// const contacts = [  { firstName: 'Juanito', lastName: 'Rokket' },  
//                     { firstName: 'James', lastName: 'Bond' },  
//                     { firstName: 'Harry', lastName: 'Potter' }]


// const rokket = (contacts) =>{
//     const lastNamesArr = [];

//     for(contact in contacts){
//         lastNamesArr.push(contacts[contact].lastName)
//     }

//     return lastNamesArr;
// }


// console.log(rokket(contacts));


//5 Unique Numbers

// const rokket = (arr1, arr2) =>{
//     let newArr = arr1.concat(arr2);
//     console.log(newArr);

//     let uniqueArr = new Set(newArr);
//     return uniqueArr;
// }

// console.log(rokket([1, 2, 5], [2, 1, 6]));

// console.log(rokket([1, 2, 3], [4, 5, 6]));