const express = require('express')

const app = express()
const port = process.env.port || 3000

app.get('/',(req,res)=>{
    res.send("<h1>Sistemas Distribuidos</h1>")
})

app.get('/inventory/search',(req,res)=>{
    //Aqui hay que poner la sentencia SQL pa mandarla al redis
    //items = 'SELECT * FROM items'
    


    res.send("<h1>Aqui tiene que salir una lista con la busqueda de las cuestiones</h1>")
})

app.listen(port, () => {
    console.log(`API RUN AT http://localhost:${port}`);
  });
