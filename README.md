# Projeto de Automação web e API com Cypress

Este projeto utiliza o Cypress para automação de testes em aplicações web e APIs. Este README fornece instruções para instalar as dependências, configurar o ambiente e executar os testes.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Executando os Testes](#executando-os-testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (recomenda-se a versão LTS)
- [Git](https://git-scm.com/) (opcional, mas recomendado)

## Para verificar se o Node.js e o npm (gerenciador de pacotes do Node.js) estão instalados, execute:

```bash (cmd)
node -v
npm -v

Instalação

Siga os passos abaixo para configurar o projeto em sua máquina:

Clone o repositório:

bash
Copiar código
git clone https://github.com/romarioiramor/cypress-web-e-api.git

Navegue até o diretório do projeto:

bash
execute o comando: code .
para abrir o projeto no VS Code, se tiver ele instalado ou abra outro de sua preferencia

Instale as dependências:

Execute o seguinte comando para instalar as dependências do projeto:

bash

npm install
Isso instalará o Cypress e quaisquer outras dependências especificadas no arquivo package.json.

Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

├── cypress
│   ├── e2e            # End-to-end
│   ├── api            # Testes de API
│   ├── testes web     # Testes WEB
│   ├── fixtures       # Massa de Dados de teste
│   ├── pages          # Pages para mapeamento
│   ├── screenshots    # Imagens de cenarios com erros
│   └── support        # Comandos personalizados e configuração do Cypress
├── node_modules       # Dependências do projeto
├── gitignore          # Dependências que nao comitadas no projeto
├── package.json       # Dependências e scripts do projeto
└── README.md          # Este documento

Executando os Testes
Após a instalação das dependências, você pode executar os testes de diferentes maneiras:

1. Executar no Modo Interativo
Para abrir o Cypress no modo interativo, use o seguinte comando:

bash

npx cypress open

Isso abrirá a interface gráfica do Cypress, onde você pode selecionar e executar os testes.

2. Executar no Modo Headless
Para executar todos os testes em modo headless (sem interface gráfica), use:

bash

npx cypress run