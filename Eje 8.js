const usuarios = [
    { nombre: "Juan", estado: "activo" },
    { nombre: "Maria", estado: "inactivo" },
    { nombre: "Luis", estado: "activo" },
    { nombre: "Laura", estado: "inactivo" },
    { nombre: "Ana", estado: "activo" }
];

const usuariosActivos = usuarios.filter(usuario => usuario.estado === "activo");

console.log("Usuarios activos:", usuariosActivos);

