// conexion a bd postgre sql //

const { Client } = require('pg');

const client = new Client({
  user: 'tu_usuario',
  host: 'localhost', // Cambia esto a la dirección de tu servidor si es diferente
  database: 'tienda_bd',
  password: 'admin',
  port: 5432, // Cambia esto al puerto de tu base de datos si es diferente
});

client.connect()
  .then(() => {
    console.log('Conexión exitosa a la base de datos PostgreSQL');
    // Aquí puedes realizar consultas a la base de datos
  })
  .catch((error) => {
    console.error('Error de conexión:', error);
  });

// Cuando hayas terminado de usar la conexión, no olvides cerrarla.
// client.end();

