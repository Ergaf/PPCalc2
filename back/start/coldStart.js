const mysql = require("mysql2/promise");
module.exports = {
    createDatabases: async function (connectNotBdConfig, databases) {
        const connection = await mysql.createConnection(connectNotBdConfig);
        try {
            await connection.beginTransaction();
            const result1 = await connection.query("USE " + databases.main);
            console.log(databases.statist+" ok");
            await connection.commit();
        } catch (error) {
            try {
                const result1 = await connection.query("CREATE DATABASE " + databases.main);
                console.log("create database: "+databases.main);
                await connection.commit();
            } catch (e){
                console.log(e);
            }
        } finally {
            await connection.end();
        }
        try {
            await connection.beginTransaction();
            const result1 = await connection.query("USE " + databases.statist);
            await connection.commit();
        } catch (error) {
            try {
                const result1 = await connection.query("CREATE DATABASE " + databases.statist);
                console.log("create database: "+databases.statist);
                await connection.commit();
            } catch (e){
                console.log(e);
            }
        } finally {
            await connection.end();
        }
    }
};