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

// class Producto {
//     constructor(nombreP, apellidoP, edadP){
//         this.Nombre = nombreP;
//         this.Apellido = apellidoP;
//         this.Edad = edadP;
//     }
// };
// const productos = [];

// // productos.push(new Producto("Ramiro", "Camero", 26));
// // productos.push(new Producto("Juli", "Cahfdo", 26));
// // productos.push(new Producto("Esteban", "Cfgsero", 26));
// // console.log(productos);

// // function mayorQue(n){
// //     return m => m > n;
// // };

// // // let mayorQueCinco = mayorQue(5);
// // // console.log(mayorQueCinco(3));

// // function operaciones (operacion){
// //     if(operacion === "sumar"){
// //         return (x, y) => x + y;
// //     }else if(operacion === "restar"){
// //         return (x, y) => x - y;
// //     }else if(operacion === "multiplicar"){
// //         return (x, y) => x * y;
// //     }else{
// //         return (x, y) => x / y;
// //     };
// // };

// // let suma = operaciones("sumar"); //(x, y) => x + y;
// // console.log(suma(6, 90));

// // let restar = operaciones("restar");
// // console.log(restar(9, 5));

// // let multiplicacion = operaciones("multiplicar");
// // console.log(multiplicacion(2, 50));

// // let division = operaciones();
// // console.log(division(80, 8));

// // let iteradora = (arreglo, funcion) => { //ERRORR
// //     for (const item of iteradora) {
// //         funcion(item);
// //     };
// // };

// // iteradora ([1, 2, 3, 4], console.log);

// // const numbers = [1, 2, 3, 4, 5, 6];

// // numbers.forEach( numero=> {
// //     console.log(numero);
// // });

// // const productos5 = [
// //     {id: 1, nombre: "camisa", precio: 3500},
// // //     {id: 2, nombre: "pantalon", precio: 3000},
// // //     {id: 3, nombre: "medias", precio: 1800},
// // //     {id: 4, nombre: "cinturon", precio: 1500}, 
// // // ];

// // // let encontrado = productos5.find (item => item.nombre === "medias");

// // // console.log(encontrado);

// // const productos5 = [
// //     {id: 1, nombre: "camisa", precio: 3500},
// //     {id: 2, nombre: "pantalon", precio: 3000},
// //     {id: 3, nombre: "medias", precio: 1800},
// //     {id: 4, nombre: "cinturon", precio: 1500}, 
// // ];

// // // let encontrado = productos5.find (item => item.nombre === "medias"); //al igual que antes, le metimos una arrow function

// // // console.log(encontrado);

// // let nombre5 = prompt("ingrese el producto que esta buscando");

// // let producto501 = productos5.find (item => item.nombre === nombre5);

// // let mensaje5 = `El precio del producto ${nombre5} es ${producto501.precio}`;

// // alert(mensaje5)

// const productos6 = [
//     {id: 1, nombre: "camisa", precio: 3500},
//     {id: 2, nombre: "pantalon", precio: 3000},
//     {id: 3, nombre: "medias", precio: 1800},
//     {id: 4, nombre: "cinturon", precio: 1500}, 
// ];

// // const filtro6 = productos6.filter(item => item.precio > 2000);

// // console.log(filtro6);

// let precioMinimo = parseInt(prompt("Ingrese precio minimo"))
// const filtro601 = productos6.filter(item => item.precio > precioMinimo);

// filtro601.forEach (item => {
//     let mensaje = `
//     id: ${item.id}
//     nombre: ${item.nombre}
// //     precio: ${item.precio}`;

// //     alert(mensaje)
// // });

// const productos68 = [
//     {id: 1, nombre: "camisa", precio: 3500},
//     {id: 2, nombre: "pantalon", precio: 3000},
//     {id: 3, nombre: "medias", precio: 1800},
//     {id: 4, nombre: "cinturon", precio: 1500}, 
// ];

// // console.log(productos68.some(
// //     item => item.nombre === "camisa"
// // ));

// let nombre701 = prompt("ingrese el producto a buscar");
// // alert(productos68.some(
// //     item => item.nombre === nombre701
// // ));
// if(productos68.some ( item => item.nombre === nombre701)){
//     alert("el producto se encuentra disponible")
// };

// const productos603 = [
//     {id: 1, nombre: "camisa", precio: 3500},
//     {id: 2, nombre: "pantalon", precio: 3000},
//     {id: 3, nombre: "medias", precio: 1800},
//     {id: 4, nombre: "cinturon", precio: 1500}, 
// // ];

// // let nombres603 = productos603.map(item => item.nombre);
// // console.log(nombres603);

// const productos603 = [
//     {id: 1, nombre: "camisa", precio: 3500},
//     {id: 2, nombre: "pantalon", precio: 3000},
//     {id: 3, nombre: "medias", precio: 1800},
//     {id: 4, nombre: "cinturon", precio: 1500}, 
// ];

// // let nombres603 = productos603.map(item => item.nombre); //aca se crea un arreglo solo con los nombres
// // console.log(nombres603); 

// const actualizacion = productos603.map( item => {
//         return {
//             id: item.id,
//             nombre: item.nombre,
//             precio: item.precio + item.precio * 1.10
//         }
//     }
// );

// console.log(actualizacion);

// const numeros36 = [1, 2, 3, 4, 5, 6];

// const total36 = numeros36.reduce((acumulador, item) => acumulador + item, 0);

// // console.log(total36);

// const productos607 = [
//     {id: 1, nombre: "camisa", precio: 3500},
//     {id: 2, nombre: "pantalon", precio: 3000},
//     {id: 3, nombre: "medias", precio: 1800},
//     {id: 4, nombre: "cinturon", precio: 1500}, 
// ];

