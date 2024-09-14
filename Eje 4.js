const hayProductoBarato = productos.some(producto => producto.precio < 50000);

console.log("¿Hay algún producto que cueste menos de $50,000?", hayProductoBarato);
