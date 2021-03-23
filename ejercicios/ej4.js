//4 Only Last Names
const contacts = [{ firstName: 'Juanito', lastName: 'Rokket' },
                  { firstName: 'James', lastName: 'Bond' },
                  { firstName: 'Harry', lastName: 'Potter' }]


const rokket = (contacts) => {
    const lastNamesArr = [];

    for (contact in contacts) {
        lastNamesArr.push(contacts[contact].lastName)
    }

    return lastNamesArr;
}


console.log(rokket(contacts));