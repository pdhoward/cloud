

////////////////////////////////////////////////////
////////  			TEST SERVER     		 ///////
///////           EMULATE FUNCTIONS         ///////
//////////////////////////////////////////////////
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const Port = 4000
server.use(middlewares)
server.use(router)
server.listen(Port, () => {
    console.log(`The Cloud Test Server is Running on Port ${Port}`)
})

