# Site Creator Agent

Um agente de IA especializado em criar sites profissionais usando React, Vite e Tailwind CSS.

## 🤖 O que é isso?

Este repositório contém as configurações para um agente de IA (Google Gemini 2.0 Flash) que funciona como um desenvolvedor web profissional. Ele pode criar sites completos do zero, seguindo as melhores práticas de desenvolvimento.

## 📁 Estrutura

```
agent_setup/
├── system_prompt.md      # Personalidade e comportamento do agente
└── tools_config.md       # Mapeamento de ferramentas e tarefas
```

## ✨ Características

### Stack Tecnológica (Golden Stack)
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Routing:** React Router v7

### Princípios de Design
- ✅ Designs premium e modernos (não MVPs básicos)
- ✅ Responsivo (mobile-first)
- ✅ SEO otimizado
- ✅ Performance (lazy loading, code splitting)
- ✅ Acessibilidade

## 🚀 Como Usar

### 1. Pré-requisitos
- Acesso ao Google AI Studio ou Gemini API
- Node.js 18+ instalado
- Git instalado

### 2. Configuração

1. Clone este repositório:
```bash
git clone https://github.com/SEU-USUARIO/site-creator-agent.git
cd site-creator-agent
```

2. Use os arquivos de configuração no seu projeto:
   - Copie `agent_setup/` para a raiz do seu workspace
   - O agente vai ler automaticamente as configurações

### 3. Criar um Novo Site

Basta pedir ao agente:
```
"Crie um site para [nome da empresa] com [descrição]"
```

O agente vai:
1. Criar a estrutura do projeto
2. Instalar dependências
3. Configurar Tailwind com cores personalizadas
4. Criar componentes reutilizáveis
5. Implementar páginas
6. Otimizar para produção
7. Preparar para deploy

## 📚 Exemplos de Projetos Criados

- **Servitec Treinamentos** - Site de treinamentos em segurança do trabalho
  - 6 páginas completas
  - SEO otimizado
  - Deploy na Vercel
  - [Ver repositório](https://github.com/cesar6449921/servitec-treinamentos)
  - https://servitec-treinamentos.vercel.app/

## 🔧 Customização

### Modificar o Comportamento
Edite `agent_setup/system_prompt.md` para:
- Mudar o stack tecnológico
- Adicionar novas regras de design
- Definir workflows personalizados

### Adicionar Novas Ferramentas
Edite `agent_setup/tools_config.md` para:
- Mapear novas tarefas
- Definir ferramentas específicas
- Criar workflows automatizados

## 🌐 Compatibilidade

| Plataforma | Status | Observações |
|------------|--------|-------------|
| Google AI Studio | ✅ Nativo | Funciona perfeitamente |
| Gemini API | ✅ Sim | Requer configuração de API |
| Cursor/Windsurf | ⚠️ Parcial | Precisa adaptar para `.cursorrules` |
| Claude | ⚠️ Parcial | Precisa adaptar para `.clinerules` |
| GitHub Copilot | ❌ Não | Não suporta custom prompts |

## 📖 Documentação

- [System Prompt](agent_setup/system_prompt.md) - Configuração completa do agente
- [Tools Config](agent_setup/tools_config.md) - Mapeamento de ferramentas

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você melhorou o agente ou criou novos workflows:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

MIT License - sinta-se livre para usar em projetos pessoais ou comerciais.

## 🙏 Créditos

Desenvolvido por [Million New Era](https://github.com/cesar6449921)

---

**⭐ Se este projeto te ajudou, deixe uma estrela!**
