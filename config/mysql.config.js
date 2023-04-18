module.exports = {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    options: {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        logging: true,
    },
};