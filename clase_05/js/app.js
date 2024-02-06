let personas = [
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 19,
      estatura: 1.85 
    },
    {
      nombre: "Juana",
      apellido: "Perez Osa",
      edad: 20,
      estatura: 1.65 
    },
    {
      nombre: "Paco",
      apellido: "Gerte",
      edad: 18,
      estatura: 1.72
    }
  ];

for(var llave in personas){
    console.log(personas[llave].nombre);
}