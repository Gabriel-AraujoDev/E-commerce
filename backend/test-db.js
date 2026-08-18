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