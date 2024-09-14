const nombresUsuarios = usuarios.reduce((cadena, usuario) => cadena + usuario.nombre + " ", "").trim();

console.log("Nombres concatenados:", nombresUsuarios);

