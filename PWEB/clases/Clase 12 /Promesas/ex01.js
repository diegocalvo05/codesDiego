//estructura de una promesa

const promiseFunc = () => {
    return new Promise((resolve, reject) => {

        //ejemplificando proceso largo
        setTimeout(() => {
            console.log("----------Mensaje dentro de la promesa ----------");
            resolve();
        }, 3000);
    });
}

console.log("----------Antes de la promesa----------");

promiseFunc()
    .then(() => {
        console.log("----------Despues de la promesa (100% real)----------");
    });

console.log("----------Despues de la promesa----------");

