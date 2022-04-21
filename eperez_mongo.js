// En la consola CLI
mongod --dbpath C:\Users\Emmanuel\Desktop\CoderHouse\miBaseMongo

// Abrir otro CLI
mongo

use ecommerce   //switched to db ecommerce
db.createCollection("mensajes") // { "ok" : 1 }
db.createCollection("productos")    // { "ok" : 1 }

//  1) Agregar 10 documentos con valores distintos a las colecciones mensajes y productos. El formato de los documentos debe estar en correspondencia con el que venimos utilizando en el entregable con base de datos MariaDB. 
//  2) Definir las claves de los documentos en relación a los campos de las tablas de esa base. En el caso de los productos, poner valores al campo precio entre los 100 y 5000 pesos(eligiendo valores intermedios, ej: 120, 580, 900, 1280, 1700, 2300, 2860, 3350, 4320, 4990). 
db.mensajes.insertMany([{email: "juan@ch.com", fechaHora: "13/02/2022 14:25", mensaje: "Bienvenido"}, {email: "ana@ch.com", fechaHora: "10/03/2022 10:52", mensaje: "a la"}, {email: "maria@gmail.cl", fechaHora: "11/03/2022 14:33", mensaje: "aplicacion"}, {email: "alan@ch.com", fechaHora: "13/03/2022 18:52", mensaje: "desafio Mongo"}, {email: "bernardo@ch.com", fechaHora: "25/03/2022 21:11", mensaje: "Realizada"}, {email: "fede@gmail.cl", fechaHora: "26/03/2022 13:52", mensaje: "por el estuadiante"}, {email: "santi@ch.com", fechaHora: "30/03/2022 14:10", mensaje: "Emmanuel"}, {email: "mirella@ch.com", fechaHora: "10/04/2022 15:15", mensaje: "Perez"}, {email: "juan@gmail.cl", fechaHora: "11/04/2022 10:52", mensaje: "Bobadilla"}, {email: "julia@ch.com", fechaHora: "13/04/2022 16:22", mensaje: "CoderHouse"}])
/*
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("626181191412835843c50075"),
                ObjectId("626181191412835843c50076"),
                ObjectId("626181191412835843c50077"),
                ObjectId("626181191412835843c50078"),
                ObjectId("626181191412835843c50079"),
                ObjectId("626181191412835843c5007a"),
                ObjectId("626181191412835843c5007b"),
                ObjectId("626181191412835843c5007c"),
                ObjectId("626181191412835843c5007d"),
                ObjectId("626181191412835843c5007e")
        ]
}
*/

db.productos.insertMany([{name: "regla", price: 120, thumbnail: "http://www.probando.cl/regla.jpg"}, {name: "escuadra", price: 150, thumbnail: "http://www.probando.cl/escuadra.jpg"}, {name: "borrador", price: 580, thumbnail: "http://www.probando.cl/borrador.jpg"}, {name: "manzana", price: 1200, thumbnail: "http://www.probando.cl/manzana.jpg"}, {name: "estuche", price: 2500, thumbnail: "http://www.probando.cl/estuche.jpg"}, {name: "lapicera", price: 3350, thumbnail: "http://www.probando.cl/lapicera.jpg"}, {name: "mapa", price: 2500, thumbnail: "http://www.probando.cl/mapa.jpg"}, {name: "silla", price: 2300, thumbnail: "http://www.probando.cl/silla.jpg"}, {name: "computador", price: 4990, thumbnail: "http://www.probando.cl/computador.jpg"}, {name: "monitor", price: 4200, thumbnail: "http://www.probando.cl/monitor.jpg"}])
/*
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("626184461412835843c5007f"),
                ObjectId("626184461412835843c50080"),
                ObjectId("626184461412835843c50081"),
                ObjectId("626184461412835843c50082"),
                ObjectId("626184461412835843c50083"),
                ObjectId("626184461412835843c50084"),
                ObjectId("626184461412835843c50085"),
                ObjectId("626184461412835843c50086"),
                ObjectId("626184461412835843c50087"),
                ObjectId("626184461412835843c50088")
        ]
}
*/

