const calculatePromise = (a, b, process) => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(process(a, b));  
        }, 1000);
    });
}

const getcalculator = (key = "add") => {
    let selectedProcess = undefined;

    switch(key.toUpperCase()){
        case "ADD": 
            selectedProcess = (a, b) => a + b;
            break;
        
        case "SUB": 
            selectedProcess = (a, b) => a - b;
            break;
        
        case "TIMES": 
            selectedProcess = (a, b) => a * b;
            break;
        
        case "DIV":
            selectedProcess = (a, b) => b === 0 ? a : a / b;
            break;
    }

    return (a, b) => calculatePromise(a, b, selectedProcess); //retornamos una funcion anonima
}

const add = getcalculator("add");
const sub = getcalculator("sub");
const times = getcalculator("times");
const div = getcalculator("div");

//ejecucion


console.log("----------Antes de la promesa----------");

add(1, 3)
    .then(result => {
        console.log(`El resultado es: ${result}`);

        return sub(result, 2);    
    })
    .then(result => {
        console.log(`El resultado es: ${result}`);

        return times(result, 10);
    })
    .then(result => {
        console.log(`El resultado es: ${result}`);

        return div(result, 0);
    })
    .then(result => {
        console.log(`El resultado es: ${result}`);
    });


console.log("----------Despues de la promesa----------");

