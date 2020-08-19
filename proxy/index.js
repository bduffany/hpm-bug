const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  // NOTE: if this is commented out then everything works.
  '/sockjs-node',
  createProxyMiddleware('/sockjs-node', {
    target: 'http://127.0.0.1:3000',
    ws: true,
  })
);

app.use(
  ['/socket.io', '/socket.io/*'],
  createProxyMiddleware('/socket.io', {
    target: 'http://127.0.0.1:4000',
    ws: true,
  })
);

app.use(/.*/, createProxyMiddleware({ target: 'http://127.0.0.1:3000' }));

app.listen(8080, () => {
  console.log('Proxy listening on *:8080');
});
