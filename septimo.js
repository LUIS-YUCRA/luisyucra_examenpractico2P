// 1. hallar la funcion flecha
function suma(x) {
    return x+1;
}

const suma = (x) => x+1;
// 2. Dado el siguiente arreglo. Mostrar solo los valores del objeto paciente usando for..in

let paciente = {
    nombre: "Carlos",
    edad: 35,
    genero: "Masculino",
    diagnostico: "Hipertensión",
    tratamiento: "Medicación diaria"
}
for (let mostrar in paciente) {
    console.log(mostrar, paciente[mostrar]);
}

// 3. Dado el arreglo de objetos añadir un objeto carro al inicio del arreglo y desplegar 
let carros = [
    {
        color: "morado",
        modelo: 2020,
        marca: "toyota"
    },
    {
        color: "negro",
        modelo: 2010,
        marca: "toyota"
    },
    {
        color: "blanco",
        modelo: 2020,
        marca: "toyota"
    },
]
carro = carros.unshift({ 
    color: "azul",
    modelo: 2020,
    marca: "suzuki"
});
 console.log(carros);
 // 4. Con el nuevo arreglo que obtuviste en el ejercicio 3  crear una funcion que me devuelva 
 // y muestre en consola el numero de carros modelo 2020

 function modelo(arreglo) {
    let contador = 0;
    for (let carros of arreglo) {
        if (carros.modelo === 2020) {
            contador++;
        } 
    }
    console.log(`Número de modelos de carros: ${contador}`);
    return contador;
}

modelo(carros);

 // 5. Dado una arreglo de nombres ["argentina","bolivia","colombia"] realizar un funcion callbak para
 // pasar el arreglo de minisculas a mayusculas.
let paises = ["argentina", "bolivia", "colombia"];
function cambiarMayus(arreglo, callback) {
    return arreglo.map(callback);
}
function Mayusculas(pais) {
    return pais.toUpperCase();
}
let paisesM = cambiarMayus(paises, Mayusculas);

console.log(paisesM);


