![created date - drivent](https://img.shields.io/date/1677553200?color=007ec6&label=created%20at&style=flat-square)
![license - drivent](https://img.shields.io/github/license/nascimentoliveira/drivent?color=007ec6&style=flat-square)
![last commit - drivent](https://img.shields.io/github/last-commit/nascimentoliveira/drivent?color=007ec6&style=flat-square)
![repo size - drivent](https://img.shields.io/github/repo-size/nascimentoliveira/drivent?color=007ec6&style=flat-square)
![files - drivent](https://img.shields.io/github/directory-file-count/nascimentoliveira/drivent?color=007ec6&style=flat-square)
![language - drivent](https://img.shields.io/github/languages/top/nascimentoliveira/drivent?color=007ec6&style=flat-square)
![stars - drivent](https://img.shields.io/github/stars/nascimentoliveira/drivent?color=007ec6&style=flat-square)
![forks - drivent](https://img.shields.io/github/forks/nascimentoliveira/drivent?color=007ec6&style=flat-square)

# Driven.t - Plataforma de Gerenciamento de Eventos

Driven.t é uma plataforma de gerenciamento de eventos que permite aos usuários se cadastrarem, adquirirem ingressos e participarem de atividades durante eventos. A plataforma oferece opções de ingressos online e presenciais, além da possibilidade de reserva de quartos de hotéis parceiros. Com o Driven.t, os organizadores podem criar eventos personalizados, enquanto os participantes têm acesso a uma variedade de recursos para aproveitar ao máximo sua experiência.

>  ⚠️ **IMPORTANTE:** Durante a utilização da plataforma, ao ser redirecionado para a página de pagamento, **NÃO INSIRA DADOS REAIS DE CARTÃO DE CRÉDITO**. Essa é uma versão de demonstração e não realiza transações reais. **UTILIZE DADOS FICTÍCIOS** para evitar qualquer exposição indevida de informações pessoais ou financeiras.

> O código-fonte do back-end da aplicação está hospedado no GitHub em: [Driven.t Back-end](https://github.com/nascimentoliveira/drivent-api)

> Driven.t atualmente pode ser experimentado em: [Driven.t Live Demo](https://nascimentoliveira-drivent.vercel.app)
>  
>> *A primeira requisição ao Live Demo pode levar um pouco mais de tempo para carregar. Isso ocorre porque os servidores são ativados conforme necessário e podem levar alguns instantes para iniciar!*

## Funcionalidades Principais

- **Cadastro de Usuários:** Os usuários podem se cadastrar na plataforma utilizando um endereço de e-mail e senha. Após o cadastro, os usuários fornecem informações pessoais adicionais, como CPF, endereço, telefone, etc. Com uma conta Driven.t, os usuários podem gerenciar suas participações em eventos, ingressos adquiridos e atividades selecionadas.

- **Opções de Ingressos:** A plataforma oferece dois tipos de ingressos: online e presencial. Os usuários podem escolher a opção que melhor se adequa às suas preferências e necessidades. Os ingressos online permitem que os usuários participem de eventos remotamente, através de transmissões ao vivo. Se o usuário optar pelo evento presencial, ele pode escolher se deseja adicionar hospedagem à sua reserva. Depois de efetuar o pagamento do ingresso, os usuários têm a oportunidade de escolherem a sua hospedagem, se for o caso, e se inscreverem em atividades oferecidas durante o evento.

- **Hospedagem em Hotéis Parceiros:** Para os usuários que adquirem ingressos presenciais, o Driven.t oferece a opção de se hospedar em hotéis parceiros próximos ao local do evento. Os usuários podem explorar uma lista de hotéis disponíveis, verificar a disponibilidade de quartos e realizar reservas diretamente pela plataforma.

- **Inscrição em Atividades:** 
As atividades são apresentadas por dia e local, permitindo que os usuários escolham as que desejam participar. Os usuários podem visualizar detalhes das atividades, como horário e localização para tomar decisões informadas.

## Como Usar

1. Após iniciar a aplicação Driven.t, você será direcionado para a página inicial. Se você já tem uma conta, faça login usando suas credenciais. Caso contrário, clique em `Não possui login? Inscreva-se` para criar uma nova conta.

2. Você será redirecionado à página `Dashboard` e verá um menu lateral, permitindo a navegação pelas seções: `Inscrição`, `Pagamento`, `Hotel`, `Atividades` e `Certificado`. 

3. `Inscrição`: Após fazer o login, você será solicitado a fornecer seus dados pessoais, como nome completo, data de nascimento, CPF, endereço e telefone. Certifique-se de preencher corretamente essas informações obrigatórias.

4. `Pagamento`: aqui ocorre a reserva do ingresso e seu pagamento. Escolha a modalidade do evento desejada e, se aplicável, selecione a opção de hospedagem. Após isso, ocorre o pagamento para confirmar a reserva do insgresso. Insira os dados de seu cartão de crédito. Preencha os detalhes necessários e conclua o processo de pagamento.
   > ⚠️ **IMPORTANTE:** Durante a utilização do projeto, ao ser redirecionado para a página de pagamento, **NÃO INSIRA DADOS REAIS DE CARTÃO DE CRÉDITO**. Essa é uma versão de demonstração e não realiza transações reais. **UTILIZE DADOS FICTÍCIOS** para evitar qualquer exposição indevida de informações pessoais ou financeiras.


5. `Hotel` (Apenas para ingressos presenciais com hospedagem): Caso tenha selecionado a opção de ingresso presencial com hospedagem, você será direcionado para a seleção de hotel. Navegue pela lista de hotéis parceiros disponíveis, verifique a disponibilidade de quartos e faça sua escolha. Em seguida, confirme a reserva do hotel.

6. `Atividades`: Após efetuar o pagamento do ticket, você terá a oportunidade de se inscrever nas atividades oferecidas durante o evento. Verifique a programação do evento, escolha as atividades que deseja participar e confirme sua inscrição.

Agora você está pronto para desfrutar do evento e aproveitar todas as atividades disponíveis na plataforma!


## Tecnologias Utilizadas

Driven.t foi desenvolvido utilizando as seguintes tecnologias:

- Linguagem de Programação: [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference).
- Front-end
    - [React](https://react.dev/learn): Biblioteca JavaScript de código aberto para a construção de interfaces de usuário.
    - [Axios](https://axios-http.com/ptbr/docs/intro): Biblioteca JavaScript para realizar requisições HTTP.
    - [Material-UI](https://mui.com/): Biblioteca de componentes de interface de usuário que segue as diretrizes de design do Material Design.
    - [Styled Components](https://styled-components.com/): Biblioteca para escrever estilos CSS de forma dinâmica em componentes React.
    - [React Dom](https://www.npmjs.com/package/react-dom): Biblioteca para renderização de componentes React no navegador.
    - [Sweet Alert](https://sweetalert2.github.io/): Biblioteca JavaScript para exibir belas caixas de diálogo modais.
    - [React Toastify](https://fkhadra.github.io/react-toastify/introduction): Biblioteca para exibir notificações e mensagens de toast na aplicação.
    - [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/): Biblioteca para exibir indicadores de carregamento de componentes na página.
    - [React Credit Card](https://www.npmjs.com/package/react-credit-cards): Biblioteca que fornece componentes para exibição e interação com cartões de crédito em aplicações React.
- Back-end
    - [TypeScript](https://www.typescriptlang.org/): Linguagem de programação de código aberto que estende a sintaxe do JavaScript, fornecendo tipagem estática opcional e outros recursos para melhorar o desenvolvimento.
    - [Node.js](https://nodejs.org/en/about): Plataforma de desenvolvimento JavaScript assíncrona baseada no motor V8 do Chrome.
    - [Express.js](https://expressjs.com/pt-br/): Framework web rápido e minimalista para Node.js.
    - [Dotenv](https://www.npmjs.com/package/dotenv): Pacote para carregar variáveis de ambiente a partir de um arquivo .env.
    - [Bcrypt](https://www.npmjs.com/package/bcrypt): Biblioteca para criptografia de senhas.
    - [Joi](https://joi.dev/): Biblioteca para validação de dados.
    - [JWT](https://www.npmjs.com/package/jsonwebtoken): Biblioteca para geração e validação de tokens de autenticação.
    - [http-status](https://www.npmjs.com/package/http-status): Biblioteca utilizada para padronizar e facilitar o uso dos códigos de status HTTP em respostas do servidor.
    - [Jest](https://jestjs.io/): Framework de teste JavaScript com foco na simplicidade e na experiência do desenvolvedor. Utilizado para testes unitários e de integração.
    - [Supertest](https://www.npmjs.com/package/supertest): Biblioteca utilizada para testar APIs HTTP de forma fácil e eficiente. Utilizada em conjunto com o Jest para realizar testes de integração.

- Banco de Dados: 
  - [PostgreSQL](https://www.postgresql.org/about/): Sistema de gerenciamento de banco de dados relacional, utilizado para armazenar e persistir os dados da aplicação.
  - [Redis](https://redis.io/): Banco de dados em memória de código aberto, utilizado para armazenamento de cache.
  - [Prisma ORM](https://www.prisma.io/): ORM (Object-Relational Mapping) de banco de dados, utilizado para facilitar a comunicação e manipulação de dados com o banco de dados PostgreSQL.

Essas tecnologias foram escolhidas para proporcionar uma experiência de desenvolvimento moderna, eficiente e escalável.

## Instalação
1. Clone o repositório do projeto:
    ```bash
    git clone https://github.com/nascimentoliveira/drivent.git
    ```

2. Acesse o diretório do projeto.
   ```bash
   cd drivent
   ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente:  
    Antes de executar a aplicação, é necessário configurar as variáveis de ambiente corretamente. Siga os passos abaixo:
    -  Renomeie o arquivo `.env.example` para `.env`.

        ```bash
        mv .env.example .env
        ```

    - Abra o arquivo `.env` em um editor de texto.
    - Procure a variável `APP_API_BASE_URL` e defina-a com a URL base da sua API. Exemplo:  

        ```bash
        APP_API_BASE_URL=http://localhost:8000/api
        ```

    - Verifique se existem outras variáveis de ambiente necessárias para o funcionamento da aplicação e defina-as de acordo com a sua configuração.

    - Salve o arquivo `.env`.
    
    > ⚠️ *Certifique-se de não compartilhar o arquivo `.env` contendo informações sensíveis, como senhas, chaves de API ou tokens de acesso. Mantenha-o seguro e fora do controle de versão do seu repositório.*

    Após configurar as variáveis de ambiente, a aplicação estará pronta para ser executada.

5. Execute o projeto:
    ```bash
    npm start
    ```
6. A aplicação ficará disponível em:
    ```bash
    http://localhost:3000
    ```

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu computador:  
-   Node.js (versão 16 ou superior)
-   NPM (versão 7 ou superior)


## Contribuição

Se você deseja contribuir para o projeto, siga os passos abaixo:

1. Faça um `fork` do repositório.
2. Crie uma nova `branch` com a sua contribuição: 
    ```bash
    git checkout -b <sua-contribuicao>
    ```
3. Faça as suas modificações  no código.
4. Faça `commit` das suas alterações:
    ```bash
    git commit -m "Sua contribuição"
    ```
5. Envie as alterações para o repositório remoto: .
    ```bash
    git push origin <sua-contribuicao>
    ```
6. Abra um `pull request` no repositório original, descrevendo as modificações realizadas.

Se te ajudei de alguma forma, ficarei feliz em saber. Se possível:  
⭐️ dê uma estrela para este projeto; e   
🪲 Encontre e relate `issues`

## Licença

Este projeto é licenciado sob a licença [MIT](https://choosealicense.com/licenses/mit/). Consulte o arquivo LICENSE para obter mais informações.

Disponibilizado por [Thiago Oliveira](https://www.linkedin.com/in/nascimentoliveira/).