//  3) Listar todos los documentos en cada colección.
db.mensajes.find()
/*
{ "_id" : ObjectId("626181191412835843c50075"), "email" : "juan@ch.com", "fechaHora" : "13/02/2022 14:25", "mensaje" : "Bienvenido" }
{ "_id" : ObjectId("626181191412835843c50076"), "email" : "ana@ch.com", "fechaHora" : "10/03/2022 10:52", "mensaje" : "a la" }
{ "_id" : ObjectId("626181191412835843c50077"), "email" : "maria@gmail.cl", "fechaHora" : "11/03/2022 14:33", "mensaje" : "aplicacion" }
{ "_id" : ObjectId("626181191412835843c50078"), "email" : "alan@ch.com", "fechaHora" : "13/03/2022 18:52", "mensaje" : "desafio Mongo" }
{ "_id" : ObjectId("626181191412835843c50079"), "email" : "bernardo@ch.com", "fechaHora" : "25/03/2022 21:11", "mensaje" : "Realizada" }
{ "_id" : ObjectId("626181191412835843c5007a"), "email" : "fede@gmail.cl", "fechaHora" : "26/03/2022 13:52", "mensaje" : "por el estuadiante" }
{ "_id" : ObjectId("626181191412835843c5007b"), "email" : "santi@ch.com", "fechaHora" : "30/03/2022 14:10", "mensaje" : "Emmanuel" }
{ "_id" : ObjectId("626181191412835843c5007c"), "email" : "mirella@ch.com", "fechaHora" : "10/04/2022 15:15", "mensaje" : "Perez" }
{ "_id" : ObjectId("626181191412835843c5007d"), "email" : "juan@gmail.cl", "fechaHora" : "11/04/2022 10:52", "mensaje" : "Bobadilla" }
{ "_id" : ObjectId("626181191412835843c5007e"), "email" : "julia@ch.com", "fechaHora" : "13/04/2022 16:22", "mensaje" : "CoderHouse" }
*/

db.productos.find()
/*
{ "_id" : ObjectId("626184461412835843c5007f"), "name" : "regla", "price" : 120, "thumbnail" : "http://www.probando.cl/regla.jpg" }
{ "_id" : ObjectId("626184461412835843c50080"), "name" : "escuadra", "price" : 150, "thumbnail" : "http://www.probando.cl/escuadra.jpg" }
{ "_id" : ObjectId("626184461412835843c50081"), "name" : "borrador", "price" : 580, "thumbnail" : "http://www.probando.cl/borrador.jpg" }
{ "_id" : ObjectId("626184461412835843c50082"), "name" : "manzana", "price" : 1200, "thumbnail" : "http://www.probando.cl/manzana.jpg" }
{ "_id" : ObjectId("626184461412835843c50083"), "name" : "estuche", "price" : 2500, "thumbnail" : "http://www.probando.cl/estuche.jpg" }
{ "_id" : ObjectId("626184461412835843c50084"), "name" : "lapicera", "price" : 3350, "thumbnail" : "http://www.probando.cl/lapicera.jpg" }
{ "_id" : ObjectId("626184461412835843c50085"), "name" : "mapa", "price" : 2500, "thumbnail" : "http://www.probando.cl/mapa.jpg" }
{ "_id" : ObjectId("626184461412835843c50086"), "name" : "silla", "price" : 2300, "thumbnail" : "http://www.probando.cl/silla.jpg" }
{ "_id" : ObjectId("626184461412835843c50087"), "name" : "computador", "price" : 4990, "thumbnail" : "http://www.probando.cl/computador.jpg" }
{ "_id" : ObjectId("626184461412835843c50088"), "name" : "monitor", "price" : 4200, "thumbnail" : "http://www.probando.cl/monitor.jpg" }
*/

//  4) Mostrar la cantidad de documentos almacenados en cada una de ellas.
db.mensajes.estimatedDocumentCount()    // 10
db.productos.estimatedDocumentCount()   // 10

//  5) Realizar un CRUD sobre la colección de productos:
//  a) Agregar un producto más en la colección de productos 
db.productos.insert({name: "teclado", price: 3120 , thumbnail: "http://www.probando.com/teclado.jpg"})  //WriteResult({ "nInserted" : 1 })

