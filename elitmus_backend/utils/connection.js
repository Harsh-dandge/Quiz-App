import {Sequelize} from 'sequelize'

// const sequelize = new Sequelize('database', 'username', 'password', {
const sequelize = new Sequelize('elitmus', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
    
const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

(async () => {
    await sequelize.sync();
    // Code here
})();

export {connect, sequelize};