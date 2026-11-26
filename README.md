# EducaDoa - Portal da ONG

Projeto desenvolvido com **Vite+** (Vanilla JavaScript) no frontend e **Express** no backend, contendo a rota de verificação `GET /api/health`.

## Pré-requisitos

- Node.js (v20+)
- Vite+ (`vp`) ou `pnpm`

## Como rodar o projeto

1. Acesse a pasta do projeto:
   ```bash
   cd EducaDoa
   ```

2. Instale as dependências:
   ```bash
   vp install
   ```

3. Configure as variáveis de ambiente copiando o arquivo de exemplo:
   ```bash
   cp .env.example .env
   ```

4. Inicie o servidor da API Express (Terminal 1):
   ```bash
   vp run api
   ```

5. Inicie o servidor frontend Vite+ (Terminal 2):
   ```bash
   vp dev
   ```

6. Acesse no navegador o endereço exibido no terminal (geralmente `http://localhost:5173`) para visualizar o status da API na página inicial.
