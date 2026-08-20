-- ============================================
-- CATEGORIAS
-- ============================================

INSERT INTO categorias (nome)
VALUES
    ('Masculino'),
    ('Feminino'),
    ('Acessórios'),
    ('Eletrônicos'),
    ('Casa'),
    ('Esportes'),
    ('Beleza'),
    ('Calçados');


-- ============================================
-- PRODUTOS - MASCULINO
-- categoria_id = 1
-- ============================================

INSERT INTO produtos
(nome, preco, preco_promocional, estoque, quantidade_vendida, categoria_id, imagem)
VALUES
    ('Camiseta Masculina Básica de Algodão', 49.90, NULL, 35, 0, 1, 'assets/images/products/categoria_1/camiseta-masculina-basica-algodao.png'),
    ('Camiseta Masculina Oversized Premium', 79.90, 69.90, 22, 0, 1, 'assets/images/products/categoria_1/camiseta-masculina-oversized-premium.png'),
    ('Camisa Polo Masculina Slim Fit', 99.90, NULL, 18, 0, 1, 'assets/images/products/categoria_1/camisa-polo-masculina-slim-fit.png'),
    ('Calça Jeans Masculina Reta Azul', 149.90, 129.90, 14, 0, 1, 'assets/images/products/categoria_1/calca-jeans-masculina-reta-azul.png'),
    ('Bermuda Masculina Sarja Casual', 89.90, NULL, 25, 0, 1, 'assets/images/products/categoria_1/bermuda-masculina-sarja-casual.png'),
    ('Moletom Masculino com Capuz', 159.90, 139.90, 12, 0, 1, 'assets/images/products/categoria_1/moletom-masculino-capuz.png');

-- ============================================
-- PRODUTOS - ACESSÓRIOS
-- categoria_id = 3
-- ============================================

-- colocar o path certo (categoria_id = 3) para as imagens dos produtos de acessórios e fazer para o resto depois
INSERT INTO produtos
(nome, preco, preco_promocional, estoque, quantidade_vendida, categoria_id, imagem)
VALUES
    ('Mochila Casual para Notebook 15,6"', 129.90, NULL, 18, 0, 3, 'assets/images/products/mochila-casual-notebook-156.png'),
    ('Carteira Masculina Compacta em Couro Sintético', 59.90, 49.90, 32, 0, 3, 'assets/images/products/carteira-masculina-couro-sintetico.png'),
    ('Bolsa Feminina Transversal Casual', 89.90, NULL, 20, 0, 3, 'assets/images/products/bolsa-feminina-transversal-casual.png'),
    ('Cinto Masculino de Couro Sintético', 69.90, NULL, 25, 0, 3, 'assets/images/products/cinto-masculino-couro-sintetico.png'),
    ('Óculos de Sol com Proteção UV', 79.90, 69.90, 16, 0, 3, 'assets/images/products/oculos-sol-protecao-uv.png'),
    ('Boné Unissex Aba Curva', 49.90, NULL, 29, 0, 3, 'assets/images/products/bone-unissex-aba-curva.png');


-- ============================================
-- PRODUTOS - ELETRÔNICOS
-- categoria_id = 4
-- ============================================

INSERT INTO produtos
(nome, preco, preco_promocional, estoque, quantidade_vendida, categoria_id, imagem)
VALUES
    ('Mouse Gamer RGB 7200 DPI', 129.90, 109.90, 25, 0, 4, 'assets/images/products/mouse-gamer-rgb-7200-dpi.png'),
    ('Teclado Mecânico Gamer RGB ABNT2', 249.90, 219.90, 14, 0, 4, 'assets/images/products/teclado-mecanico-gamer-rgb-abnt2.png'),
    ('Headset Gamer com Microfone e LED RGB', 199.90, 179.90, 18, 0, 4, 'assets/images/products/headset-gamer-microfone-led-rgb.png'),
    ('Webcam Full HD 1080p com Microfone', 159.90, NULL, 12, 0, 4, 'assets/images/products/webcam-full-hd-1080p-microfone.png'),
    ('Mousepad Gamer Extended 900x400mm', 89.90, 79.90, 30, 0, 4, 'assets/images/products/mousepad-gamer-extended-900x400.png'),
    ('Hub USB 3.0 com 4 Portas', 69.90, NULL, 26, 0, 4, 'assets/images/products/hub-usb-30-4-portas.png');

-- ============================================
-- PRODUTOS - BELEZA
-- categoria_id = 7
-- ============================================

INSERT INTO produtos 
(nome, preco, estoque, categoria_id, imagem)
VALUES
    ('Kit Shampoo e Condicionador Hidratante', 69.90, 25, 7, 'assets/images/products/kit-shampoo-condicionador-hidratante.png'),
    ('Máscara Capilar de Hidratação Intensiva', 49.90, 30, 7, 'assets/images/products/mascara-capilar-hidratacao-intensiva.png'),
    ('Secador de Cabelo 2000W com Íons', 189.90, 12, 7, 'assets/images/products/secador-cabelo-2000w-ions.png'),
    ('Escova Secadora 4 em 1', 229.90, 10, 7, 'assets/images/products/escova-secadora-4-em-1.png'),
    ('Modelador de Cachos Cerâmico', 159.90, 14, 7, 'assets/images/products/modelador-cachos-ceramico.png'),
    ('Kit de Pincéis para Maquiagem 12 Peças', 79.90, 21, 7, 'assets/images/products/kit-pinceis-maquiagem-12-pecas.png');