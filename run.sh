(cd backend && yarn install)
(cd frontend && yarn install)
(cd proxy && yarn install)
npx concurrently -- 'cd backend && nodemon index.js' 'cd frontend && yarn start' 'cd proxy && nodemon index.js'