// let total607 = productos607.reduce((acumulador, item) => acumulador + item.precio, 0);
// // console.log(total607);

// const numeros365 = [1, 20, 37, 400, 5];

// console.log(numeros365.sort((a, b) => a - b));  //aca ordena de forma ascendente
// console.log(numeros365.sort((a, b) => b - a));  //aca ordena de forma descendente
// // console.log(numeros365.sort());

// const productos609 = [
//     {id: 1, nombre: "camisa", precio: 3500},
//     {id: 2, nombre: "pantalon", precio: 3000},
//     {id: 3, nombre: "medias", precio: 1800},
//     {id: 4, nombre: "cinturon", precio: 1500}, 
// ];

// console.log(productos609.sort((a, b) => {
//     if (a.nombre > b.nombre) {
//         return 1;
//     }
//     if (a.nombre < b.nombre) {
//         return -1
//     }
//     return 0;
// }));

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.max(1, 5, 8, 90, 108, 5, 87));
// console.log(Math.min(1, 5, 8, 90, 108, 5, 87));
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7)); // lo redondea al ams cercano
// console.log(Math.sqrt(9)); //retorna la raiz cuadrada
// console.log(Math.random());
// console.log(Math.random() * 50); // genera un numero al azar entre 0 y 50
// console.log(Math.random() * 50 + 45); // genera un numero al azar entre 0 y 50

// console.log(Date());
// // console.log(new Date(2021, 12, 1));
// console.log(new Date("2022 1, 10 15:15:32"));


// let hoy = new Date();
// console.log(hoy);

// console.log(hoy.getDay());
// console.log(hoy.getFullYear());
// console.log(hoy.getMonth());

// let hoy = console.log(Date());;
// console.log(hoy.getDay());
// // console.log(hoy.getFullYear());
// // console.log(hoy.getMonth());


// let hoy = new Date("March 6, 2022 23:45:19");

// console.log(hoy.getDay());
// console.log(hoy.getFullYear());
// console.log(hoy.getMonth());

// console.log(hoy.toDateString());
// console.log(hoy.toLocaleDateString());
// console.log(hoy.toLocaleString());

// let navidad = new Date("DEcember 24, 2021");
// let hoy = new Date();

// const milisegundosPorDia = (navidad - hoy); //aca me lo trae en milisegundos


// let elementoHtml = document.getElementById("Aplicacion");
// console.log(elementoHtml); // Me trae todo el div  <div id="Aplicacion"> <p>Hola a todos</p> </div>
// console.log(elementoHtml.innerHTML); // aca me trae todo lo que esta dentro del div  <p>Hola a todos</p>
// console.log(elementoHtml.innerText); //aca solo me trae el texto Hola a todos


// let elementoHtmlClass = document.getElementsByClassName("objetos");
// console.log(elementoHtmlClass);
// console.log(elementoHtmlClass[0].innerHTML);// Aca me trae lo que esta dentro de la etiqueta li del index 0

// let elementoHtmlTag = document.getElementsByTagName("h3");
// console.log(elementoHtmlTag[2].innerHTML);

// let elementoHtmlClass1 = document.getElementsByClassName("objetos");
// for(const item of elementoHtmlClass1){
//     console.log(item.innerHTML);
// // // };
// // let saludo2 = document.getElementById("saludo");
// // saludo2.innerHTML = "holaaaa"

// let saludo3 = document.getElementById("saludo");
// let seccion = prompt("Introduzca saludo");

// // if(seccion === "Hola"){
// //     saludo3.innerHTML = "Hola Buen dia"
// } else if (seccion === "Chau"){
//     saludo3.innerHTML = "Adios"
// } else{
//     saludo3.innerHTML = "otra vez"
// };

// if(seccion === "Hola"){ 
//     saludo3.innerHTML = "<h1>Hola Buen dia</h1>"
// } else if (seccion === "Chau"){
//     saludo3.innerHTML = "<h1>Adios</h1>"
// } else{
//     saludo3.innerHTML = "<h1>otra vez</h1>"
// };
// if(seccion === "Hola"){ 
//     saludo3.className = "Azul" //aca le agrego CSS
//     saludo3.innerHTML = "<h1>Hola Buen dia</h1>" //aca modifico el h4 por un h1  cambio la etiqueta
// } else if (seccion === "Chau"){
//     saludo3.className = "Amarillo"
//     saludo3.innerHTML = "<h1>Adios</h1>"
// } else{
//     saludo3.innerHTML = "<h1>otra vez</h1>"
// };
// let tituloH3 = document.createElement("h3");  // Aca agrego un H3
// tituloH3.innerHTML = "<p>Holaaa soy un parrafo dentro de h3</p>" // Aca defino que hay por dentro del H3
// // document.body.append(tituloH3) // aca agrego el h3 al html y lo pongo en el body

// let contenedor11 = document.getElementById ("contenedor1");
// // contenedor11.remove();

// let listaCompleta = document.getElementById("lista")
// const opcionesLista = ["Ramiro", "Denisse", "Nicole", "Julieta", "Facu"]
// opcionesLista.forEach(item =>{
//     let li = document.createElement("li");
//     li.innerHTML = item;
//     listaCompleta.append(li);
// });
let listaProductos = document.getElementById("lista");
const productos33 = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500}, 
];
productos33.forEach(item =>{
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <h3>Nombre: ${item.nombre}</h3>
    <b>Precio: ${item.precio}</b>
    `;
    lista.append(div);
})