# repro for HPM bug

- `backend` was copied from https://socket.io/get-started/chat/
- `frontend` was created with `create-react-app`
- `proxy` contains the proxy server that proxies to both.

## Running

`./run.sh` will run all 3 servers in development mode (live reload).

Open http://localhost:8080 and observe in Chrome's devtools that `/sockjs-node` fails.
