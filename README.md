Sistema de Denúncias Ambientais
Descrição do Projeto
Este projeto consiste em uma aplicação para o registro, controle e análise de denúncias ambientais, permitindo que usuários anônimos possam reportar problemas relacionados ao meio ambiente. O sistema suporta três tipos de usuários, cada um com responsabilidades específicas dentro do processo de gerenciamento de denúncias.

Requisitos Funcionais
RF01 - Cadastro de Denúncias Anônimas
A aplicação deverá permitir que usuários anônimos registrem denúncias sem necessidade de login no sistema.
RF02 - Tipos de Usuários
A aplicação terá três tipos de usuários:
Fiscal: Responsável por checar e conduzir a denúncia.
Biólogo: Responsável por fornecer um parecer técnico sobre o impacto ambiental da denúncia, caso seja verídica.
Admin: Tem controle total sobre a aplicação e pode registrar ou deletar fiscais e biólogos.
RF03 - Quantificação de Denúncias
O sistema deverá ser capaz de quantificar o número de denúncias com base em regiões (macrorregiões brasileiras ou unidades federais).
RF04 - Delegação de Denúncias
O Admin poderá delegar as denúncias para fiscais específicos, que serão responsáveis por averiguar o caso.
RF05 - Controle de Status de Denúncias
O Fiscal poderá alterar o status da denúncia para:
Não analisada
Sob análise
Analisada
RF06 - Restrições de Status
Denúncias com status "Analisada" não poderão ser revertidas para os estados anteriores, pois já foram processadas.
RF07 - Geração de Relatório em PDF
O sistema deverá gerar um relatório em PDF contendo as informações fornecidas pelos Fiscais e Biólogos, com os pareceres sobre cada denúncia.
Tecnologias Utilizadas
Linguagem de Programação: [Inserir linguagem]
Framework: [Inserir framework]
Banco de Dados: [Inserir banco de dados]
Como Executar o Projeto
Clone este repositório: git clone [URL]
Navegue até o diretório do projeto: cd [nome_do_projeto]
Instale as dependências: [comando para instalação de dependências]
Execute a aplicação: [comando para executar a aplicação]
Contribuições
Se você quiser contribuir com o projeto, sinta-se à vontade para abrir um Pull Request ou relatar problemas através de Issues.
