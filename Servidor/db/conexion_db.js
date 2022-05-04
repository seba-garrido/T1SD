const {Pool} = require('pg');

const conexion = {
    user:'admin',
    host:'postgres',
    database:'Tarea1SD',
    password:'admin',
    port:5432
}

const client = new Pool(conexion)

module.exports = {client};