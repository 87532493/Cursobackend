require ("dotenv").config()
const http = require("http")
function requestController(){
    console.log("recibimos una nueva request")
}
const server = http.createServer(requestController)
const PORT = process.env.PORT
server.listen(PORT, function (){
    console.log("aplicacion corriendo en pueto:"+ PORT)
})