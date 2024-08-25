require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.post('/persona', async (req, res) => {
    const { Nombre, Edad } = req.body;
    try {
        const result = await pool.query('INSERT INTO PERSONA (Nombre, Edad) VALUES ($1, $2) RETURNING *', [Nombre, Edad + 1]);
        const persona = result.rows[0];
        const respuesta = `El registro de ${persona.nombre}, próximamente tendrás ${persona.edad} años.`;
        res.json({ Respuesta: respuesta });
    } catch (error) {
        console.error('Error al insertar en la base de datos:', error);
        res.status(500).send('Error al insertar en la base de datos');
    }
});

app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));
