* [Título](#Título) <h1 align="center">Aplicação - EcoVOZ (Front-End)</h1>

* [Status do Projeto](#Status-do-Projeto)

<p align="center">
<img src="https://img.shields.io/badge/Status-Concluído-green">
</p>
<br>

* [Descrição do Projeto](#Descrição-do-Projeto)

Este projeto consiste em uma aplicação para o registro, controle e análise de denúncias ambientais, permitindo que usuários anônimos possam reportar crimes relacionados ao meio ambiente. O sistema suporta três tipos de usuários - admin, fiscal e biólogo - cada um com responsabilidades específicas na utilização da aplicação.

Para executar propriamente a aplicação, é necessário inicializar o back-end e, em seguida, inicializar o front-end também com o comando "npm run dev". 

* [Requisitos Funcionais](#Requisitos-funcionais)

 `RF01 - Cadastro de Denúncias Anônimas`

 `A aplicação terá três tipos de usuários:
 Fiscal: Responsável por checar e conduzir a denúncia.
 Biólogo: Responsável por fornecer um parecer técnico sobre o impacto ambiental da denúncia.
 Admin: Tem controle total sobre a aplicação, podendo registrar ou deletar fiscais e biólogos.`
 
* [Principais ferramentas utilizadas](#Ferramentas-utilizadas)

 `React.js: para componentização e organização das telas.`

 `Biblioteca MUI: biblioteca de front-end para diversos fins. Neste projeto, ela foi empregada para desenvolver um accordion, ou seja, uma lista de cards que podem ser expandidos via drop-down.`

 `React-datepicker e date-fns: utilizado para criar um calendário que é utilizado para determinar o dia do ocorrido na criação de uma nova denúncia.`
 
 `Reat-router-dom: biblioteca do React para administrar a navegação entre páginas da aplicação.`

 `React-spinners: biblioteca para criar e configurar ícones de loading para sinalizar carregamentos.`

 `React-toastify: biblioteca utilizada para criar toasters, ou seja, pequenos cards que mostram se a execução de uma ação conectada ao banco foi performada com sucesso ou não.`

 `React-loader-spinner: biblioteca utilizada para renderizar condicionalmente um spinner enquanto funções assíncronas ainda não foram concluídas.`

 `react-input-mask: Biblioteca utilizada para criar máscaras de valores para CPF e telefone nos inputs de criação de usuários.`
 
* [Introdução](#Introducao)

O presente projeto foi realizado tendo como objetivo o desenvolvimento de uma aplicação que permita ao usuário consultar previsões climáticas especificamente da cidade de Florianópolis e também de qualquer cidade brasileira, em diferentes páginas, retornando ao usuário informações interessantes como temperatura média dos próximos dias, velocidade média do vento, umidade relativa do ar etc.
