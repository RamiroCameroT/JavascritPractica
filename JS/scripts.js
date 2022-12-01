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