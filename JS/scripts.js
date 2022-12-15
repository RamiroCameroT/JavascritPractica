//COMENTARIOS

/*esto es un comentario
puedo tener varias lineas */

// Esto es un comentario de solo una linea, si bajo de linea se me va del comentario (CTRL + K + C)



//----------------------VARIABLES----------------------

var variableVar = "Audifonos Gamer"; //se puede modificar despues. ya no se usa VAR
let variableLet = 20;  //se puede modificar despues
const variableConst = "no se puede modificar" //queda definida y no se puede modificar despues


let variable1 = "8",
    variable2 = "9",
    variable3 = "hola"; //aca cree varias variables a la vez

variable1 = "Computadora"; //le cambie el valor a la variable1



//CONSOLO.LOG

let precio = 600;
let cantidad = 100;
let total = precio * cantidad;

console.log(precio * cantidad);

console.log(total);

console.log("total", typeof(total)); //me dice que tipo de dato es

console.log(typeof(variable3));

let saludo = "Hola";
let apellido = "Carlos";

let saludoCompleto = saludo + " " + apellido; //Aca concatene strings en base a las variables
let saludoCompleto1 = `${saludo} ${apellido} buen dia`; //Aca concatene strings de mejor forma
console.log(saludoCompleto1);




//PROMPT + ALERT


let nombreIngresado = prompt("Ingrese su nombre"); //siempre devuelve un string. si quiero que me tome el numero ponerle parseint o float(para decimales)
console.log(nombreIngresado);
let salida = `Hola ${nombreIngresado}`;
alert(salida)

let numero = parseFloat(prompt("Ingrese un numero"));
let numero2 = 8;
let hola = numero + numero2;
alert(`la suma es ${hola}`);
//parseInt para numero enteros cuando ingresan los datos en Prompt. sino ponemos esto lo toma todo como string y no permitiria hacer calculos matematiocs con los numeros.
//parseFloat para numeros decimales


//CONDICIONALES (IF ELSE ELSE IF)


let respuesta = prompt("hizo la tarea???").toLocaleLowerCase()

if(respuesta == "si"){
    alert("puede salir a jugar");
}else if(respuesta ==="no"){
    alert("a estudiar");
}else{
    alert("contestar BIEN");
}

//=== compara valor y tipo de dato
//== compara solo valor

let = "andres"
if(!"andres".includes("s")){ //aca anulo el inlcudes y es si pasa lo opuesto y me trae el valor falso
    console.log("V tiene s");
}else{
    console.log("F no tiene s");
}

//FOR

let Numero = parseInt(prompt("ingrese un numero"));
for(let i = 0; i < 20; i++){
    let resultado = numero * 1;
    let mensaje = `el numero ${Numero} multiplicado por ${i} es igual a ${resultado}`;
    alert(mensaje)
}

//BREAK 

for(let i=0; i<10; i++){
    if(i===7){
        console.log("estamos en el break 7");
        break
    }
    console.log(i);
}

//CONTINUE

for(let i=0; i<10; i++){
    if(i===7){
       continue
    }
    console.log(i);
}

//WHILE
let usuario = prompt("ingresar usuario").toLocaleUpperCase();
while(usuario != "ANDRES"){
    alert("ingresar nombre de usuario correcto");
    usuario = prompt("ingresar usuario").toLocaleUpperCase();
};
alert("Bienvenido Andres");


// //DO WHILE
let repetir = false;
do{
    console.log("entramos al while");
}while(repetir);

//SWITCH
let moneda = "ARS";
switch (moneda) {
    case "URU":
        console.log("Es de uruguay")
        break;
    case "BR":
        console.log("es de brasil");
        break;
    case "ARS":
        console.log("es de argentina");
        break;
    default:
        console.log("es de otro pais");
        break;
};

//------------------------------FUNCIONES--------------------------------------

function suma(num1, num2) {
    let resultado= num1 + num2;
    console.log(resultado);
}
suma(10, 90);

function sumar(num1, num2) {
    let resultado= num1 + num2;
    alert(resultado);
}

let numero1 = parseInt(prompt("ingrese numero 1"));
let numero3 = parseInt(prompt("ingrese numero 2"));
sumar(numero1, numero3);



