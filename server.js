

////////////////////////////////////////////////////
////////  			TEST SERVER     		 ///////
///////           EMULATE FUNCTIONS         ///////
//////////////////////////////////////////////////
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

const Port = 4000
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    //res.jsonp(req.query)
    let data = require('./data')
    data().then((d) => {
        console.log(data)
        res.json(data)
    })
   
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
})

server.use(router)

server.listen(Port, () => {
    console.log(`The Cloud Test Server is Running on Port ${Port}`)
})

