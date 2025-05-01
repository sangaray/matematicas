function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}

sumar(5, 3); // 8
restar(10, 4); // 6
