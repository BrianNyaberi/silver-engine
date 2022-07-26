// Nullable types (union operator)

function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toLocaleUpperCase())
    } else {
        console.log('Hola, buenos dias?')
    }
  
}

// this will crash as we can 