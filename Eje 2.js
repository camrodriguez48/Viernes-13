const estudiantes = [
    { nombre: "Ana", nota: 65 },
    { nombre: "Carlos", nota: 55 },
    { nombre: "Luis", nota: 75 },
    { nombre: "Maria", nota: 45 },
    { nombre: "Jose", nota: 90 },
    { nombre: "Paula", nota: 85 },
    { nombre: "Laura", nota: 72 },
    { nombre: "Miguel", nota: 50 },
    { nombre: "Andrea", nota: 68 },
    { nombre: "Daniel", nota: 95 },
    { nombre: "Lucia", nota: 88 },
    { nombre: "Javier", nota: 58 },
    { nombre: "Sofia", nota: 73 },
    { nombre: "Fernando", nota: 64 },
    { nombre: "Rosa", nota: 92 },
    { nombre: "Manuel", nota: 77 },
    { nombre: "Camila", nota: 56 },
    { nombre: "Pablo", nota: 81 },
    { nombre: "Diego", nota: 99 },
    { nombre: "Sara", nota: 84 }
];

const aprobados = estudiantes.filter(estudiante => estudiante.nota > 60);

console.log(aprobados);

