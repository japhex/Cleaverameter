# Cleaverameter
The world of Cleaver, run by parameters. Mysterious.

---

## Stack
The app runs off of a Node.js/Express.js stack mainly, but overall includes the following.

### Back-end
* Node.js (v7.3.2)
* Express.js
* Sequelize (ORM layer for MySQL in Node)
* EJS (front-end templating)
* Local MySQL DB which needs to be created and named 'cleaverameter'

### Front-end
* Gulp
* ES2015
* Browserify/Babelify (to transform ES2015)
* SCSS

---

## Running the app

1. Pull down the app from this repository
2. run 'npm install'
3. create a local DB called 'cleaverameter' and check your local 'root' connection config against '/config/config.json' and change if you need to
4. run 'npm start'
5. **(optional)** This will run the app, and the app's models will scaffold the Database tables for you. There are also some seed scripts, so if you wish to start with some dummy data, run 'node_modules/.bin/sequelize db:seed:all'

**NOTE: The app runs on localhost:3000, so port 3000, if you have another process running on this port, you'll need to stop it.**
