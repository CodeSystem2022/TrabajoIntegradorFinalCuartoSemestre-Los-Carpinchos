from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

from config import config
import psycopg2 #conexion a la base de datos

app = Flask(__name__)

if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.run()



conn = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='bd_tienda'
)

# Crea un cursor para ejecutar consultas
cursor = conn.cursor()

# Datos del usuario a registrar (reemplaza con los datos reales del formulario)
nombre_de_usuario = "nombre_usuario"
correo_electronico = "correo@example.com"
contrasena = "contrasena_segura"

try:
    # Inserta el nuevo usuario en la base de datos
    cursor.execute("INSERT INTO usuarios (nombre, email, contrasena) VALUES (%s, %s, %s)",
                   (nombre_de_usuario, correo_electronico, contrasena))

    # Confirma la transacción
    conn.commit()
    print("Usuario registrado con éxito")
except Exception as e:
    # En caso de error, deshace la transacción
    conn.rollback()
    print("Error al registrar el usuario:", e)
finally:
    # Cierra el cursor y la conexión
    cursor.close()
    conn.close()
