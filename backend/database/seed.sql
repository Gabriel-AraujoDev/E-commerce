-- ============================================
-- CATEGORIAS
-- ============================================

INSERT INTO categorias (nome)
VALUES
    ('Masculino'),
    ('Feminino'),
    ('Acessórios'),
    ('Casa'),
    ('Eletrônicos'),
    ('Esportes'),
    ('Beleza'),
    ('Calçados');


-- ============================================
-- PRODUTOS - MASCULINO
-- categoria_id = 1
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id)
VALUES
    ('Camiseta Masculina Básica de Algodão', 49.90, 35, 1),
    ('Camiseta Masculina Oversized Premium', 79.90, 22, 1),
    ('Camisa Polo Masculina Slim Fit', 99.90, 18, 1),
    ('Calça Jeans Masculina Reta Azul', 149.90, 14, 1),
    ('Bermuda Masculina Sarja Casual', 89.90, 25, 1),
    ('Moletom Masculino com Capuz', 159.90, 12, 1),
    ('Jaqueta Masculina Corta-Vento', 189.90, 9, 1),
    ('Blazer Masculino Casual Slim', 249.90, 7, 1),
    ('Regata Masculina Esportiva Dry Fit', 59.90, 28, 1),
    ('Calça Jogger Masculina Moletom', 119.90, 16, 1);


-- ============================================
-- PRODUTOS - FEMININO
-- categoria_id = 2
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id)
VALUES
    ('Blusa Feminina Básica de Algodão', 54.90, 30, 2),
    ('Camiseta Feminina Oversized Premium', 74.90, 24, 2),
    ('Vestido Feminino Midi Casual', 139.90, 13, 2),
    ('Calça Jeans Feminina Mom Fit', 159.90, 15, 2),
    ('Shorts Feminino de Sarja', 84.90, 21, 2),
    ('Moletom Feminino com Capuz', 149.90, 11, 2),
    ('Jaqueta Feminina Jeans Oversized', 179.90, 8, 2),
    ('Saia Feminina Midi Plissada', 119.90, 17, 2),
    ('Top Feminino Esportivo de Alta Sustentação', 89.90, 20, 2),
    ('Calça Legging Feminina Esportiva', 99.90, 27, 2);


-- ============================================
-- PRODUTOS - ACESSÓRIOS
-- categoria_id = 3
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id)
VALUES
    ('Mochila Casual para Notebook 15,6"', 129.90, 18, 3),
    ('Carteira Masculina Compacta em Couro Sintético', 59.90, 32, 3),
    ('Bolsa Feminina Transversal Casual', 89.90, 20, 3),
    ('Cinto Masculino de Couro Sintético', 69.90, 25, 3),
    ('Óculos de Sol com Proteção UV', 79.90, 16, 3),
    ('Boné Unissex Aba Curva', 49.90, 29, 3),
    ('Relógio Digital Esportivo Unissex', 99.90, 14, 3),
    ('Porta-Cartões Compacto com RFID', 39.90, 35, 3),
    ('Mochila Executiva para Notebook 17"', 179.90, 10, 3),
    ('Capa para Notebook 15,6" com Zíper', 69.90, 23, 3);


-- ============================================
-- PRODUTOS - CASA
-- categoria_id = 4
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id)
VALUES
    ('Jogo de Cama Casal 4 Peças', 129.90, 18, 4),
    ('Kit de Toalhas de Banho 4 Peças', 99.90, 22, 4),
    ('Luminária de Mesa LED Touch', 89.90, 16, 4),
    ('Organizador de Gavetas com 6 Divisórias', 39.90, 31, 4),
    ('Kit de Potes Herméticos 10 Peças', 79.90, 24, 4),
    ('Jogo de Panelas Antiaderente 5 Peças', 249.90, 8, 4),
    ('Escorredor de Louças Inox Compacto', 119.90, 13, 4),
    ('Almofada Decorativa Geométrica', 44.90, 27, 4),
    ('Tapete para Sala Antiderrapante 150x200cm', 159.90, 11, 4),
    ('Garrafa Térmica Inox 1 Litro', 89.90, 19, 4);


