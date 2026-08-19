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

INSERT INTO produtos (nome, preco, estoque, categoria_id, imagem)
VALUES
    ('Camiseta Masculina Básica de Algodão', 49.90, 35, 1, 'assets/images/products/camiseta-masculina-basica-algodao.png'),
    ('Camiseta Masculina Oversized Premium', 79.90, 22, 1, 'assets/images/products/camiseta-masculina-oversized-premium.png'),
    ('Camisa Polo Masculina Slim Fit', 99.90, 18, 1, 'assets/images/products/camisa-polo-masculina-slim-fit.png'),
    ('Calça Jeans Masculina Reta Azul', 149.90, 14, 1, 'assets/images/products/calca-jeans-masculina-reta-azul.png'),
    ('Bermuda Masculina Sarja Casual', 89.90, 25, 1, 'assets/images/products/bermuda-masculina-sarja-casual.png'),
    ('Moletom Masculino com Capuz', 159.90, 12, 1, 'assets/images/products/moletom-masculino-capuz.png'),
    ('Jaqueta Masculina Corta-Vento', 189.90, 9, 1, 'assets/images/products/jaqueta-masculina-corta-vento.png'),
    ('Blazer Masculino Casual Slim', 249.90, 7, 1, 'assets/images/products/blazer-masculino-casual-slim.png'),
    ('Regata Masculina Esportiva Dry Fit', 59.90, 28, 1, 'assets/images/products/regata-masculina-esportiva-dry-fit.png'),
    ('Calça Jogger Masculina Moletom', 119.90, 16, 1, 'assets/images/products/calca-jogger-masculina-moletom.png');


-- ============================================
-- PRODUTOS - FEMININO
-- categoria_id = 2
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id, imagem)
VALUES
    ('Blusa Feminina Básica de Algodão', 54.90, 30, 2, 'assets/images/products/blusa-feminina-basica-algodao.png'),
    ('Camiseta Feminina Oversized Premium', 74.90, 24, 2, 'assets/images/products/camiseta-feminina-oversized-premium.png'),
    ('Vestido Feminino Midi Casual', 139.90, 13, 2, 'assets/images/products/vestido-feminino-midi-casual.png'),
    ('Calça Jeans Feminina Mom Fit', 159.90, 15, 2, 'assets/images/products/calca-jeans-feminina-mom-fit.png'),
    ('Shorts Feminino de Sarja', 84.90, 21, 2, 'assets/images/products/shorts-feminino-sarja.png'),
    ('Moletom Feminino com Capuz', 149.90, 11, 2, 'assets/images/products/moletom-feminino-capuz.png'),
    ('Jaqueta Feminina Jeans Oversized', 179.90, 8, 2, 'assets/images/products/jaqueta-feminina-jeans-oversized.png'),
    ('Saia Feminina Midi Plissada', 119.90, 17, 2, 'assets/images/products/saia-feminina-midi-plissada.png'),
    ('Top Feminino Esportivo de Alta Sustentação', 89.90, 20, 2, 'assets/images/products/top-feminino-esportivo-alta-sustentacao.png'),
    ('Calça Legging Feminina Esportiva', 99.90, 27, 2, 'assets/images/products/calca-legging-feminina-esportiva.png');


-- ============================================
-- PRODUTOS - ACESSÓRIOS
-- categoria_id = 3
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id, imagem)
VALUES
    ('Mochila Casual para Notebook 15,6"', 129.90, 18, 3, 'assets/images/products/mochila-casual-notebook-156.png'),
    ('Carteira Masculina Compacta em Couro Sintético', 59.90, 32, 3, 'assets/images/products/carteira-masculina-couro-sintetico.png'),
    ('Bolsa Feminina Transversal Casual', 89.90, 20, 3, 'assets/images/products/bolsa-feminina-transversal-casual.png'),
    ('Cinto Masculino de Couro Sintético', 69.90, 25, 3, 'assets/images/products/cinto-masculino-couro-sintetico.png'),
    ('Óculos de Sol com Proteção UV', 79.90, 16, 3, 'assets/images/products/oculos-sol-protecao-uv.png'),
    ('Boné Unissex Aba Curva', 49.90, 29, 3, 'assets/images/products/bone-unissex-aba-curva.png'),
    ('Relógio Digital Esportivo Unissex', 99.90, 14, 3, 'assets/images/products/relogio-digital-esportivo-unissex.png'),
    ('Porta-Cartões Compacto com RFID', 39.90, 35, 3, 'assets/images/products/porta-cartoes-rfid.png'),
    ('Mochila Executiva para Notebook 17"', 179.90, 10, 3, 'assets/images/products/mochila-executiva-notebook-17.png'),
    ('Capa para Notebook 15,6" com Zíper', 69.90, 23, 3, 'assets/images/products/capa-notebook-156-ziper.png');


