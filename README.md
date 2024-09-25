
Aqui está o README formatado com Markdown:

Sistema de Denúncias Ambientais
📜 Descrição do Projeto
Este projeto consiste em uma aplicação para o registro, controle e análise de denúncias ambientais, permitindo que usuários anônimos possam reportar problemas relacionados ao meio ambiente. O sistema suporta três tipos de usuários, cada um com responsabilidades específicas no gerenciamento de denúncias.

📋 Requisitos Funcionais
RF01 - Cadastro de Denúncias Anônimas
A aplicação permitirá que usuários anônimos registrem denúncias sem a necessidade de login.
RF02 - Tipos de Usuários
A aplicação terá três tipos de usuários:
Fiscal: Responsável por checar e conduzir a denúncia.
Biólogo: Responsável por fornecer um parecer técnico sobre o impacto ambiental da denúncia.
Admin: Tem controle total sobre a aplicação, podendo registrar ou deletar fiscais e biólogos.
RF03 - Quantificação de Denúncias
O sistema deverá quantificar o número de denúncias baseadas em regiões geográficas (macrorregiões brasileiras ou unidades federais).
RF04 - Delegação de Denúncias
O usuário do tipo Admin poderá delegar denúncias para fiscais específicos.
RF05 - Controle de Status de Denúncias
O Fiscal poderá alterar o status da denúncia para:
Não analisada
Sob análise
Analisada
RF06 - Restrições de Status
Denúncias com status Analisada não poderão ser alteradas para os outros estados.
RF07 - Geração de Relatório em PDF
O sistema deverá gerar um relatório em PDF contendo:
O parecer do Fiscal sobre a ocorrência.
O parecer técnico do Biólogo sobre o impacto ambiental.
🛠️ Tecnologias Utilizadas
Linguagem de Programação: [Inserir linguagem]
Framework: [Inserir framework]
Banco de Dados: [Inserir banco de dados]
