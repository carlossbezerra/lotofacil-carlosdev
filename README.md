# lotofacil-carlosdev

Sorteio de Números
Este projeto é uma aplicação web para realizar sorteios de números com algumas regras específicas, utilizando HTML, SCSS e JavaScript.

Funcionalidades
Seleção de Números:

Gera 25 números (de 1 a 25).

Permite que o usuário insira 15 números sorteados no dia anterior.

Dos 10 números restantes (dos 25), seleciona 6 números aleatoriamente.

Junta os 15 números do dia anterior com os 6 números sorteados.

Sorteia 15 números, sendo 7 pares e 8 ímpares.

Exibe os 15 números sorteados de forma crescente.

Interface:

Interface intuitiva para inserir os números sorteados no dia anterior.

Exibe os números sorteados de forma clara e organizada.

Área de "Debug" para visualizar os dados intermediários e facilitar a depuração.

Como usar
Estrutura do Projeto:

Certifique-se de que a estrutura de arquivos esteja organizada da seguinte forma:

numeros-sorteio/
├── index.html
├── style.css (gerado a partir de style.scss)
└── script.js
Use code with caution.
Compilação do SCSS:

Se você não tiver um compilador SCSS instalado localmente, utilize um compilador SCSS online para compilar o arquivo style.scss em style.css.

Abrir no Navegador:

Abra o arquivo index.html em seu navegador.

Inserir Números Anteriores:

No campo "Números sorteados ontem", insira os 15 números sorteados no dia anterior, separados por vírgulas (ex: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15).

Sortear Números:

Clique no botão "Sortear Números".

Visualizar Resultados:

Os 15 números sorteados serão exibidos na lista "Números Sorteados", em ordem crescente.

A seção "Debug" mostrará os números utilizados em cada etapa do sorteio.

Tecnologias Utilizadas
HTML: Estrutura da página web.

SCSS: Estilos da página, pré-processador CSS que facilita a organização do CSS e deixa mais amigável.

JavaScript: Lógica do sorteio e manipulação do DOM.

Estrutura dos Arquivos
index.html: Estrutura HTML da página, com campos para inserir dados, botão de sortear e área para exibir os números sorteados.

style.scss: Estilos da página utilizando o pré-processador SCSS para melhor organização e estilização.

script.js: Lógica do sorteio e manipulação dos elementos HTML.

Dependências
Nenhuma dependência externa é necessária para rodar a aplicação. Apenas um navegador web.

Considerações Adicionais
Validação: O código verifica se foram inseridos 15 números no input para evitar erros.

CSS: O SCSS é usado para estilizar a página e deixa-la mais agradável visualmente.

Flexibilidade: O código pode ser facilmente adaptado para outras necessidades de sorteio.

Contribuições
Contribuições são bem-vindas! Se você tem alguma melhoria, correção de bugs ou novas funcionalidades a propor, sinta-se à vontade para abrir uma issue ou um pull request.

Este README fornece uma visão geral do projeto e informações básicas para seu uso e contribuição. Se tiver dúvidas, entre em contato!
