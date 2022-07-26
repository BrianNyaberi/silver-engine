// Nullable types 

function greet(name: string) {
    console.log(name.toLocaleUpperCase())
}

// this will crash as we cant call .toUpper on a null object greet(null)