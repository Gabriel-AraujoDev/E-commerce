const argon2 = require("argon2");
const pool = require("../database/connection");

async function checkName(req, res) {
    try {
        const name = req.query.name?.trim();

        if (!name) {
            return res.status(400).json({
                message: "Informe um nome válido."
            });
        }

        const result = await pool.query(
            "SELECT id FROM users WHERE name = $1",
            [name]
        );

        return res.status(200).json({
            available: result.rows.length === 0
        });
    } catch (error) {
        console.error("Erro ao verificar nome:", error);

        return res.status(500).json({
            message: "Erro interno ao verificar nome."
        });
    }
}

async function checkEmail(req, res) {
    try {
        const normalizedEmail = req.query.email?.trim().toLowerCase();

        if (!normalizedEmail) {
            return res.status(400).json({
                message: "Informe um e-mail válido."
            });
        }

        const result = await pool.query(
            "SELECT id FROM users WHERE email = $1",
            [normalizedEmail]
        );

        return res.status(200).json({
            available: result.rows.length === 0
        });
    } catch (error) {
        console.error("Erro ao verificar e-mail:", error);

        return res.status(500).json({
            message: "Erro interno ao verificar e-mail."
        });
    }
}

async function register(req, res) {
    try {
        const { name, email, password } = req.body;

        // Verifica os dados
        if (!name?.trim() || !email?.trim() || typeof password !== "string" || password.length < 8) {
            return res.status(400).json({
                message: "Dados inválidos."
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        // Verifica se o e-mail já existe
        const checkEmail = await pool.query(
            "SELECT id FROM users WHERE email = $1",
            [normalizedEmail]
        );

        if (checkEmail.rows.length > 0) {
            return res.status(409).json({
                message: "Este e-mail já está cadastrado."
            });
        }

        // Gera o hash
        const passwordHash = await argon2.hash(password, {
            type: argon2.argon2id,
            memoryCost: 19456,
            timeCost: 2,
            parallelism: 1
        });

        // Salva o usuário
        const result = await pool.query(
            `INSERT INTO users (name, email, password_hash)
             VALUES ($1, $2, $3)
             RETURNING id, name, email`,
            [name.trim(), normalizedEmail, passwordHash]
        );

        return res.status(201).json({
            message: "Usuário cadastrado com sucesso!",
            user: result.rows[0]
        });

    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({
                message: "Este e-mail já está cadastrado."
            });
        }

        console.error("Erro no cadastro:", error);

        return res.status(500).json({
            message: "Erro interno ao realizar cadastro."
        });
    }
}

module.exports = { checkEmail, checkName, register };