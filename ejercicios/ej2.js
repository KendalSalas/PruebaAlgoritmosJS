//2 Longest String
const list = ['best', 'company', 'ever'];

const rokket = (strings) => {
    let largest = '';

    for(let i = 0; i < list.length; i++){
        if(strings[i].length > largest.length){
            largest = strings[i];
        }
    }

    return largest;
  }

console.log(rokket(list));
