const server = require('./app')
const Port = proccess.env.PORT || 

server.listen(Port,()=>{
    console.log(`Server Running on ${Port}`)
})