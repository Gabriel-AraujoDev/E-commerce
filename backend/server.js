const express = require("express");
const cors = require("cors");


// Rota de produtos
const productRoutes = require("./routes/product");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", productRoutes);

// Rota de registro de usuário
const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

app.listen(3000, () => {""
    console.log("Servidor rodando na porta 3000");
});