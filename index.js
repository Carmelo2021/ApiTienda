const exp = require('express');
require('dotenv').config();

const modeloProducto = require('./src/models/productos.model');

const app = exp();
app.use(exp.urlencoded({extended: false})); 
app.use(exp.json());

const enrutador = require('./src/routes/router')
app.use('/v1',enrutador)

app.get('/productos/:ref', async (req,res)=>{
    let listaProductos = await modeloProducto.find({"referencia":req.params.ref}); 
    if (listaProductos){
        res.status(200).json(listaProductos)
    }else{
        res.status(500).json({error})
    }  
});


app.listen(process.env.PORT, ()=>{
    console.log('Aplicación corriendo en el puerto '+ process.env.PORT)
});