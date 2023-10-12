//Async y Await

//legacy
const divPromise = (a, b) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log(`Calculando ${a} / ${b}`);

            if(b == 0) {
                reject(new Error("ERROR: Div entre 0"));
            } else {
                resolve(a / b);
            }

        }, 3000);
    });
}

// const divAsync = (a, b) => {
//     return new Promise((resolve, reject) => {
//         //proceso
//     })
// } 

const divAsync = async (a ,b) => {
    //return a / b; //equivalente al resolve

    if(b === 0){
        throw new Error("ERROR: div entre 0"); //equivalente al reject, hacemos un throw del error
    } else {
        return a / b; //equivalente al resolve
    }
}

console.log("----------Antes de la promesa----------");

/*
divAsync(2, 3)
    .then((result) => {

        console.log(`EL resultado 01 es: ${result}`);

        return divAsync(result, 5);
    })
    .then(result => {
        console.log(`El resultado 02 es: ${result}`);

        return divAsync(result, 0);
    })
    .catch((error) => {

        console.error(error.message);
    });

    */


console.log("----------Despues de la promesa----------");


const main = async () => {
    try {
        const numbersArr = [1, 3, 5, 4, 8, 0];
        let acc = numbersArr[0];

        for(let i = 1; i < numbersArr.length; i++){
            acc = await divAsync(acc, numbersArr[i]);
            console.log(`El resultado es: ${acc}`);  
        }
    } catch (error) {
        console.error(error.message);
    }
}

main();


//tarea portafolio, hacer lo mismo pero en lugar de usar for, usar for each
//debe hacerse un arreglo de promesas y uso de map. (no se puede resolver con foreach)

