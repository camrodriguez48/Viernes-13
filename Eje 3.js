const totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);

console.log("Total de la compra:", totalCompra);
