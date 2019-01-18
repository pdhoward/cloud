# Machine
Platform for managing active dialogues

A content-first approach to addresses the very challenging process of conversation (not chat)

## Getting Started

1. Clone this repository.
2. In a terminal window, start MongoDB as a replica set of one server with the command: `mongod --dbpath <DATA_PATH> --replSet "rs"`.
3. In a separate terminal window, run `mongo`, the MongoDB client.
4. If this is the first time you set up a replica set, execute the command `rs.initiate()`.
5. Create the database `tasksDb` (`use tasksDb`) and the collection `tasks` (`db.createCollection('tasks')`).
6. npm install
7. Navigate browser to end point and have a conversation

### Prerequisites

- [MongoDB (version 3.6 or superior)](https://www.mongodb.com/download-center#community)
- [Node.js (10 or superior)](https://nodejs.org/en/download/)
- [RedisLab or equivilant](https://redislabs.com/)

## Built With

* [MongoDB](https://www.mongodb.com/) - NoSQL database
* [Node.js](https://nodejs.org/en/) - A JavaScript runtime 
* [React](https://reactjs.org/) - A JavaScript library for building webapps

## LICENSE
MIT

## agent
<a href="https://medium.com/@muehler.v/building-a-node-js-websocket-chat-app-with-socket-io-and-react-473a0686d1e1"><b>
Building a Node.js WebSocket Chat App with Socket.io and React </b></a>

https://itnext.io/building-a-node-js-websocket-chat-app-with-socket-io-and-react-473a0686d1e1

![demo](https://user-images.githubusercontent.com/31125521/36561436-fb278416-1813-11e8-8ff1-e15c61da88b5.gif)

Install.

``` bash
npm install
```

Run the socket server.

``` bash
npm run server
```

Run dev server, clients can be requested on localhost:3001.

``` bash
npm run client
```

## Demo

[![IMAGE ALT TEXT](https://user-images.githubusercontent.com/31125521/36549564-5f8a8c76-17f3-11e8-97fd-a7424f4905be.jpg)](https://www.youtube.com/watch?v=EHL_2JEAsbQ "Nodejs WebSocket Chat App with socket.io, Reactjs and material-ui")