-- ============================================
-- PRODUTOS - CASA
-- categoria_id = 4
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id, imagem)
VALUES
    ('Jogo de Cama Casal 4 Peças', 129.90, 18, 4, 'assets/images/products/jogo-cama-casal-4-pecas.png'),
    ('Kit de Toalhas de Banho 4 Peças', 99.90, 22, 4, 'assets/images/products/kit-toalhas-banho-4-pecas.png'),
    ('Luminária de Mesa LED Touch', 89.90, 16, 4, 'assets/images/products/luminaria-mesa-led-touch.png'),
    ('Organizador de Gavetas com 6 Divisórias', 39.90, 31, 4, 'assets/images/products/organizador-gavetas-6-divisorias.png'),
    ('Kit de Potes Herméticos 10 Peças', 79.90, 24, 4, 'assets/images/products/kit-potes-hermeticos-10-pecas.png'),
    ('Jogo de Panelas Antiaderente 5 Peças', 249.90, 8, 4, 'assets/images/products/jogo-panelas-antiaderente-5-pecas.png'),
    ('Escorredor de Louças Inox Compacto', 119.90, 13, 4, 'assets/images/products/escorredor-loucas-inox-compacto.png'),
    ('Almofada Decorativa Geométrica', 44.90, 27, 4, 'assets/images/products/almofada-decorativa-geometrica.png'),
    ('Tapete para Sala Antiderrapante 150x200cm', 159.90, 11, 4, 'assets/images/products/tapete-sala-antiderrapante-150x200.png'),
    ('Garrafa Térmica Inox 1 Litro', 89.90, 19, 4, 'assets/images/products/garrafa-termica-inox-1-litro.png');


-- ============================================
-- PRODUTOS - ELETRÔNICOS
-- categoria_id = 5
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id, imagem)
VALUES
    ('Mouse Gamer RGB 7200 DPI', 129.90, 25, 5, 'assets/images/products/mouse-gamer-rgb-7200-dpi.png'),
    ('Teclado Mecânico Gamer RGB ABNT2', 249.90, 14, 5, 'assets/images/products/teclado-mecanico-gamer-rgb-abnt2.png'),
    ('Headset Gamer com Microfone e LED RGB', 199.90, 18, 5, 'assets/images/products/headset-gamer-microfone-led-rgb.png'),
    ('Webcam Full HD 1080p com Microfone', 159.90, 12, 5, 'assets/images/products/webcam-full-hd-1080p-microfone.png'),
    ('Mousepad Gamer Extended 900x400mm', 89.90, 30, 5, 'assets/images/products/mousepad-gamer-extended-900x400.png'),
    ('Hub USB 3.0 com 4 Portas', 69.90, 26, 5, 'assets/images/products/hub-usb-30-4-portas.png'),
    ('Suporte Articulado para Monitor 27"', 179.90, 9, 5, 'assets/images/products/suporte-articulado-monitor-27.png'),
    ('SSD NVMe 1TB PCIe 4.0', 399.90, 13, 5, 'assets/images/products/ssd-nvme-1tb-pcie-40.png'),
    -- FALTA 2 AQUI EM BAIXO
    --!!!!!!!
    --!!!!!!!
    --!!!!!!!
    ('Memória RAM DDR4 16GB 3200MHz', 229.90, 17, 5, 'assets/images/products/memoria-ram-ddr4-16gb-3200mhz.png'),
    ('Caixa de Som Bluetooth Portátil 20W', 159.90, 21, 5, 'assets/images/products/caixa-som-bluetooth-portatil-20w.png');


