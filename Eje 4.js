const hayProductoBarato = productos.some(producto => producto.precio < 50000);

console.log("�Hay alg�n producto que cueste menos de $50,000?", hayProductoBarato);