-- ============================================
-- PRODUTOS - ELETRÔNICOS
-- categoria_id = 5
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id)
VALUES
    ('Mouse Gamer RGB 7200 DPI', 129.90, 25, 5),
    ('Teclado Mecânico Gamer RGB ABNT2', 249.90, 14, 5),
    ('Headset Gamer com Microfone e LED RGB', 199.90, 18, 5),
    ('Webcam Full HD 1080p com Microfone', 159.90, 12, 5),
    ('Mousepad Gamer Extended 900x400mm', 89.90, 30, 5),
    ('Hub USB 3.0 com 4 Portas', 69.90, 26, 5),
    ('Suporte Articulado para Monitor 27"', 179.90, 9, 5),
    ('SSD NVMe 1TB PCIe 4.0', 399.90, 13, 5),
    ('Memória RAM DDR4 16GB 3200MHz', 229.90, 17, 5),
    ('Caixa de Som Bluetooth Portátil 20W', 159.90, 21, 5);


-- ============================================
-- PRODUTOS - ESPORTES
-- categoria_id = 6
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id)
VALUES
    ('Camisa Esportiva Dry Fit Masculina', 69.90, 30, 6),
    ('Shorts Esportivo Masculino com Bolso', 59.90, 28, 6),
    ('Legging Esportiva Feminina de Alta Compressão', 99.90, 19, 6),
    ('Top Esportivo Feminino Dry Fit', 79.90, 23, 6),
    ('Garrafa Esportiva Squeeze 750ml', 39.90, 40, 6),
    ('Corda de Pular com Rolamento', 49.90, 26, 6),
    ('Colchonete para Exercícios 10mm', 79.90, 17, 6),
    ('Kit de Faixas Elásticas para Treino', 69.90, 20, 6),
    ('Luva para Academia com Proteção de Punho', 59.90, 24, 6),
    ('Bola de Futebol de Campo Oficial', 119.90, 15, 6);


-- ============================================
-- PRODUTOS - BELEZA
-- categoria_id = 7
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id)
VALUES
    ('Kit Shampoo e Condicionador Hidratante', 69.90, 25, 7),
    ('Máscara Capilar de Hidratação Intensiva', 49.90, 30, 7),
    ('Secador de Cabelo 2000W com Íons', 189.90, 12, 7),
    ('Escova Secadora 4 em 1', 229.90, 10, 7),
    ('Modelador de Cachos Cerâmico', 159.90, 14, 7),
    ('Kit de Pincéis para Maquiagem 12 Peças', 79.90, 21, 7),
    ('Espelho de Mesa com Iluminação LED', 99.90, 18, 7),
    ('Necessaire de Maquiagem Grande', 69.90, 27, 7),
    ('Aparador de Pelos Recarregável', 149.90, 16, 7),
    ('Kit de Cuidados para Unhas 7 Peças', 39.90, 33, 7);


-- ============================================
-- PRODUTOS - CALÇADOS
-- categoria_id = 8
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id)
VALUES
    ('Tênis Esportivo Masculino para Corrida', 199.90, 14, 8),
    ('Tênis Casual Masculino em Lona', 129.90, 20, 8),
    ('Tênis Masculino Streetwear Solado Alto', 179.90, 12, 8),
    ('Tênis Esportivo Feminino para Academia', 189.90, 16, 8),
    ('Tênis Casual Feminino Branco', 149.90, 22, 8),
    ('Tênis Feminino Slip On Confortável', 119.90, 18, 8),
    ('Sandália Feminina Casual com Tiras', 99.90, 25, 8),
    ('Chinelo Masculino Anatômico', 59.90, 30, 8),
    ('Bota Masculina Casual de Cano Médio', 229.90, 9, 8),
    ('Bota Feminina Casual de Cano Curto', 219.90, 11, 8);