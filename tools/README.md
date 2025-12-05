# 🛠️ Ferramentas do Agente Criador

Este diretório contém ferramentas utilitárias para auxiliar na criação, design e desenvolvimento de sites. Elas são independentes dos projetos e podem ser usadas em qualquer contexto dentro do workspace.

---

## 🎨 1. Figma Extractor (`/tools/figma`)

Extrai automaticamente cores, tipografia e dados estruturais de arquivos do Figma.

### 📋 Como Usar:

1.  **Obtenha o Token e IDs**:
    - `FIGMA_TOKEN`: Seu token de acesso pessoal do Figma.
    - `FILE_ID`: ID do arquivo (da URL do Figma).
    - `NODE_ID`: ID do frame/node específico (opcional).

2.  **Configure**:
    - Edite `tools/figma/fetch-figma.js` com suas credenciais.

3.  **Execute**:
    ```bash
    node tools/figma/fetch-figma.js
    ```

4.  **Saída**:
    - `figma-node-data.json`: Dados brutos completos.
    - `figma-analysis.json`: Resumo de cores e fontes.

---

## 🌐 2. Site Cloner (`/tools/cloner`)

Clona a estrutura HTML e imagens de um site existente para referência ou estudo.

### 📋 Como Usar:

1.  **Execute o comando**:
    ```bash
    node tools/cloner/clone-site.js <URL_DO_SITE>
    ```

    *Exemplo:*
    ```bash
    node tools/cloner/clone-site.js https://www.exemplo.com.br
    ```

2.  **Saída**:
    - Os sites clonados são salvos em `tools/cloner/cloned_sites/<dominio>/`.
    - Inclui `index.html` (com links ajustados) e pasta `assets/` com imagens.

---

## 🤖 Dicas para o Agente

- **Figma**: Use os dados JSON gerados para criar configurações do Tailwind (`tailwind.config.js`) precisas.
- **Cloner**: Use o HTML clonado para analisar estruturas de layout complexas ou extrair assets específicos.
- **Organização**: Mantenha essas ferramentas fora das pastas de projetos (`src`, `public`) para evitar "sujeira" no código de produção.
