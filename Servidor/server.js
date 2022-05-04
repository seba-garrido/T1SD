const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const { client } = require("./src/dbconnector");
const PROTO_PATH = "./search.proto"

const opcion = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, opcion);
const auxiliar = grpc.loadPackageDefinition(packageDefinition);
const servidor = new grpc.Server();

servidor.addService(auxiliar.InventorySearch.service,{
  GetServerResponse: (call,callback)=>{
    const search = call.request.message;
    console.log(search)
    client.connect((err, client, release) => {
      if (err) {
        return console.error('Error al adquirir el cliente', err.stack)
      }
      client.query(`SELECT * FROM items WHERE name LIKE '%' || $1 || '%';`,[search], (err, response) => {
        release()
        if (err) {
          return console.error('Error ejecutando la consulta', err.stack)
        }
        console.log(response.rows)
        callback(null,{product:response.rows});
      })
    })
  },
});
