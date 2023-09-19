const server = require('./app')
const Port = proccess.env.POR

server.listen(Port,()=>{
    console.log(`Server Running on ${Port}`)
})