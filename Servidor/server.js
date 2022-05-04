const grpc = require("@grpc/grpc-js");
const PROTO_PATH = "./search.proto"
var protoLoader = require("@grpc/proto-loader");
const { client } = require("./db/conexion_db");


const variables = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, variables);
const auxiliar = grpc.loadPackageDefinition(packageDefinition);
const servidor = new grpc.Server();

servidor.addService(auxiliar.InventorySearch.service, {
  GetServerResponse: (call, callback) => {
    const search = call.request.message;
    console.log(search)
    client.connect((err, client, release) => {
      if (err) {
        return console.error('Error en el cliente', err.stack)
      }
      client.query(`select * from items where name like '%' || $1 || '%';`, [search], (err, response) => {
        release()
        if (err) {
          return console.error('Error ejecutando la consulta', err.stack)
        }
        console.log(response.rows)
        callback(null, { product: response.rows });
      })
    })
  },
});

servidor.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Servidor Corriendo en http://127.0.0.1:50051");
    servidor.start();
  }
);
