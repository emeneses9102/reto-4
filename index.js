const express = require('express')
const app = express()
const routesProductos = require('./routes.Productos')


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname+"/public"))

app.use('/api/productos',routesProductos)




const PORT= 8080
const server = app.listen(PORT, (err)=>{
    if(err) console.log(err)
    console.log(`Servidor escuchandose en el puerto ${PORT}`)
})
