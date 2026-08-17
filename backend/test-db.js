const pool = require("./database/connection");

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