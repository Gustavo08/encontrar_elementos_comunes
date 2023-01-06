/*
    Función que tome dos arrays y devuelva un array con los
    elementos que tienen en común
*/

function commonElements (arra1, arra2) {
    return arra2.filter( item => arra1.includes(item));
    /*
        creamos un nuevo array con el método filter que cumplan la condición:
        Los elementos del segundo array que están incluidos en el array 1
        con el método includes verificamos.
    */
}


let array1 = [1,3,4,6,7,9];
let array2 = [1,2,3,4,7,10]; // Los elementos comunes son 1,3,4,7

let response = commonElements(array1, array2);

console.log("=== response ====");
console.log(response);