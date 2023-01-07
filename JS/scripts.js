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


//---------------------BUCLES----------------------------
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

//WHILE  hacaer una repeticion de codigo hasta que se cumpla una condicion
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

class PersonaNueva{ //hoy en dia se usan estas clases 
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

//arrays con objetos

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


//--------------------------------FUNCIONES AVANZADAS---------------------------------

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

//-------------------------Metodos de Busca y Transformacion-----------------------------

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


//-----------------------MATH------------------------
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


//--------------------DATE----------------------------
console.log(Date());
console.log(new Date("2022 1, 10 23:15:32"));

let hoy = new Date("March 6, 2022 23:45:19");

console.log(hoy.getDay());
console.log(hoy.getFullYear());
console.log(hoy.getMonth());

console.log(hoy.toDateString());
console.log(hoy.toLocaleDateString());
console.log(hoy.toLocaleString());

let navidad = new Date("December 24, 2021");
let hoy1 = new Date();
const milisegundosPorDia = (navidad - hoy1); //aca me lo trae en milisegundos


//-----------------------DOM ------------------------------ pata trabajar con Javascript colocar IDs en el html y para trabajar con CSS utiizar clases

//GetElementById
let elementoHtml = document.getElementById("Aplicacion");
console.log(elementoHtml); // Me trae todo el div  <div id="Aplicacion"> <p>Hola a todos</p> </div>
console.log(elementoHtml.innerHTML); // aca me trae todo lo que esta dentro del div  <p>Hola a todos</p>
console.log(elementoHtml.innerText); //aca solo me trae el texto Hola a todos

//GetElementByClassName
let elementoHtmlClass = document.getElementsByClassName("objetos");
console.log(elementoHtmlClass); // me los trae como si fuera un array
console.log(elementoHtmlClass[0].innerHTML);// Aca me trae lo que esta dentro de la etiqueta li del index 0

//GetElementByTagName

let elementoHtmlTag = document.getElementsByTagName("h3"); // me los trae como si fuera un array
console.log(elementoHtmlTag);
console.log(elementoHtmlTag[2].innerHTML);

let elementoHtmlClass1 = document.getElementsByClassName("objetos"); 
for(const item of elementoHtmlClass1){ //recorremos el array uno por uno
    console.log(item.innerHTML);
};

//Queryselector  (trae como maximo un elemento)
let elementosQueryClass = document.querySelector(".clase") //.clase h2  (si hay q ir a buscar algo dentro de la clase)
let elementosQueryID = document.querySelector("#ID")
let elementosQueryTag = document.querySelector("h2")

//QueryselectorAll  (trae todos los elementos)
let elementosQueryAllClass = document.querySelectorAll(".clase") //.navegacion li  (si hay q ir a buscar algo dentro de la clase)
let elementosQueryAllID = document.querySelectorAll("#ID") //aca solo hay uno ya que los id se usan solo una vez
let elementosQueryAllTag = document.querySelectorAll("h2")

console.log(clase[0]);  //aca solo traigo el primer enlace con index cero


//Modificar el HTML desde Javascript

let saludo2 = document.getElementById("saludo");
saludo2.innerHTML = "holaaaa";

let saludo3 = document.getElementById("saludo");
let seccion = prompt("Introduzca saludo");

if(seccion === "Hola"){ //aca modifico el h4 del HTML directamente el texto
    saludo3.innerHTML = "Hola Buen dia"
} else if (seccion === "Chau"){
    saludo3.innerHTML = "Adios"
} else{
    saludo3.innerHTML = "otra vez"
};

if(seccion === "Hola"){ 
    saludo3.className = "Azul" //aca le agrego CSS
    saludo3.innerHTML = "<h1>Hola Buen dia</h1>" //aca modifico el h4 por un h1  cambio la etiqueta
} else if (seccion === "Chau"){
    saludo3.className = "Amarillo"
    saludo3.innerHTML = "<h1>Adios</h1>"
} else{
    saludo3.innerHTML = "<h1>otra vez</h1>"
};

//Creacion de Nodos  (crear etiquetas en HTML desde Javascript)

let tituloH3 = document.createElement("h3");  // Paso 1 Aca agrego un H3
tituloH3.innerHTML = "<p>Holaaa soy un parrafo dentro de h3</p>" // paso 2 Aca defino que hay por dentro del H3
document.body.append(tituloH3) // Paso 3 Aca agrego el h3 al html y lo pongo en el body


let nuevoEnlace = document.createElement("A");
nuevoEnlace.href = "pagina2"; //aca le creo un href en caso de que sea un enlace
nuevoEnlace.classList.add("clase5"); //aca le agrego una clase en el html
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace); //aca agrego un hijo sobre el contenedor

