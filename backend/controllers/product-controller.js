const pool = require("../database/connection");

async function listarProdutos(req, res) {
    try {
        const result = await pool.query("SELECT * FROM produtos");

        res.json(result.rows);
    } catch (error) {
        console.error("Erro ao listar produtos:", error.message);
        res.status(500).json({ error: "Erro ao listar produtos" });
    }
}

module.exports = {
    listarProdutos
};