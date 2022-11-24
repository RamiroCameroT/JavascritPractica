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

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioProducto = 500;
let descuento = 50;

let resultado = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(resultado);