function sumarr(num10, num20) {
    let resultado = num10 + num20;
    return resultado; //el return me permite guardar una variable en una funcion para poder utilizarla despues
}

let resultado1 = sumarr(52, 65);
console.log(resultado1);

//funcion con flecha
const suma = (valor1, valor2) => {
    return valor1 + valor2
}
console.log(suma(2, 5));

const suma1 = (valor3, valor4) => valor3 + valor4;
console.log(suma1(21, 5));

const suma2 = valor5 => 5 + valor5;
console.log(suma2(6));

const saludar = () => console.log("Hola");
saludar();


const suma22 = valor5 => {
    let result = 5 + valor5;
    console.log(result);
}
suma2(21);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioProducto = 500;
let descuento = 50;

let resultado = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(resultado);


//------------------------------OBJETOS----------------------------------

const persona1 = {
    nombre:"Ramiro",
    edad: 26,
    profesion: "abogado"
   
}

persona1.profesion = "contador"; //Aca estoy modificando una propiedad del objeto
persona1["profesion"] = "Programador";

persona1.apellido = "Camero"; //Agregue esta propiedad al objeto
delete persona1.edad; //Elimino una propiedad del objeto
console.log(persona1);


//CONSTRUCTORES DE OBJETOS
function Persona(nombrePers, apellidoPers, edadPers) {
    this.Nombre = nombrePers;
    this.Apellido = apellidoPers;
    this.Edad = edadPers;  
}

const persona123 = new Persona("Pepito","Camero", 28);
const persona1234 = new Persona("Alan","Perez", 68);
console.log(persona1234.Edad);


function PersonaNew(info) { //otra forma para no poner todos los parametros cuando son muchos
    this.Nombre = info.nombrePers;
    this.Apellido = info.apellidoPers;
    this.Edad = info.edadPers; 
}
const persona12345 = new PersonaNew({ //no hace falta respetar el ordem
    edadPers: 56,
    nombrePers: "Ramiro",
    apellidoPers: "Camero"
});

function Persona(nombrePers, apellidoPers, edadPers) {
    this.Nombre = nombrePers;
    this.Apellido = apellidoPers;
    this.Edad = edadPers;
    this.hablar = function(){
        return `Hola mi nombre es ${this.Nombre} y tengo ${this.Edad} años`;
    }  
}

const persona1 = new Persona("Ramiro", "Camero", 26);
const persona2 = new Persona("Ramirddddo", "Camero", 276)
console.log(persona2.hablar());

class PersonaNueva{
    constructor (nombrePN, apellidoPN, profesionPN = "Contador"){ //establezco contador por defecto
        this.Nombre = nombrePN;
        this.Apellido = apellidoPN;
        this.Profesion = profesionPN
    }
    hablar(){
        return `Hola mi nombre es ${this.Nombre} y trabajo como ${this.Profesion}`;
    }
}
const personaNueva1 = new PersonaNueva("Ramiro", "Camero");
console.log(personaNueva1.hablar());

//----------------------------------ARRAYS-----------------------------------------

const arreglo1= ["julieta", 2, true, "Gomez",1 ,4 ,5]; //este es el arreglo
console.log(arreglo1[5]); // llsmsd en base al index, siempre arranca desde 0

for(let i = 0; i < arreglo1.length; i++){ //aca involucro un for y lo que hago es que arranque i desde 0 y vaya aumentando de a uno, asi me trae todos los valores del array
    console.log(arreglo1[i]);
}

console.log(arreglo1.length); //me dice cuantos elmentos tiene un arreglo
arreglo1.push("Agustin"); //Agrego un elemento a un arreglo al final
arreglo1.unshift("hola"); //Agrego un elemento a un arreglo al principio
arreglo1.pop(); //Elimina el ultimo elemento
arreglo1.shift(); //Elimina el primer elemento
arreglo1.splice(1,3); // sirve para eliminar y se marca desde donde se arranca (el 1 seria el index 1), y eliminaria ese y dos mas hacia la derecha (en total tres)
arreglo1.reverse(); //invierte el orden de los elementos del arreglo.
console.log(arreglo1.join("---")); // transforma en un string todo el arreglo y divide cada elemento en base a lo que le pongas entre los parentesis

