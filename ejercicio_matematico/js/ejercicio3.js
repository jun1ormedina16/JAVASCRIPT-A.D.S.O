const os=require('os');

console.log("Sistema operativo: " +os.platform());
console.log("Version del sistema operativo: " +os.release());
console.log("Memoria total: " +os.totalmem()+ " bytes");
console.log("Memoria libre: " +os.freemem()+ " bytes");