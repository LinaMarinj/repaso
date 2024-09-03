let opcionMenu = 0;

do {
  opcionMenu = parseInt(
    prompt(
      "Ingresa una opción: \n1. Ejercicio #1 \n 2.Ejercicio #2 \n3. ejercicio #3 \n4. ejercicio #4 \n0. para salir  "
    )
  );

  switch (opcionMenu) {
    case 1:
      let numero = 0;
      let contador = 0;
      do {
        numero = parseInt(
          prompt("Ingrese un número entero hasta adivinar el número secreto: ")
        );
        if (numero != 0) {
          contador++;
        }
      } while (numero != 0);
      alert("Los intentos fueron: " + contador);

      break;

    case 2:
      let numeroDeVeces = parseInt(
        prompt("Ingresa el número de veces a repetir el mensaje")
      );
      let mensaje = prompt("Ingrese el mensaje: ");
      let contador2 = 0;

      while (contador2 != numeroDeVeces) {
        alert(mensaje);
        contador2++;
      }
      break;

    case 3:
      let suma = 0;

      for (let i = 0; i <= 100; i++) {
        suma = suma + i;
      }
      alert("La suma es: " + suma);
      break;

    case 4:
      break;
  }
} while (opcionMenu != 0);
alert("Saliendo del programa...");
