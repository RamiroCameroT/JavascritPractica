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

let numero = parseInt(prompt("ingrese numero"));
for(let i=1; i<=5; i++){
    alert("Hola");
};