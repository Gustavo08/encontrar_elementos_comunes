# Función que tome dos arrays y devuelva un array con los elementos que tienen en común

## Datos de ejemplo
* [1,3,4,6,7,9]
* [1,2,3,4,7,10]

Los elementos comunes de los array son: [1,3,4,7]

```js
    function commonElements (arra1, arra2) {
        return arra2.filter( item => arra1.includes(item));
    }
```
