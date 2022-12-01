// let = "andres"
// if(!"andres".includes("s")){ //aca anulo el inlcudes y es si pasa lo opuesto
//     console.log("V tiene s");
// }else{
//     console.log("F no tiene s");
// }

// let numero = parseFloat(prompt("Ingrese un nuemro"))

// if(numero > 1000){
//     alert("es mayor a 1000");
// }else{
//     alert("es menor a 1000");
// }

// let texto = prompt("ingrese texto").toLocaleLowerCase();

// if(texto === "hola"){
//      console.log("es hola");
//  }else{
//     console.log("no es hola");
// // }


// let numero = parseFloat(prompt("solicito numero"))

// if(numero > 10 && numero < 50 ){
//     alert("esta dentro")
// }else{
//     alert("esta afuera")
// };

// let Numero = parseInt(prompt("ingrese un numero"));
// for(let i = 0; i < 20; i++){
//     let Resultado = Numero * i;
//     let Mensaje = `el numero ${Numero} multiplicado por ${i} es igual a ${Resultado}`;
//     alert(Mensaje)
// // }

// for(let i=0; i<10; i++){
//     if(i===7){
//         console.log("estamos en el break 7");
//         break
//     }
//     console.log(i);
// }

// for(let i=0; i<10; i++){
//     if(i===7){
//        continue
//     }
//     console.log("HOLA", i);
// }


// let usuario = prompt("ingresar usuario").toLocaleUpperCase();
// while(usuario != "ANDRES"){
//     alert("ingresar nombre de usuario correcto");
//     usuario = prompt("ingresar usuario").toLocaleUpperCase();
// };
// alert("Bienvenido Andres");

// let repetir = false;
// do{
//     console.log("entramos al while");
// }while(repetir);

// let moneda = "GG";
// switch (moneda) {
//     case "URU":
//         console.log("Es de uruguay")
//         break;
//     case "BR":
//         console.log("es de brasil");
//         break;
//     case "ARS":
//         console.log("es de argentina");
//         break;
//     default:
//         console.log("es de otro pais");
//         break;
// }


// let numero = parseInt(prompt("Ingresar numero"));
// for( let i=0; i<20; i++){
//     let resultado = numero + i;
//     alert(`el total es ${resultado}`);
// };


// let nombre = prompt("ingrese nombre").toLocaleLowerCase();
// while(nombre != "esc"){
//     alert(nombre + "agregar");
//     nombre = prompt("ingrese nombre").toLocaleLowerCase();
// }
// alert("ingresaste esc")

// let numero = parseInt(prompt("ingrese numero"));
// for(let i=1; i<=5; i++){
//     alert("Hola");
// };

// function suma(num1, num2) {
//     let resultado= num1 + num2;
//     console.log(resultado);
// }
// // suma(10, 90);

// function sumar(num1, num2) {
//     let resultado= num1 + num2;
//     alert(resultado);
// }

// let numero1 = parseInt(prompt("ingrese numero 1"));
// let numero2 = parseInt(prompt("ingrese numero 2"));
// sumar(numero1, numero2);

// function sumarr(num10, num20) {
//     let resultado = num10 + num20;
//     return resultado;
// }

// let resultado1 = sumarr(52, 65);
// console.log(resultado1);

// const suma = (valor1, valor2) => {
//     return valor1 + valor2
// }
// // console.log(suma(2, 5));

// const suma1 = (valor3, valor4) => valor3 + valor4;
// console.log(suma1(21, 5));

// const suma2 = valor5 => 5 + valor5;
// console.log(suma2(6));

// const saludar = () => console.log("Hola");
// // saludar();

// const suma2 = valor5 => {
// let result = 5 + valor5;
// console.log(result);
// }
// suma2(21);

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const iva = x => x * 0.21;

// let precioProducto = 500;
// let descuento = 50;

// let resultado = resta(suma(precioProducto, iva(precioProducto)), descuento);
// console.log(resultado);

// const persona1 = {
//     nombre:"Ramiro",
//     edad: 26,
//     profesion: "abogado"
// }

// persona1.profesion = "contador";
// persona1["profesion"] = "Programador";

// console.log(persona1);


// const persona1 = {
//     nombre:"Ramiro",
//     edad: 26,
//     profesion: "abogado"
// };

// persona1.profesion = "contador";
// persona1["profesion"] = "Programador";

// const persona1 = {
//     nombre:"Ramiro",
//     edad: 26,
//     profesion: "abogado"
// }

// persona1.profesion = "contador"; //Aca estoy modificando una propiedad del objeto
// persona1["profesion"] = "Programador";

// persona1.apellido = "Camero"; //Agregue esta propiedad al objeto
// delete persona1.nombre;
// console.log(persona1);

// function Persona(nombrePers, apellidoPers, edadPers) {
//     this.Nombre = nombrePers;
//     this.Apellido = apellidoPers;
//     this.Edad = edadPers;  
// }

// const persona123 = new Persona("Pepito","Camero", 28);
// const persona1234 = new Persona("Alan","Perez", 68);
// console.log(persona1234.Apellido);

// function PersonaNew(info) { //otra forma para no poner todos los parametros cuando son muchos
//     this.Nombre = info.nombrePers;
//     this.Apellido = info.apellidoPers;
//     this.Edad = info.edadPers; 
// }
// const persona12345 = new PersonaNew({
//     edadPers: 56,
//     nombrePers: "Ramiro",
//     apellidoPers: "Camero"
// });
// console.log(persona12345);

