var denisse = 31;
var jaume = 10;
var alina = 41;
var nereo = 35;
var lucia = 10;
var noe = 40;
var juana = 68;
var noemi = 15;
var sumaEdades = denisse + jaume + alina + nereo;
if (sumaEdades % 2 == 0) {
    console.log("La suma de edades es par");
}
else {
    console.log("La suma de edades es IMPAR");
}
if (sumaEdades > 100) {
    console.log("Somos viejos!", sumaEdades);
}
else {
    console.log("Aún tenemos gripe!");
}
var vidas = noe / lucia;
console.log("Vidas de Lucia en Noe ", vidas);
var vidasnoemienjuana = juana / noemi;
console.log("vidas de noemi en juana", vidasnoemienjuana);
if (vidasnoemienjuana > vidas) {
    console.log("Vidas de Noemi en Juana son mayores que Lucia en Noe");
}
else {
    console.log("Vidas de Lucia en Noe son mayores que las vidas de Noemi en Juana ");
}
var mensaje = "Banco Amigo";
console.log(mensaje);
var mensaje1 = "Que operación desea realizar";
console.log(mensaje1);
var mensaje2 = "Esta operación no se puede realizar";
var mensaje3 = "Indique la cantidad a retirar";
var mensaje4 = "Saldo insuficiente";
var saldo = 5;
if (saldo < 10) {
    console.log(mensaje2);
}
else {
    console.log(mensaje3);
}