-- ============================================
-- PRODUTOS - ESPORTES
-- categoria_id = 6
-- ============================================
-- COMECEI POR AQUI SEM QUERER, VOU VOLTANDO PARA CIMA LOGO PARA BAIXO AQ 
--!!!!!!!
--!!!!!!!
--!!!!!!!
--!!!!!!!
--!!!!!!!
--!!!!!!!
INSERT INTO produtos (nome, preco, estoque, categoria_id, imagem)
VALUES
    ('Camisa Esportiva Dry Fit Masculina', 69.90, 30, 6, 'assets/images/products/camisa-esportiva-dry-fit-masculina.png'),
    ('Shorts Esportivo Masculino com Bolso', 59.90, 28, 6, 'assets/images/products/shorts-esportivo-masculino-bolso.png'),
    ('Legging Esportiva Feminina de Alta Compressão', 99.90, 19, 6, 'assets/images/products/legging-esportiva-feminina-alta-compressao.png'),
    ('Top Esportivo Feminino Dry Fit', 79.90, 23, 6, 'assets/images/products/top-esportivo-feminino-dry-fit.png'),
    ('Garrafa Esportiva Squeeze 750ml', 39.90, 40, 6, 'assets/images/products/garrafa-esportiva-squeeze-750ml.png'),
    ('Corda de Pular com Rolamento', 49.90, 26, 6, 'assets/images/products/corda-pular-rolamento.png'),
    ('Colchonete para Exercícios 10mm', 79.90, 17, 6, 'assets/images/products/colchonete-exercicios-10mm.png'),
    ('Kit de Faixas Elásticas para Treino', 69.90, 20, 6, 'assets/images/products/kit-faixas-elasticas-treino.png'),
    ('Luva para Academia com Proteção de Punho', 59.90, 24, 6, 'assets/images/products/luva-academia-protecao-punho.png'),
    ('Bola de Futebol de Campo Oficial', 119.90, 15, 6, 'assets/images/products/bola-futebol-campo-oficial.png');

--!!!!!!!
--!!!!!!!
--!!!!!!!
--!!!!!!!
--!!!!!!!

-- ============================================
-- PRODUTOS - BELEZA
-- categoria_id = 7
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id, imagem)
VALUES
    ('Kit Shampoo e Condicionador Hidratante', 69.90, 25, 7, 'assets/images/products/kit-shampoo-condicionador-hidratante.png'),
    ('Máscara Capilar de Hidratação Intensiva', 49.90, 30, 7, 'assets/images/products/mascara-capilar-hidratacao-intensiva.png'),
    ('Secador de Cabelo 2000W com Íons', 189.90, 12, 7, 'assets/images/products/secador-cabelo-2000w-ions.png'),
    ('Escova Secadora 4 em 1', 229.90, 10, 7, 'assets/images/products/escova-secadora-4-em-1.png'),
    ('Modelador de Cachos Cerâmico', 159.90, 14, 7, 'assets/images/products/modelador-cachos-ceramico.png'),
    ('Kit de Pincéis para Maquiagem 12 Peças', 79.90, 21, 7, 'assets/images/products/kit-pinceis-maquiagem-12-pecas.png'),
    ('Espelho de Mesa com Iluminação LED', 99.90, 18, 7, 'assets/images/products/espelho-mesa-iluminacao-led.png'),
    ('Necessaire de Maquiagem Grande', 69.90, 27, 7, 'assets/images/products/necessaire-maquiagem-grande.png'),
    ('Aparador de Pelos Recarregável', 149.90, 16, 7, 'assets/images/products/aparador-pelos-recarregavel.png'),
    ('Kit de Cuidados para Unhas 7 Peças', 39.90, 33, 7, 'assets/images/products/kit-cuidados-unhas-7-pecas.png');


-- ============================================
-- PRODUTOS - CALÇADOS
-- categoria_id = 8
-- ============================================

INSERT INTO produtos (nome, preco, estoque, categoria_id, imagem)
VALUES
    ('Tênis Esportivo Masculino para Corrida', 199.90, 14, 8, 'assets/images/products/tenis-esportivo-masculino-corrida.png'),
    ('Tênis Casual Masculino em Lona', 129.90, 20, 8, 'assets/images/products/tenis-casual-masculino-lona.png'),
    ('Tênis Masculino Streetwear Solado Alto', 179.90, 12, 8, 'assets/images/products/tenis-masculino-streetwear-solado-alto.png'),
    ('Tênis Esportivo Feminino para Academia', 189.90, 16, 8, 'assets/images/products/tenis-esportivo-feminino-academia.png'),
    ('Tênis Casual Feminino Branco', 149.90, 22, 8, 'assets/images/products/tenis-casual-feminino-branco.png'),
    ('Tênis Feminino Slip On Confortável', 119.90, 18, 8, 'assets/images/products/tenis-feminino-slip-on-confortavel.png'),
    ('Sandália Feminina Casual com Tiras', 99.90, 25, 8, 'assets/images/products/sandalia-feminina-casual-tiras.png'),
    ('Chinelo Masculino Anatômico', 59.90, 30, 8, 'assets/images/products/chinelo-masculino-anatomico.png'),
    ('Bota Masculina Casual de Cano Médio', 229.90, 9, 8, 'assets/images/products/bota-masculina-casual-cano-medio.png'),
    ('Bota Feminina Casual de Cano Curto', 219.90, 11, 8, 'assets/images/products/bota-feminina-casual-cano-curto.png');