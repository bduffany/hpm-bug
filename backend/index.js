var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});
