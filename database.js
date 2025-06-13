const mysql2 = require("mysql2");

const dbpool = mysql2.createPool({ // buat koneksi ke database
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = dbpool.promise();