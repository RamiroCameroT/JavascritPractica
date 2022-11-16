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