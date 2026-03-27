const productos = [
  { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
  { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
  { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
  { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
  { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

// mostrar 1 el nombre del primer producto por consola
console.log(productos[0].nombre);

console.log("");

// mostrar cada producto por consola con for of, mostrando solo su nombre y precio
for (const element of productos) {
    console.log(`Producto: ${element.nombre}, Precio: ${element.precio}`);
}
console.log("");

//mostrar cada producto por consola con for each, mostrando su nombre precio 
productos.forEach((element) => {
    console.log(`Producto: ${element.nombre}, Precio: ${element.precio}`);
});

console.log("");    

// mostrar solo los nombre con .map ()
let nombresDeProductos =  productos.map((element) => element.nombre);
console.log(nombresDeProductos);

console.log("");

// mostrar solo los productos de la categoria "Ropa" con .filter()
let soloTipoRopa = productos.filter(element => element.categoria === "Ropa");
console.log(soloTipoRopa);

console.log("");

// mostrar los productos con precio mayor a 3000
let preciosMayoresA3000 = productos.filter(element => element.precio > 3000);
console.log(preciosMayoresA3000);

console.log("");

// mostrar el primer producto que se llame "Gorra" con .find()
let buscarGorra = productos.find(element => element.nombre === "Gorra");
console.log(buscarGorra);

console.log("");

// mostrar si hay algun producto con precio mayor a 1000 con .some()
let hayProductosmayoresA1000 = productos.some(element => element.precio > 1000);
console.log(hayProductosmayoresA1000);

console.log("");
// mostrar si todos los productos tienen un precio mayor a 1000 con .every()
let todosLosProductosTienenPrecioMayorA1000 = productos.every(element => element.precio > 1000);
console.log(todosLosProductosTienenPrecioMayorA1000);

console.log("");

// mostrar si hay algun producto que se llame "campera" con .includes()
let a = nombresDeProductos.includes("Campera");
console.log(a);

console.log("");

// mostrar los productos ordenados por precio de menor a mayor con .sort()
let ordenar = productos.sort((a, b) => a.precio - b.precio);
console.log(ordenar);

console.log("");

// mostrar un mensaje por cada producto con .map() que diga "El producto [nombre] cuesta $[precio] y pertenece a la categoría [categoria]."
let mensajes = productos.map(producto =>
  `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoría ${producto.categoria}.`
);
console.log(mensajes);

console.log("");

// Crear otro array con más productos y combinar ambos arrays utilizando el operador de propagación (...).
let nuevosProductos = [
  { id: 6, nombre: "Bufanda", precio: 2000, categoria: "Accesorios" },
  { id: 7, nombre: "Botas", precio: 7000, categoria: "Calzado" }
];

let productosCombinados = [...productos, ...nuevosProductos];
console.log(productosCombinados);