# 🤖 AgentAdoravel - Site Creator Agent

Um agente de IA especializado em criar sites profissionais usando React, Vite e Tailwind CSS. Este repositório contém o workspace central de desenvolvimento, ferramentas e projetos.

## 📂 Estrutura do Workspace

### 🏗️ `/projects`
Aqui ficam os projetos de sites em desenvolvimento. Cada projeto é independente.
- **`padaria-monza/`**: Site institucional da Padaria Monza (React + Tailwind).

### 🛠️ `/tools`
Ferramentas de automação e utilitários para acelerar o desenvolvimento.
- **`figma/`**: Scripts para extração de design system (cores, fontes) do Figma.
- **`cloner/`**: Ferramenta para clonagem de sites de referência (HTML + Assets).

### ⚙️ `/agent_setup`
Configurações e instruções globais do agente (System Prompt, Tools Config).

---

## ✨ Características do Agente

### Stack Tecnológica (Golden Stack)
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Routing:** React Router v7

### Princípios de Design
- ✅ Designs premium e modernos
- ✅ Responsivo (mobile-first)
- ✅ SEO otimizado
- ✅ Performance

---

## 🚀 Como Iniciar

### 1. Usar Ferramentas
Consulte `tools/README.md` para documentação detalhada sobre como usar o extrator do Figma e o clonador de sites.

### 2. Rodar um Projeto
Exemplo com Padaria Monza:
```bash
cd projects/padaria-monza
npm install
npm run dev
```

---

## 🔧 Customização

### Modificar o Comportamento
Edite `agent_setup/system_prompt.md` para mudar o stack ou regras de design.

### Adicionar Novas Ferramentas
Edite `agent_setup/tools_config.md` e adicione scripts em `tools/`.

---

## 📝 Licença
MIT License - Desenvolvido por [Million New Era](https://github.com/cesar6449921)
