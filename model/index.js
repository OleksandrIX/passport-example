const {Sequelize} = require("sequelize");
const mysqlConfig = require("../config/mysql.config");

const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, mysqlConfig.options);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connect successful");
    } catch (error) {
        console.log("Error: ", error);
    }
})();

const User = require("./User")(sequelize);

(async () => {
    try {
        await sequelize.sync();
        console.log("DB re-sync");
    } catch (error) {
        console.log("Error: ", error);
    }
})();

const Repositories = {
    UserRepo: require("../repositories/User")(User),
};

module.exports = Repositories;