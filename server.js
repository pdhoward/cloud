

////////////////////////////////////////////////////
////////  			TEST SERVER     		 ///////
///////           EMULATE FUNCTIONS         ///////
//////////////////////////////////////////////////
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'json/db.json'))
const middlewares = jsonServer.defaults()

const Port = 4000
server.use(middlewares)

// return custom data
server.get('/data', async (req, res) => {   
    let data = await require('./data')()   
    console.log(data)
    res.json(data)  
})

// /echo?q=
server.get('/echo', (req, res) => {
    res.jsonp(req.query) 
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use(async (req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
        let data = await require('./data')()
        console.log(data)
        //res.json(data) 
        next(data)
    }
    // Continue to JSON Server router
   next()
})

server.use(router)

server.listen(Port, () => {
    console.log(`The Cloud Test Server is Running on Port ${Port}`)
})

