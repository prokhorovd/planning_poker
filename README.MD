## Welcome to planning poker project.

### development mode commands:
- `npm run client:serve` to start client in dev mode, default port 3000
- `npm run server:serve` to start server in dev mode (nodemon), default port 4000
- `npm run serve` to run both commands above
### production mode commands:
- `npm run client:build` start client application build process (./client/build)
- `npm run server:build` start server build process (./server/build)
- `npm run build` to run both commands above
- `npm run server:start` to build and start server in production mode (node), default port 4000
- `npm run start` to build client and run server:start command above.
### misc:
- `npm run client:clean` delete ./client/build
- `npm run server:clean` delete ./server/dist
- `npm run clean` to run both commands above
- `npm run lint:eslint` to check project with eslint
- `npm run lint:eslint:fix` to check project with eslint and fix errors
- `npm run prettify` run prettier for client/src/ folder files
