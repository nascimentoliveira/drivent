![created date - drivent](https://img.shields.io/date/1680145200?color=007ec6&label=created%20at&style=flat-square)
![license - genie](https://img.shields.io/github/license/nascimentoliveira/genie?color=007ec6&style=flat-square)
![last commit - genie](https://img.shields.io/github/last-commit/nascimentoliveira/genie?color=007ec6&style=flat-square)
![repo size - genie](https://img.shields.io/github/repo-size/nascimentoliveira/genie?color=007ec6&style=flat-square)
![files - genie](https://img.shields.io/github/directory-file-count/nascimentoliveira/genie?color=007ec6&style=flat-square)
![language - genie](https://img.shields.io/github/languages/top/nascimentoliveira/genie?color=007ec6&style=flat-square)
![stars - genie](https://img.shields.io/github/stars/nascimentoliveira/genie?color=007ec6&style=flat-square)
![forks - genie](https://img.shields.io/github/forks/nascimentoliveira/genie?color=007ec6&style=flat-square)

# 🚧👷🏻 Genie - Plataforma de Gerenciamento de Desejos

> 👷🏻 Genie ainda está sendo desenvolvido! Algumas funcionalidades podem não estar disponíveis.

Genie é uma plataforma inovadora que ajuda os usuários a alcançar seus desejos financeiros, fornecendo uma maneira fácil e eficiente de gerenciar suas economias por meio de micro poupanças. Com o Genie, os usuários podem cadastrar seus desejos, definir metas de valor e prazos para resgate, e acompanhar seu progresso ao longo do tempo.

> O código-fonte do back-end da aplicação está hospedado no GitHub em: [Genie Back-end](https://github.com/nascimentoliveira/genie-api)

> Genie atualmente pode ser experimentado em: [Genie Live Demo](https://nascimentoliveira-genie.vercel.app)
>  
>> *A primeira requisição ao Live Demo pode levar um pouco mais de tempo para carregar. Isso ocorre porque os servidores são ativados conforme necessário e podem levar alguns instantes para iniciar!*

## Funcionalidades Principais

- **Cadastro de Usuários:** Os usuários podem se cadastrar na plataforma utilizando um endereço de e-mail e senha.

- **Conta Poupança:** A plataforma oferece um conta onde os usuários podem depositar ou retirar valores. Isso permite uma gestão centralizada dos recursos financeiros, proporcionando flexibilidade para distribuir e realocar o dinheiro conforme necessário.

- **Cadastro de Desejos:** Os usuários podem criar uma lista personalizada de desejos financeiros, onde cada desejo representa uma meta específica. Eles podem fornecer um nome descritivo e uma imagem representativa para cada desejo.

- **Metas e Prazos:** Para cada desejo cadastrado, os usuários podem definir uma meta de valor que desejam alcançar e uma data limite para resgate. Isso permite um planejamento mais preciso e ajuda a manter o foco na conquista dos objetivos financeiros.

- **Metas Secundárias:** Além da meta principal, os usuários têm a flexibilidade de estabelecer metas secundárias com datas e valores específicos. Essas metas secundárias podem ser usadas para dividir o objetivo final em etapas mais gerenciáveis e alcançáveis.

- **Associação com Imagens:** O Genie permite que os usuários personalizem seus desejos adicionando uma imagem associada a cada um deles. Essa funcionalidade visual proporciona uma experiência mais atraente e motivadora, ajudando os usuários a visualizarem seus desejos e se inspirarem para alcançá-los.

- **Distribuição de Recursos:** Com base no saldo da poupança, os usuários podem alocar recursos para cada um dos seus desejos. Eles podem depositar valores nos desejos individuais, acompanhando o progresso de cada meta financeira ao longo do tempo.

- **Retirada de Recursos:** Quando os usuários desejam resgatar recursos da plataforma, eles têm a opção de utilizar o saldo da poupança para realizar a retirada. Isso permite que os usuários aproveitem suas conquistas e utilizem o dinheiro economizado conforme desejarem.

- **Exclusão de Desejos:** Se um usuário decidir excluir um desejo, os valores acumulados para aquele desejo são devolvidos ao saldo da poupança. Isso oferece flexibilidade aos usuários para redefinir suas prioridades e remover desejos que já foram alcançados ou que não são mais relevantes.

## Como Usar

1. Após iniciar a aplicação Genie, você será direcionado para a página inicial. Se você já tem uma conta, faça login usando suas credenciais. Caso contrário, clique em `New to genie? Create an account.` para criar uma nova conta.

2. Vocẽ será redirecionado para a sua conta poupança, clique no botão `NEW WISH` para adicionar um novo desejo. Preencha o nome descritivo do desejo, defina uma meta de valor e uma data de resgate.
Se desejar, faça o upload de uma imagem representativa para o desejo. 

3. Após cadastrar um desejo, você pode definir metas secundárias para ajudar a alcançar a meta principal. Procure pela seção de metas secundárias e clique em `ADD SUBGOAL`. Insira os detalhes da meta, como valor e data, e clique em `ADD`. Você pode adicionar quantas metas secundárias forem necessárias. Clique em `SAVE` para adicionar o desejo à sua lista.

4. No painel principal do Genie, você verá o saldo da sua poupança.
Para distribuir recursos para um desejo, clique no desejo na lista.
Na página de detalhes do desejo, clique em `DEPOSIT` insira o valor que deseja depositar. Você também pode clicar em `WITHDRAW` para retirar valores do seu desejo. O saldo da sua poupança será atualizado automaticamente e o valor será alocado para o desejo selecionado ou somado, em caso de retirada.

5. Se desejar resgatar recursos da plataforma, vá para a página da sua conta. Insira o valor que deseja retirar e clique em `WITHDRAW`.
O valor será subtraído da sua conta poupança e estará disponível para utilização externa.

6. Para excluir um desejo, acesse a página de detalhes do desejo e clique em `DELETE`. O desejo será removido da lista e os valores acumulados serão devolvidos saldo da sua poupança.

Agora você está pronto para utilizar todas as funcionalidades do Genie para gerenciar seus desejos financeiros. Aproveite a plataforma e acompanhe seu progresso em direção às suas metas!


## Tecnologias Utilizadas

Genie está sendo desenvolvido utilizando as seguintes tecnologias:

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
    git clone https://github.com/nascimentoliveira/genie.git
    ```

2. Acesse o diretório do projeto.
   ```bash
   cd genie
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