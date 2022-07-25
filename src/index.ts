// Union types

function kgToLbs(weight: number | string): number {
     // Narrowing
     if (typeof weight === 'number') {
        return weight * 2.2
     } else {
        return parseInt(weight) * 2.2
     } 
}

// let mySize = 2;
// console.log(mySize);

function kgToTns(weight: number | string): number {
     // Narrowing
     if (typeof weight === 'number') {
        return weight / 1000
     } else {
        return parseInt(weight) / 1000
     } 
}