//con Array simple
let listaCompleta = document.getElementById("lista")  //Aca voy agregando datos al html en base a un array, si yo agrego algo al array, se agrega automaticamente al html
const opcionesLista = ["Ramiro", "Denisse", "Nicole", "Julieta", "Facu"]
opcionesLista.forEach(item =>{
    let li = document.createElement("li");
    li.innerHTML = item;
    listaCompleta.append(li);
});

//con Array con objetos

let listaProductos = document.getElementById("lista"); //Aca traigo el UL del HTML
const productos33 = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500},  //si agrego nuevos productos se agregan automaticamente al html
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

//Eliminar Nodos
let contenedor11 = document.getElementById ("contenedor1"); //primero me lo traigo para javascript y despues lo elimino en base a la variable que le asigne
contenedor11.remove();


//----------------------------------EVENTOS----------------------------------

//CLICK

//Primera forma => DOM EventListener  element.addEventListener(event, function);  aca a la function no ponerle (), sino se ejecutaria todo el tiempo . 

let boton = document.getElementById("boton");
const saludar12 = () => {
    alert("Hiciste click en el boton")
};
boton.addEventListener("click", saludar12); 

//con parametro en la funcion
let boton123 = document.getElementById("boton"); 
const ejecutar = (apellido) => {
    console.log("Hola tu apellido es", apellido)
};
boton123.addEventListener("click", () => ejecutar("Juli"))

//Segunda forma
let boton1 = document.getElementById("boton");
boton1.onclick = saludar12; 

boton1.onclick = () => saludar12("Julieta"); // con parametro


/*
-----------Eventos del mouse-------------
-mousedown/mouseup
-mouseover/mouseout
-mousemove
-click

-----------Eventos del teclado-------------
-keydown
-keyup

-change   (cuando me salgo de un lugar y paso a hacer otra cosa, se refiere al cambio)

*/

//INPUT

let input12= document.getElementById("nombre1");
input12.addEventListener("input", () => {
    console.log(input12.value); //hacer referencia a input.value ( para hacer cosas en base a lo que se agregue en el input)
});

//SUBMIT
let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //esto hace que los datos cargados en el formulario no se borren una vez que ponemos enviar y no se recargue la pagina
    alert("hola")
});

let formulario1 = document.getElementById("formulario")
formulario1.addEventListener("submit", (e) => { //la e (parametro) se utiliza para traer los inputs del formulario despues
    e.preventDefault(); 
    let inputs = e.target.children; //aca se van guardando los inputs a partir de la e
    let usuario11 = { //aca creo un usuario por cada input, cada vez que aprietan submit
        nombre: inputs[0].value,
        aoellido: inputs[1].value,
    }
    console.log((inputs[0].value)); //puedo sino poner (inputs) y me los trae todo   input[0] se refiere al primer input del html, que este caso es el de type text
    localStorage.setItem("Nombre", inputs[0].value)
});


//Agregar elementos a un carrito
const productos34 = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500},  //si agrego nuevos productos se agregan automaticamente al html
];

