const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "admin",
    port: 9091,
    password: "admin",
    database: "Tarea1SD"
})

client.connect();

client.query('SELECT * FROM items', (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})