//  b) Realizar una consulta por nombre de producto específico:
//  i) Listar los productos con precio menor a 1000 pesos.
db.productos.find({price: {$lt: 1000}})
/*
{ "_id" : ObjectId("626184461412835843c5007f"), "name" : "regla", "price" : 120, "thumbnail" : "http://www.probando.cl/regla.jpg" }
{ "_id" : ObjectId("626184461412835843c50080"), "name" : "escuadra", "price" : 150, "thumbnail" : "http://www.probando.cl/escuadra.jpg" }
{ "_id" : ObjectId("626184461412835843c50081"), "name" : "borrador", "price" : 580, "thumbnail" : "http://www.probando.cl/borrador.jpg" }
*/

//  ii) Listar los productos con precio entre los 1000 a 3000 pesos.
db.productos.find({price: {$gt: 1000, $lt: 3000}})
/*
{ "_id" : ObjectId("626184461412835843c50082"), "name" : "manzana", "price" : 1200, "thumbnail" : "http://www.probando.cl/manzana.jpg" }
{ "_id" : ObjectId("626184461412835843c50083"), "name" : "estuche", "price" : 2500, "thumbnail" : "http://www.probando.cl/estuche.jpg" }
{ "_id" : ObjectId("626184461412835843c50085"), "name" : "mapa", "price" : 2500, "thumbnail" : "http://www.probando.cl/mapa.jpg" }
{ "_id" : ObjectId("626184461412835843c50086"), "name" : "silla", "price" : 2300, "thumbnail" : "http://www.probando.cl/silla.jpg" }
*/

//  iii) Listar los productos con precio mayor a 3000 pesos.
db.productos.find({price: {$gt: 3000}})
/*
{ "_id" : ObjectId("626184461412835843c50084"), "name" : "lapicera", "price" : 3350, "thumbnail" : "http://www.probando.cl/lapicera.jpg" }
{ "_id" : ObjectId("626184461412835843c50087"), "name" : "computador", "price" : 4990, "thumbnail" : "http://www.probando.cl/computador.jpg" }
{ "_id" : ObjectId("626184461412835843c50088"), "name" : "monitor", "price" : 4200, "thumbnail" : "http://www.probando.cl/monitor.jpg" }
{ "_id" : ObjectId("626187951412835843c50089"), "name" : "teclado", "price" : 3120, "thumbnail" : "http://www.probando.com/teclado.jpg" }
*/

//  iv) Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
db.productos.find().sort({price: 1}).limit(1).skip(2)   // { "_id" : ObjectId("626184461412835843c50081"), "name" : "borrador", "price" : 580, "thumbnail" : "http://www.probando.cl/borrador.jpg" }

//  c) Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.
db.productos.updateMany({}, {$set: {stock: 100}})   // { "acknowledged" : true, "matchedCount" : 11, "modifiedCount" : 11 }

//  d) Cambiar el stock a cero de los productos con precios mayores a 4000 pesos. 
db.productos.updateMany({"price":{$gt: 4000}},{$set:{"stock":0}})   // { "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }

//  e) Borrar los productos con precio menor a 1000 pesos
db.productos.deleteMany({price: {$lt: 1000}})   // { "acknowledged" : true, "deletedCount" : 3 }

//  6) Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.
use admin   //switched to db admin
db.createUser({user: "pepe", pwd: "asd456", roles: [ { role: "read", db: "ecommerce"} ]})
/*
Successfully added user: {
        "user" : "pepe",
        "roles" : [
                {
                        "role" : "read",
                        "db" : "ecommerce"
                }
        ]
}
*/

CTRL + C
mongo -u pepe -p asd456
use ecommerce   //switched to db ecommerce
db.productos.insert({name: "escritorio", price: 2120 , thumbnail: "http://www.probando.com/escritorio.jpg"}) 
// según las intrucciones del ppt, no debería permitir al usuario "pepe" hacer Insert, pero pese a seguir el paso a paso, SÍ permite hacer inserts.