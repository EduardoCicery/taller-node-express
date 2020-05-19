const express=require('express'),
app=express(),
path=require('path');

app.use(express.static(path.join(__dirname, "/public")));//nos permite ubicar y acceder a los archivos estaticos que se vayan a usar en el proyecto almacenados en la carpeta public

//crearemos las rutas de la aplicacion

app.get('/',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/index.html`)

});

app.get('/img/me.jpg',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/img/ed.jpg`)

});

app.get('/fondoIndex',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/img/fondoIndex.jpg`)

});

app.get('/acerca',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/yo.html`)

});

app.get('/experiencia',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/experiencia.html`)

});

app.get('/educacion',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/educacion.html`)

});

app.get('/idiomas',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/idiomas.html`)

});

app.get('/aptitudes',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/aptitudes.html`)

});



// app.get('/acerca',(peticion, respuesta)=>{
//     respuesta.sendFile(`${__dirname}/views/denegado.html`)

// });

app.listen(8080);
console.log("ON");