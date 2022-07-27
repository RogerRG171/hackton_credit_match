const pg = require('pg');
require("dotenv").config();

const connectToPostgres = async () =>{
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const isProduction = process.env.NODE_ENV === "production";

    const config = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }

    const connection = await pg.createConnection(config);
    console.log("Conexão realizada com sucesso!!!");
    global.connection = connection;
}

connectToPostgres();

module.exports = {connectToPostgres}