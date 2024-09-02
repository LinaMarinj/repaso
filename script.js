let opcion = 0;

do {

    opcion = parseInt(prompt("Digita una opción: \n 1. ejercicio 1 \n 2. ejercico 2 \n 3. ejercicio 3  \n 4. ejercicio 4 \n 5. ejercicio 5 \n 0. salir "));

    switch (opcion) {

        case 1:
            /* pedir edad 
           imprimir si es menor de edad o mayor 
           */
            const edad = parseInt(prompt("Ingrese su edad: "));

            edad < 18 ? alert("Eres menor de edad") : alert("Eres mayor de edad");

            break;

        case 2:
            /* numero entero y decir par o impar */

            let numero = parseFloat(prompt("ingresa un número entero: "));

            if (numero % 2 == 0) {
                alert("El número es par");
            } else {
                alert("El número es impar");
            }
            break;

        case 3:

            let numero1 = parseInt(prompt("Ingresa el número 1: "));
            let numero2 = parseInt(prompt("Ingresa el número 2: "));
            let numero3 = parseInt(prompt("Ingresa el número 3: "));

            if (numero1 > numero2 && numero1 > numero3) {
                alert("EL número " + numero1 + " es el mayor");
            } else if (numero2 > numero1 && numero2 > numero3) {
                alert("El número " + numero2 + " es el mayor")
            }
            else {
                alert("El número " + numero3 + " es el mayor");
            }

            break;

        case 4:
            let numeroElegido = parseInt(prompt("Ingresa un número del 1 al 12: "));

            switch (numeroElegido) {
                case 1:
                case 2:
                    alert("Es invierno");
                    break;

                case 3:
                case 4:
                case 5:
                    alert("Es primavera");
                    break;

                case 6:
                case 7:
                case 8:
                    alert("Es verano");
                    break;

                case 9:
                case 10:
                case 11:
                    alert("Es otoño");
                    break;

                case 12:
                    alert("Es invierno");
                    break;

                default:
                    alert("Opción invalida");
                    break;
            }
            break;

        case 5:
            const valorCompra = parseInt(prompt("Ingresa el valor de la compra: "));
            let tipoCliente = prompt("Que tipo de cliente eres: \na. Nuevo  \nb. plata \nc. oro \nd. diamante");
            const descuentoPlata = (valorCompra * 0.05);
            const descuentoOro = (valorCompra * 0.10);
            const descuentoDiamante = (valorCompra * 0.15);


            switch (tipoCliente) {

                case "a":
                    alert("Eres cliente nuevo, el valor de tu compra es de: $" + valorCompra);
                    break;

                case "b":
                    alert("Eres cliente plata, toma un descuento del 5% en tu compra: $" + (valorCompra - descuentoPlata));
                    break;

                case "c":
                    alert("Eres cliente oro, toma un descuento del 10% en tu compra: $" + (valorCompra - descuentoOro));
                    break
                case "d":
                    alert("Eres cliente diamante, toma un descuento del 15% en tu compra: $" + (valorCompra - descuentoDiamante));
                    break
                default:
                    alert("opción invalida");
                    break;
            }

            break;

        default:
            alert("Saliendo del programa");
            break;
    }
} while (opcion != 0);















