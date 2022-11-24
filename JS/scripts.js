//COMENTARIOS

/*esto es un comentario
puedo tener varias lineas */

// Esto es un comentario de solo una linea, si bajo de linea se me va del comentario (CTRL + K + C)



//VARIABLES

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

//FUNCIONES

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
