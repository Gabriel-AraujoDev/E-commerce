CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    preco_promocional DECIMAL(10,2),
    estoque INTEGER NOT NULL DEFAULT 0,
    quantidade_vendida INTEGER NOT NULL DEFAULT 0,
    imagem VARCHAR(255),
    categoria_id INTEGER REFERENCES categorias(id)
);
