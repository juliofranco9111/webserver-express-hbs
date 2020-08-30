const http = require ('http');

//1. Crear el servidor para escuchar peticiones

http.createServer ((req,res)=>{

   res.write('Hola mundo');
   res.end();

})
//2.Especificar el puerto
.listen(8080);

console.log('Listening in port; 8080')