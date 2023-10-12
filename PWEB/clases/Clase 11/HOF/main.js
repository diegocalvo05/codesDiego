const calculate = (numbers = [], process) => {
    if(numbers.length === 0) return 0;

    let prev = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        prev = process(prev, numbers[i]); 
    }

    return prev;
}

const flatArray = (key = "add") => {
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

    return (numbers = []) => calculate(numbers, selectedProcess); //retornamos una funcion anonima
}



//main funct

const main = () => {
    const testNumbers01 = [5, 4, 9, 8, 10, 3, 10];

    console.log("==========CALLBACKS==========");

    const addCallback = (a, b) => a + b;
    const subCallback = (a, b) => a - b;
    const timesCallback = (a, b) => a * b;
    const divCallback = (a, b) => b === 0 ? a : a / b;

    console.log(`Suma de elementos: ${calculate(testNumbers01, addCallback)}`); //usando template string
    console.log(`Resta de elementos: ${calculate(testNumbers01, subCallback)}`);
    console.log(`Multiplicacion de elementos: ${calculate(testNumbers01, timesCallback)}`);
    console.log(`Division  de elementos: ${calculate(testNumbers01, divCallback)}`);
    console.log(`Modulo de elementos: ${calculate(testNumbers01, (a, b) => a % b)}`); //llamada de la funcion de forma anonima, podemos definir la funcion dentro, no necesariamente tiene que estar afuera

    console.log("==========CALLBACKS==========");

    console.log("==========Higher Order Function==========");

    console.log(`Suma de elementos: ${flatArray("add")(testNumbers01)}`); //usando template string
    console.log(`Resta de elementos: ${flatArray("sub")(testNumbers01)}`);
    console.log(`Multiplicacion de elementos: ${flatArray("TiMes")(testNumbers01)}`);
    console.log(`Division  de elementos: ${flatArray("Div")(testNumbers01)}`);



    console.log("==========Higher Order Function==========");


}

main();