const promedioNotas = estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0) / estudiantes.length;

console.log("Promedio de notas:", promedioNotas);
