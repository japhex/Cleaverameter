const Sequelize = require('sequelize');
// New Sequelize instance connected to local DB.
const sequelize = new Sequelize('mysql://root:root@127.0.0.1:8889/cleaverameter');

sequelize.authenticate().then(() => {
    req.sequelize = sequelize;
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
