let agruparNumeros = [];
let operadorActual = 0;
let resultado = 0;
let operador = null;

// Recopila los números
function numeros(numero) {
  agruparNumeros.push(numero);
  mostrarNumeroCompleto();
}

function mostrarNumeroCompleto() {
  // Convertir el array a una cadena de números
  operadorActual = parseInt(agruparNumeros.join(""));
  // Renderiza en el HTML para mostrar el número
  let visor = document.getElementById("numeroACalcular");
  visor.innerHTML = `${operadorActual}`;
}

// Funciones para botones de números
function buttonNumero_0() {
  numeros(0);
}
function buttonNumero_1() {
  numeros(1);
}
function buttonNumero_2() {
  numeros(2);
}
function buttonNumero_3() {
  numeros(3);
}
function buttonNumero_4() {
  numeros(4);
}
function buttonNumero_5() {
  numeros(5);
}
function buttonNumero_6() {
  numeros(6);
}
function buttonNumero_7() {
  numeros(7);
}
function buttonNumero_8() {
  numeros(8);
}
function buttonNumero_9() {
  numeros(9);
}

// Función para manejar las operaciones
function manejarOperacion(op) {
  if (operador !== null) {
    calcularResultado();
  } else {
    resultado = operadorActual;
  }
  operador = op;
  agruparNumeros = []; // Reiniciar el array para el próximo número
  operadorActual = 0;
}

function btnOperadorSuma() {
  manejarOperacion("+");
}

function btnOperadorResta() {
  manejarOperacion("-");
}

function btnOperadorMultiplicacion() {
  manejarOperacion("*");
}

function btnOperadorDivision() {
  manejarOperacion("/");
}

// Actualizar y mostrar el resultado
function actualizarResultado() {
  let visor = document.getElementById("numeroACalcular");
  visor.innerHTML = `${resultado}`;
}

// Función para calcular el resultado final
function calcularResultado() {
  switch (operador) {
    case "+":
      resultado += operadorActual;
      break;
    case "-":
      resultado -= operadorActual;
      break;
    case "*":
      resultado *= operadorActual;
      break;
    case "/":
      if (operadorActual !== 0) {
        resultado /= operadorActual;
      } else {
        alert("No se puede dividir por cero");
        return;
      }
      break;
  }
  operador = null;
  operadorActual = resultado;
  actualizarResultado();
}

// Función para el botón de igual
function btnOperadorIgual() {
  calcularResultado();
}

// Placeholder para operadores no definidos
function buttonNumero_a() {
  alert("Función no definida");
}
function buttonNumero_b() {
  alert("Función no definida");
}
function buttonNumero_c() {
  alert("Función no definida");
}
function buttonNumero_d() {
  alert("Función no definida");
}
