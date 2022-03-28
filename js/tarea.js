// Tarea 1
console.log (`Consigna 1`)

let randomnumber = Math.floor(Math.random () * 100 ) + 1;
console.log  (`Este es un número aleatorio ${(randomnumber)}`);

console.log (`Esta es la raíz cuadrada del número aleatorio: ${Math.sqrt (randomnumber)}`);

//let randomnumber5ta = Math.pow (randomnumber, 5);
console.log (`Este es el número aleatorio elevado a la quinta potencia: ${Math.pow (randomnumber, 5)}`) 

//Tarea 2
console.log (`Consigna 2`)

console.log  (`Esta es una lista que comprende los sigiuentes números:120,250,78,96,-38,45.72,1450,2380`);

console.log (` El número más alto de la lista es ${Math.max (120,250,78,96,-38,45.72,1450,2380)}`);
console.log (` El número más bajo de la lista es ${Math.min (120,250,78,96,-38,45.72,1450,2380)}`);

//Tarea 3
console.log (`Consigna 3`)
let num1 = 45.895025
let num2 = 56.788789
let num3 = 78.413582
console.log (`De la lista de números
45.895025
56.788789
78.413582 se reducen a dos decimales y se redondean`);

console.log (` El número ${(num1)} con dos decimales es ${(Math.round (num1 * 100) / 100)}`);
console.log (`y se redondea: ${(Math.round (Math.round (num1 * 100) / 100))}`);
console.log (` El número ${(num2)} con dos decimales es ${(Math.round (num2 * 100) / 100)}`);
console.log (`y se redondea: ${(Math.round (Math.round (num2 * 100) / 100))}`);
console.log (` El número ${(num3)} con dos decimales es ${(Math.round (num3 * 100) / 100)}`);
console.log (`y se redondea: ${(Math.round (Math.round (num3 * 100) / 100))}`);