const arreglo2 = [1, 2, 3, 4];
const arreglo3 = ["hola", "adios", 6, 7, 8];
const arregloUnido = arreglo3.concat(arreglo2); //aca concatene dos arreglos. el que se pone primero es el que va primero. los otros dos arreglos siguien existiendo.

const corte = arreglo3.slice(1,3); // aca recorta un arreglo. el primer numero es del index desde donde parte y el segundo es hasta el indice que se quiere ir menos 1.

console.log(arreglo3.indexOf("hola")); // aca me tira el index en el cual se encuentra posicionado lo que buscamos dentro del parentesis dentro de un arreglo.

console.log(arreglo3.includes("adios")); // el includes lo que hace es buscar dentro del arreglo para ver si incluye lo que buscamos dentro del parentesis


//funcion para eliminar datos de un arreglo
const nombres = ["Ana", "Sofia", "Alejandra"];

const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre);

    if (index != -1) {  //cuando se busca la posicion de un elemento en un array y no lo encuentra nos devuelve el -1
        nombres.splice(index, 1);
    };

    console.log(nombres);
    
}

eliminar("Sofia");

//arrays con onbjetos

const productosArray = [
    {id: 1, nombre: "Ramiro", apellido: "Camero"},
    {id: 1, nombre: "Julieta", apellido: "Gomez"},
    {id: 1, nombre: "Nicole", apellido: "Fofor"},
];

for (const producto of productosArray){  //esta forma de usar for remplaza al for en los arrays con objetos.... se le puede poner constproducto o cualquier otro nombre ( seria como el i en el otro caso. es el iterador)
    console.log(producto.apellido); //aca si le agrego el .apellido por ejemplo hago que solo me traiga ese elemento de todos los productos.
};


//ir agregando objetos a un array con un constructor
class Producto {
    constructor(nombreP, apellidoP, edadP){
        this.Nombre = nombreP;
        this.Apellido = apellidoP;
        this.Edad = edadP;
    }
};
const productos = [];

productos.push(new Producto("Ramiro", "Camero", 26));
productos.push(new Producto("Juli", "Gomez", 27));
productos.push(new Producto("Jose", "Pepe", 23));
console.log(productos);


//FUNCIONES AVANZADAS

//Son funciones que reciben por parametro una funcion o retornan una funcion


function mayorQue(n){ // esta es una funcion que retorna una funcion
    return m => m > n;
};
let mayorQueCinco = mayorQue(5);
console.log(mayorQueCinco(6));

function operaciones (operacion){
    if(operacion === "sumar"){
        return (x, y) => x + y;
    }else if(operacion === "restar"){
        return (x, y) => x - y;
    }else if(operacion === "multiplicar"){
        return (x, y) => x * y;
    }else{
        return (x, y) => x / y;
    };
};

let suma = operaciones("sumar"); //(x, y) => x + y;
console.log(suma(6, 90));

let restar = operaciones("restar");
console.log(restar(9, 5));

let multiplicacion = operaciones("multiplicar");
console.log(multiplicacion(2, 50));

let division = operaciones();
console.log(division(80, 8));


let iteradora = (arreglo, funcion) => { //me tira error
    for (const item of iteradora) {
        funcion(item);
    };
};

iteradora ([1, 2, 3, 4], console.log);

//Metodos de Busca y Transformacion

//FOR EACH (es un metodo de los arreglos para recorrer los arreglos y cada uno de sus elementos)

const numbers = [1, 2, 3, 4, 5, 6];

for (const numero66 of numbers){
    console.log(numero66);
};

numbers.forEach( numero => { //ponemos una arrow function dentro del foreach. Le ponemos numero como parametro
    console.log(numero);
});

//FIND (encuentra el primer elemento que cumpla la condicion)

const productos5 = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500}, 
];

let encontrado = productos5.find (item => item.nombre === "medias"); //al igual que antes, le metimos una arrow function

console.log(encontrado);

//otra forma con prompt

let nombre5 = prompt("ingrese el producto que esta buscando");

let producto501 = productos5.find (item => item.nombre === nombre5);

