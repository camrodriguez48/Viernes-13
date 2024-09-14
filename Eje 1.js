const productos = [
    { nombre: "Laptop", precio: 3000000 },
    { nombre: "Smartphone", precio: 1500000 },
    { nombre: "Tablet", precio: 800000 },
    { nombre: "Monitor", precio: 500000 },
    { nombre: "Teclado", precio: 120000 },
    { nombre: "Mouse", precio: 80000 },
    { nombre: "Impresora", precio: 400000 },
    { nombre: "Parlantes", precio: 150000 },
    { nombre: "Smartwatch", precio: 350000 },
    { nombre: "Cámara", precio: 1000000 },
    { nombre: "Auriculares", precio: 200000 },
    { nombre: "Disco Duro", precio: 300000 },
    { nombre: "Memoria USB", precio: 50000 },
    { nombre: "Microfono", precio: 100000 },
    { nombre: "Silla Gaming", precio: 800000 },
    { nombre: "Proyector", precio: 1200000 },
    { nombre: "Router", precio: 200000 },
    { nombre: "Consola", precio: 1800000 },
    { nombre: "Drone", precio: 2200000 },
    { nombre: "Televisor", precio: 2500000 }
];

const productosConImpuesto = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.15
    };
});

console.log(productosConImpuesto);
