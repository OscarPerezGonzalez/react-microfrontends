const ServerDev = require('./models/server-dev')

const server = new ServerDev()

server.get()
server.listen()