let mensaje5 = `El precio del producto ${nombre5} es ${producto501.precio}`;

alert(mensaje5);


//FILTER  (lo que hace es filtrar) genera un nuevo arreglo con los productos filtrados

const productos6 = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500}, 
];

const filtro6 = productos6.filter(item => item.precio > 2000);

console.log(filtro6);

//otra forma

let precioMinimo = parseInt(prompt("Ingrese precio minimo"))
const filtro601 = productos6.filter(item => item.precio > precioMinimo);

filtro601.forEach (item => { //item es el parametro de la arrow function
    let mensaje = `
    id: ${item.id}
    nombre: ${item.nombre}
    precio: ${item.precio}`
    ;

    alert(mensaje)
});

//SOME (busca si uno de los elementos del array cumple determinada condicion y nos devuelve true or false)

const productos68 = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500}, 
];

console.log(productos68.some(
    item => item.nombre === "camisa"
));

let nombre701 = prompt("ingrese el producto a buscar");
alert(productos68.some(
    item => item.nombre === nombre701
));

if(productos68.some ( item => item.nombre === nombre701)){
    alert("el producto se encuentra disponible")
}else{
    alert("producto no disponible")
};


//MAP (crea un nuevo arreglo solo con lo que mapeamos o sirve para actualizar arreglos)

const productos603 = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500}, 
];

let nombres603 = productos603.map(item => item.nombre); //aca se crea un arreglo solo con los nombres
console.log(nombres603); 

const actualizacion = productos603.map(  //aca se actualizan los precios y se forma un nuevo arreglo con los precios actualizados
    item => {
        return {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio + item.precio * 1.10
        }
    }
);

console.log(actualizacion);


//REDUCE (Sirve para sumar cosas de los arrays, por ejemplo el total de los precios, el total de unidades)

const numeros36 = [1, 2, 3, 4, 5];

const total36 = numeros36.reduce((acumulador, item) => acumulador + item, 0); //el primer parametro ((acumulador, item) => acumulador + item), es la arrow function, y el segundo es el valor inicial del parametro acumulador dentro de la arrow function

console.log(total36);

const productos607 = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500}, 
];

let total607 = productos607.reduce((acumulador, item) => acumulador + item.precio, 0);  //aca sumo los precios de cada producto
console.log(total607);


//SORT (sirve para ordenar un array, de menor a mayor o inversa, alfabeticamante o inversa)

const numeros365 = [1, 20, 37, 400, 5];

console.log(numeros365.sort((a, b) => a - b));  //aca ordena de forma ascendente
console.log(numeros365.sort((a, b) => b - a));  //aca ordena de forma descendente


const productos609 = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500}, 
];

console.log(productos609.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;  //aca ordena el array alfabeticamente en base al nombre de cada objeto  a-z
    }
    if (a.nombre < b.nombre) {
        return -1  //si intercambiamos el -1 por 1 y arriba el 1 por -1, lo ordena de atras para adelante  z-a
    }
    return 0;
}));


//MATH
console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(1, 5, 8, 90, 108, 5, 87)); //busca el maximo
console.log(Math.min(1, 5, 8, 90, 108, 5, 87)); //busca el minimo
console.log(Math.ceil(5.7)); //lo redondea para arriba
console.log(Math.floor(5.7)); //lo redondea para abajo
console.log(Math.round(5.7)); // lo redondea al mas cercano
console.log(Math.sqrt(9)); //retorna la raiz cuadrada
console.log(Math.random()); // genera un numero al azar entre 0 y 1
console.log(Math.random() * 50); // genera un numero al azar entre 0 y 50  los puedo combinar con cualquier otro de math


//DATE
console.log(Date());
console.log(new Date("2022 1, 10 23:15:32"));

let hoy = new Date("March 6, 2022 23:45:19");

console.log(hoy.getDay());
console.log(hoy.getFullYear());
console.log(hoy.getMonth());

console.log(hoy.toDateString());
console.log(hoy.toLocaleDateString());
console.log(hoy.toLocaleString());

let navidad = new Date("DEcember 24, 2021");
let hoy1 = new Date();
const milisegundosPorDia = (navidad - hoy1); //aca me lo trae en milisegundos
