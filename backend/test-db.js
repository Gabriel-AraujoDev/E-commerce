const pool = require("./database/connection");
require("dotenv").config();

console.log("HOST:", process.env.DB_HOST);
console.log("PORT:", process.env.DB_PORT);
console.log("USER:", process.env.DB_USER);
console.log("PASSWORD:", typeof process.env.DB_PASSWORD);
console.log("DATABASE:", process.env.DB_NAME);
async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Banco conectado!");
        console.log(result.rows[0]);
    } catch (error) {
        console.error("Erro ao conectar:", error.message);
    } finally {
        await pool.end();
    }
}

testConnection();

pool.query(`
    SELECT
        current_database(),
        current_user,
        inet_server_addr(),
        inet_server_port()
`).then(result => {
    console.log(result.rows[0]);
});

async function testQuery() {
    try {
        const result = await pool.query("SELECT * FROM produtos");
        console.log("Consulta realizada com sucesso!");
        console.log(result.rows);
    } catch (error) {
        console.error("Erro ao realizar consulta:", error.message);
    } 
}

testQuery();