// function Persona(nombrePers, apellidoPers, edadPers) {
//     this.Nombre = nombrePers;
//     this.Apellido = apellidoPers;
//     this.Edad = edadPers;
//     this.hablar = function(){
//         return `Hola mi nombre es ${this.Nombre} y tengo ${this.Edad} años`;
//     }  
// }

// const persona1 = new Persona("Ramiro", "Camero", 26);
// const persona2 = new Persona("Ramirddddo", "Camero", 276)
// console.log(persona2.hablar());

// class PersonaNueva{
//     constructor (nombrePN, apellidoPN, profesionPN){
//         this.Nombre = nombrePN;
//         this.Apellido = apellidoPN;
//         this.Profesion = profesionPN
//     }
//     hablar(){
//         return `Hola mi nombre es ${this.Nombre} y trabajo como ${this.Profesion}`;
//     }
// }
// const personaNueva1 = new PersonaNueva("Ramiro", "Camero","Abogado");
// console.log(personaNueva1.hablar());

// class PersonaNueva{
//     constructor (nombrePN, apellidoPN, profesionPN = "Contador"){
//         this.Nombre = nombrePN;
//         this.Apellido = apellidoPN;
//         this.Profesion = profesionPN
//     }
//     hablar(){
//         return `Hola mi nombre es ${this.Nombre} y trabajo como ${this.Profesion}`;
//     }
// }
// // const personaNueva1 = new PersonaNueva("Ramiro", "Camero", "Abogado");
// // console.log(personaNueva1.hablar());

// class Producto {
//     constructor(nombreP, precioP, cantidadP){
//         this.Nombre = nombreP;
//         this.Precio = precioP;
//         this.Cantidad = cantidadP
//         }
//     Total(){
//             return `Quedan ${this.Cantidad} productosss`
//     }
//     cantidad1(){
//         this.Cantidad = this.Cantidad - 1;
//         return `Quedan la cantidad de ${this.Cantidad}`
//     }
// }
// const producto1 = new Producto("Monitor", 500, 6)
// const producto2 = new Producto("TV", 750, 4)
// console.log(producto1.Total());
// producto1.cantidad1();
// console.log(producto1.Total());
// console.log(producto1);
// console.log(producto1.Total());
// producto1.cantidad1();
// console.log(producto1.Total());
// console.log(producto2);
// console.log(producto2.Total());
// producto2.cantidad1();
// producto2.cantidad1();
// console.log(producto2);
// console.log(producto2.Total());



// const arreglo1= ["julieta", 2, true, "Gomez",1 ,4 ,5]; //este es el arreglo
// // console.log(arreglo1[5]); // llsmsd en base al index, siempre arranca desde 0

// // for(let i = 0; i < arreglo1.length; i++){ //aca involucro un for y lo que hago es que arranque i desde 0 y vaya aumentando de a uno, asi me trae todos los valores del array
// //     console.log(arreglo1[i]);
// // }

// // arreglo1.push("Agustin"); //Agrego un elemento a un arreglo al final
// // // arreglo1.unshift("hola"); //Agrego un elemento a un arreglo al principio
// // arreglo1.pop(); //Elimina el ultimo elemento
// // arreglo1.shift();
// console.log(arreglo1.join("---")); // transforma en un strin gtodo el arreglo y divide cada elemento en base a lo que le pongas entre los parentesis
// // console.log(arreglo1.length);


// const arreglo2 = [1, 2, 3, 4];
// const arreglo3 = ["hola", "adios", 6, 7, 8, 9, 10, 11, 12];
// const arregloUnido = arreglo3.concat(arreglo2); //aca concatene dos arreglos, es decir, une dos arreglos y forma uno nuevo. el que se pone primero es el que va primero
// console.log(arreglo2);

// const corte = arreglo3.slice(5,4);
// console.log(corte);
// console.log(arreglo3.indexOf(12));

// console.log(arreglo3.includes("adios"));
// // arreglo2.reverse();
// // console.log(arreglo2);

// const nombres = ["Ana", "Sofia", "Alejandra"];

// console.log(nombres);
// const eliminar = (nombre) => {
//     let index = nombres.indexOf(nombre);

//     if (index != -1) {  //cuando se busca la posicion de un elemento en un array y no lo encuentra nos devuelve el -1
//         nombres.splice(index, 1);
//     };

//     console.log(nombres);
    
// }

// // eliminar("Sofia");

// const producstoArray = [
//     {id: 1, nombre: "Ramiro", apellido: "Camero"},
//     {id: 1, nombre: "Julieta", apellido: "Gomez"},
//     {id: 1, nombre: "Nicole", apellido: "Fofor"},
// ];

// for (const producto of producstoArray){  //esta forma de usar for remplaza al for en los arrays con objetos
//     console.log(producto.apellido); //aca si le agrego el .apellido por ejemplo hago que solo me traiga ese elemento de todos los productos.
// };

class Producto {
    constructor(nombreP, apellidoP, edadP){
        this.Nombre = nombreP;
        this.Apellido = apellidoP;
        this.Edad = edadP;
    }
};
const productos = [];

productos.push(new Producto("Ramiro", "Camero", 26));
productos.push(new Producto("Juli", "Cahfdo", 26));
productos.push(new Producto("Esteban", "Cfgsero", 26));
console.log(productos);