productos34.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <h3>Nombre: ${item.nombre}</h3>
    <b>Precio: ${item.precio}</b>
    <button id="boton${item.id}">Agregar</button>
    `;

    document.body.append(div);
    let boton = document.getElementById(`boton${item.id}`);

    const ejecutar = (id) =>{
        console.log(id);
    }
    boton.addEventListener("click", () => ejecutar(item.id));
})

//--------------------------------STORAGE-------------------------------------

//LOCAL STORAGE (no se puede guardar una funcion, ya que despues no funcionaria, lo mismo con arrays y objetos)  para guardar en carrito, en favoritos, puntajes
//guardar en el local storage
localStorage.setItem("nombre", "Ramiro"); //lo primero es la clave y despues el valor. se guarda en el navegador y por mas de que salga y vuelva  a entrar sigue guardado
localStorage.setItem("apellido", "Julieta");
//recuperar item del local storage
let nombre = localStorage.getItem("nombre");
console.log(nombre);

//SESION STORAGE
sessionStorage.setItem("nombre", "Julieta") // aca si cierro la pagina y la vuelvo a abrir se pierde

//recorrer storage

for(let i = 0 ; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log("clave", clave);
    console.log("valor", localStorage.getItem(clave));
};

//Eliminar datos del storage (para local y sesion)
localStorage.removeItem("nombre") // le ponemos el nombre de la clave. aca se borra uno por uno
localStorage.clear(); // borra todo el storage

//-----------JSON----------
//sirve para guardar en el storage arrays y objetos

let objeto1 = {nombre:"Ramiro", apellido: "Camero", edad: 26};
localStorage.setItem("Objeto", JSON.stringify(objeto1)); //uso stringfy para guardarlo como objeto o array

let arreglo12 = [1, 2, 3, 4, 5];
localStorage.setItem("Arreglo", JSON.stringify(arreglo12));

//recuperar objeto o array del storage
let objeto2 = localStorage.getItem("Objeto");
console.log(JSON.parse(objeto2)); //aca uso parce para traerlo como objeto o array, sino me lo trae mal

let arreglo = JSON.parse(localStorage.getItem("Arreglo")) // otra forma para que ya nos quede la variable con el array o objeto

//aca me traje el array del storage y lo pongo en el html
let lista = document.getElementById("lista")

arreglo12.forEach(item =>{
    let li = document.createElement("li");
    li.innerHTML = item;
    lista.append(li);
});

//Carrito

const productosCarrito = [
    {id: 1, nombre: "camisa", precio: 3500},
    {id: 2, nombre: "pantalon", precio: 3000},
    {id: 3, nombre: "medias", precio: 1800},
    {id: 4, nombre: "cinturon", precio: 1500},
    {id: 5, nombre: "Gorra", precio: 4500}  //si agrego nuevos productos se agregan automaticamente al html
];
localStorage.setItem("carrito", JSON.stringify(productosCarrito)); //aca arme carrito

let carrito = [];
let carritoStorage = localStorage.getItem("carrito"); //lo que esta en el storage lo guardo en esta nueva variable
let carritoHTML = document.getElementById("carrito12") //aca llame la seccion en el html para despues agregar los divs

if(carritoStorage){
    carrito = JSON.parse(carritoStorage) //aca todo lo que esta en carrito storage lo guardo en la variable carrito
};

carrito.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Nombre: ${item.nombre}</h2>
    <p>Precio: ${item.precio}</p>
    `;
    carrito12.append(div)
});

//boton para eliminar los elementos del localstorage (osea del carrito)
let boton22 = document.getElementById("eliminar");

boton22.addEventListener("click", () => {
    localStorage.clear();
    alert("Carrito eliminado");
    location.reload(); // para que se recargue sola la pagina
});



//Ingresar con usuarios
let usuario22;
let usuarioStorage = localStorage.getItem("usuario22");  // si uso sesion cada vez que salga de internet y vuelva a entrar se me va a borrar el storage y me va a volver a pedir el nombre
console.log(usuarioStorage);

if(usuarioStorage){
    usuario22 = usuarioStorage;
    let mensaje = `Bienvenido ${usuario22}`
    alert(mensaje)
} else {
    usuario22 = prompt("Ingrese su nombre");
    localStorage.setItem("usuario", usuario22);
    let mensaje = `Eres nuevo, Bienvenido ${usuario22}`
    alert(mensaje)
};


//---------------OPERADORES AVANZADOS----------------

//++
let numero22 = 5; 
numero22 = numero22 +1;
numero22 += 1;
numero22++;

//--
let numero23 = 5;
numero23 = numero23 - 1;
numero23 -= 1;
numero23--;


/*Operador ternario (remplaza el if else)

condicion ? codigo verdadero : codigo falso */

let edad = 18;
if (edad >= 18) {
    console.log("Podes entras a la fiesta");        
} else{
    console.log("No podes entrar");
};

edad >= 18 ? console.log("Podes entras a la fiesta") : console.log("No podes entrar"); //forma resumida


let usuario23 = {
    Nombre: "Ramiro",
    Edad: 17
};
const permiso = usuario23.Edad >= 18 ? true : false; //se le asigna true or false a la variable permiso
permiso ? console.log("Podes entras a la fiesta") : console.log("No podes entrar");  //cuando pongo permiso es lo mismo que poner permiso = true


//&& y ||

