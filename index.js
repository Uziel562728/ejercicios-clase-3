let edad = 20;
const nombre = "uzi";

edad = 21;
// nombre = "uziel"; // Esto causará un error porque 'nombre' es una constante

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

const persona = {
  nombre: "uziel",
  edad: 20,
  ciudad: "capital"
};
persona.nombre = "uzi";
console.log(persona);


function prueba() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log(a);
    console.log(b);
    console.log(c);
  }

  console.log(a);
  // console.log(b); // error
  // console.log(c); // error
}

prueba();

const frutas = ["manzana", "banana", "naranja", "uva", "pera"];
frutas.push("fresa");
frutas.unshift("kiwi");

console.log(frutas);

let numeros = [1, 2, 3, 4, 5];
let numerosDobles = [];

for (let i = 0; i < numeros.length; i++) {
  numerosDobles.push(numeros[i] * 2);
}
console.log(numerosDobles);

let colores1 = ["rojo", "verde"];
let colores2 = ["azul", "amarillo"];
let coloresCombinados = colores1.concat(colores2);
console.log(coloresCombinados);

let numeros15 = [1, 2, 3, 4, 5, 6];
console.log(numeros15.slice(1, 5));

let libro = {
  titulo: "El Gran Gatsby",
  autor: "F. Scott Fitzgerald",
  anio: 1925
};

console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.anio);

const persona1 = {
  nombre: "uziel",
  edad: 20,
  ciudad: "capital"
};
persona1.hobby = "tocar guitarra";
persona1.edad = 21;
console.log(persona1);

let calculadora = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  multiplicacion: (a, b) => a * b,
  division: (a, b) => a / b
};

console.log(calculadora.suma(10, 5));
console.log(calculadora.resta(6, 5));
console.log(calculadora.multiplicacion(5, 5));
console.log(calculadora.division(10, 2));

let persona2 = {
  nombre: "Ana",
  edad: 28,
  ciudad: "Buenos Aires"
};

let propiedad = "nombre";
console.log(persona2[propiedad]);

// 4. Template Literals

let nombre1 = "Uziel";
let edad1 = 20;
let profesion = "Estudiante";

let mensaje = `Me llamo ${nombre1}, tengo ${edad1} años y soy ${profesion}.`;
console.log(mensaje);

function calcularTotal(precio, cantidad) {
  let total = precio * cantidad;
  return `El total es: ${total}`;
}

console.log(calcularTotal(100, 3));

let nombreError = "Error de conexión";
let descripcion = "No se pudo conectar al servidor";

let mensajeError = `Ocurrió un ${nombreError}: ${descripcion}`;
console.log(mensajeError);

// 5. Arrow Functions

const saludar = (nombre2) => "Hola, " + nombre2 + "!";
console.log(saludar("Uziel"));

const cuadrado = (numero) => numero * numero;
console.log(cuadrado(4));

const mayor = (a, b) => a > b ? a : b;
console.log(mayor(10, 7));

const cuadrados = (array) => array.map(numero1 => numero1 * numero1);
console.log(cuadrados([1, 2, 3, 4]));

// 6. Métodos de array

let numeros5 = [1, 2, 3, 4, 5, 6];

let pares = numeros5.filter(numero2 => numero2 % 2 === 0);
console.log(pares);

let estudiantes = [
  { nombre: "Ana", edad: 20, calificacion: 8 },
  { nombre: "Juan", edad: 26, calificacion: 9 },
  { nombre: "Pedro", edad: 24, calificacion: 7 }
];

let nombresYEdades = estudiantes.map(estudiante => ({
  nombre: estudiante.nombre,
  edad: estudiante.edad
}));
console.log(nombresYEdades);

let mayorDe25 = estudiantes.find(estudiante => estudiante.edad > 25);
console.log(mayorDe25);

let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);

// 7. Spread Operator

function sumarTodo(...numeros1) {
  return numeros1.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

console.log(sumarTodo(1, 2, 3, 4));

let numeros2 = [10, 5, 20, 8];
let maximo = Math.max(...numeros2);
console.log(maximo);

let persona3 = { nombre: "Ana", edad: 28 };
let datosExtra = { ciudad: "Buenos Aires", profesion: "Diseñadora" };

let personaCompleta = { ...persona3, ...datosExtra };
console.log(personaCompleta);

let arrayConSubarrays = [1, [2, 3], [4]];
let plano = [arrayConSubarrays[0], ...arrayConSubarrays[1], ...arrayConSubarrays[2]];
console.log(plano);

// 8. Destructuring

let persona4 = {
  nombre: "Lucía",
  edad: 30,
  ciudad: "Córdoba"
};

let { nombre: nombre3, edad: edad2 } = persona4;

console.log(nombre3);
console.log(edad2);

function mostrarPersona({ nombre, edad }) {
  console.log(nombre);
  console.log(edad);
}

mostrarPersona({ nombre: "Mario", edad: 35, ciudad: "Rosario" });

let ciudadInfo = ["París", "Francia", 2148000];

let [nombreCiudad, pais, poblacion] = ciudadInfo;

console.log(nombreCiudad);
console.log(pais);
console.log(poblacion);
