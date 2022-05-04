const {Pool} = require('pg');

const conexion = {
    user:'admin',
    host:'postgres',
    database:'Tarea1SD',
    password:'admin',
    port:9091
}

const client = new Pool(conexion)

module.exports = {client};