/* operador1 && operador2    si operador1 representa algo verdadero, retorna operador2, sino retorna operador1 
   operador1 || operador2    si operador1 representa algo falso, retorna operador2, sino retorna operador1 
*/

const carrito55 = [];

if (carrito55.length === 0) {
    console.log("El carrito esta vacio");
}

carrito55.length === 0 && console.log("El carrito esta vacio"); //si carrito.length es igual a 0, que aplique lo que esta despues del &&

const carrito56 = JSON.parse(localStorage.getItem("Carrito")) || [];  //Si no existe algo en el local storage, la variable carrito queda [], y si existe algo se lo pone como valor


//Operadpr Nullish

/*Aca el operador ?? funciona igual que el ||*/

console.log(0 ?? "Nullish"); //solo va a tirar Nullish cuando la primera parte sea null o undefined


// objeto?.metodo

const usuario34 = null;
console.log(usuario.nombre || "El usuario no existe"); //aca me tira que no existe ya que como usuario no es un objeto, te tira error ya que cuando usas el. hace referencia al objeto
Console.log(usuario?.nombre || "El usuario no existe"); //aca me va a tirar el usuario no existe, ya que al ponerle ?, si no es un objeto no pasa nada y lo toma como falso


//Destructuracion de objetos

let usuario11 = {
    Nombre: "Ramiro",
    Edad: 26,
    Profesion: "Contador",
    telefonos: {
        celular: 112923823,
        casa: 45155454,
    }
};

// let nombre11 = usuario11.Nombre;
// let edad11 = usuario11.Edad;


let {Nombre: NombreNuevo, Profesion, telefonos: {casa}} = usuario11; // en los parametros pongo el nombre de los del objeto. saco las propiedades que quiero del usuario11. con lo de nombtre nuevo le cambie el nombre al elemento (key) del objeto
console.log(NombreNuevo, Profesion, casa);

const destructurar = ({Nombre, Profesion}) => { //desestructurar con una funcion y el los parametros les ponemos los keys del objeto
    console.log(Nombre, Profesion);
};
destructurar(usuario11);


//Destructuracion de arrays

const nombres123 = ["Julieta", "Sofia", "Ramiro", "Nicole"];
const [a, b, , c] = nombres123;  //aca saltee a Ramiro con el espacio
console.log(a, b, c);


//Cambio de valores (...)

let persona44 = "Pepito" // para datos primitivos, ejemplo strings, numbers, booleans.- persona44 se forma en un cajoncito aparte que persona45
let persona45 = persona44; 
persona45 = "Mariana";
console.log(persona44); 

let persona54 = {nombre:"Ramiro", Edad: 26}; //esto son datos no primitivos, entonces no se forman cajitas separadas, si le asignamos a persona55 el valor de persona54, cuando se modifique cualquiera de los dos, afecta a ambos ya que trabajan sobre la misma cajita
let persona55 = persona54;
persona54.nombre = "Julieta";
console.log(persona54);

let persona56 = {nombre:"Ramiro", Edad: 26}; 
let persona57 = {
    ...persona56,
    direccion:"Av"
}; //aca formamos un nuevo objeto y ya no quedan ambos en la misma cajita. se hace una copia de persona56 y le agregue una nueva key, que si ya existia la remplazaba y sino la crea nueva
persona57.nombre = "Julieta";
console.log(persona56);

const numeros456 = [1, 2, 45, 65, 455, 84, 6];
console.log(Math.max(...numeros456)); //si no le pongo los tres puntitos no me funcionaria



//LUXON

const DateTime = luxon.DateTime;  //siempre poner esta primera variable

const now = DateTime.now().toLocaleString(DateTime.DATE_FULL) // en donde dice date full le vamos cambiando los formatos. lo otro queda igual

console.log(now.year);
console.log(now.month);
console.log(now.day);

const now1 = DateTime.now().toLocaleString(DateTime.SHORT)
const sumar = now1.plus([ hours= 1, minutes = 27 ]);  //aca le sumo a la fecha actual
const restar1 = now1.minus([ month= 1, days = 27 ]);  //aca le resto a la fecha actual


//para calcular intervalos
const Interval = luxon.Interval;

const now2 = DateTime.now();
const later = DateTime.local(1996, 02, 15);

const dif = Interval.fromDateTimes(now2, later);

console.log(dif.length("days")); // puedo poner years, months, hours, minutes, etc.