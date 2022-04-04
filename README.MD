## Planning poker application

This is a mentor-supervised project, implemented from figma layout to fully working full-stack app.
Design provided by mentor, so were code-review and general development advices.

#####💻 Developer: [prokhorovd](https://github.com/prokhorovd)
#####👨‍💻 Mentor: [awpogodin](https://github.com/awpogodin)

### Server-side
+ Nodejs + Express 
+ TypeScript 
+ Socket.io
### Client-side
+ React application (`create-react-app` + `craco`)
+ `MobX` state manager
+ TypeScript
+ Styling: `Material UI` + `styled-components`
+ Forms implemented using `formik`
+ pdf export: `html2pdf`
+ `emoji-mart` library was used for emoji-picker

### Design:
Figma layout can be found [here](https://www.figma.com/file/rKsA38JgVGFmyZjMbparIi/Poker-UI)

### Deploy:
Heroku: can be found [here](https://mighty-garden-26112.herokuapp.com)

### Game rules
You can read about game history and basic rules [here](https://www.atlassian.com/blog/platform/a-brief-overview-of-planning-poker).

### Description
Game provided with 10-card deck. 8 of them are 'fibonacci' number-cards that can be used to estimation purposes and 2 of them are utility-type cards: 'question' ( picked if user have questions) and 'coffee' (picked if user want to take a break).

Game session length set to 10 second for testing purposes and can be changed in START_TIME constant (./client/src/components/Timer/Timer.tsx).

Every user should pick an emoji-avatar and name to start.

User can:
- create room
- join existing room using room id
- vote after game was started by room-admin

When user create a room he's becoming an admin of this room.

Admin can:
- start game,
- vote,
- reset game,
- save game results as pdf-file.

Calculated result is average estimation, that calculated using digits-only cards.
If admin leaving the room - all users will be kicked.

## How to use:
- clone this repo
- `npm i` to install dependencies
- `npm start` to build and start application (default port 4000);

You can see another available scripts below.

##Available Scripts:
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
