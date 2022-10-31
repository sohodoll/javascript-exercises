const findTheOldest = function(array) {
    array.forEach(person => {
        if(!person.yearOfDeath) {
            person.yearOfDeath = (new Date().getFullYear());
        }
        person['yearsLived'] = person.yearOfDeath - person.yearOfBirth;
    })
    array.sort((a, b) => {
        return a.yearsLived > b.yearsLived ? -1 : 1
    })
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
