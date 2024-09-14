const productosConDescuento = [
    { nombre: "Laptop", precioOriginal: 3000000, precioConDescuento: 2700000 },
    { nombre: "Smartphone", precioOriginal: 1500000, precioConDescuento: 1400000 },
    { nombre: "Tablet", precioOriginal: 800000, precioConDescuento: 800000 },
    { nombre: "Monitor", precioOriginal: 500000, precioConDescuento: 450000 },
    { nombre: "Teclado", precioOriginal: 120000, precioConDescuento: 120000 }
];

const hayDescuento = productosConDescuento.some(producto => producto.precioOriginal > producto.precioConDescuento);

console.log("¿Hay algún producto con descuento?", hayDescuento);
