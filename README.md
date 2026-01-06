# Fretebras - PWA de Gestão de Fretes

Uma Progressive Web App (PWA) moderna para gerenciamento de fretes e logística, construída com React, TypeScript, Tailwind CSS e Vite.

## 🚀 Características

- ✅ **PWA Completa**: Instalável em dispositivos móveis e desktop
- 📱 **Design Responsivo**: Funciona perfeitamente em todos os tamanhos de tela
- 🎨 **Pixel Perfect**: Design 100% fiel ao Figma
- ⚡ **Performance Otimizada**: Carregamento rápido com Vite
- 🔄 **Service Worker**: Funcionalidade offline e cache inteligente
- 🎯 **Tipagem TypeScript**: Código seguro e manutenível
- 💅 **Tailwind CSS**: Estilização moderna e responsiva
- 🌐 **Internacionalização**: Pronto para português brasileiro

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm (gerenciador de pacotes recomendado)

## 🛠️ Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

## 🎨 Design System

O projeto utiliza um design system baseado no Figma com as seguintes características:

### Cores Principais
- **Primary Blue**: `#0769DA` - Ações principais e elementos interativos
- **Text Strong**: `#111` - Textos principais
- **Text Medium**: `#636B7E` - Textos secundários
- **Surface Primary Weakest**: `#DBECFF` - Backgrounds de destaque

### Tipografia
- **Satoshi**: Fonte principal para todo o conteúdo
- **Roboto**: Fonte secundária para elementos do sistema

### Espaçamento
- Small: `16px`
- Large: `24px`
- Border Radius: `16px` (large), `500px` (pill)

## 📱 Funcionalidades PWA

### Manifest
O arquivo `manifest.json` configura:
- Nome e ícones da aplicação
- Modo de exibição standalone
- Cor do tema (`#0769DA`)
- Orientação portrait

### Service Worker
O service worker (`sw.js`) fornece:
- Cache de assets estáticos
- Funcionalidade offline básica
- Atualização automática de cache

### Instalação
Os usuários podem instalar a PWA:
1. **Android**: Via prompt de instalação do navegador
2. **iOS**: Adicionar à tela inicial via Safari
3. **Desktop**: Via ícone de instalação na barra de endereços

## 🏗️ Estrutura do Projeto

```
├── client/              # Código do frontend
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── lib/            # Utilitários e helpers
│   ├── hooks/          # React hooks customizados
│   └── global.css      # Estilos globais e variáveis CSS
├── public/             # Assets estáticos
│   ├── manifest.json   # Manifest da PWA
│   ├── sw.js          # Service Worker
│   └── icon-*.svg     # Ícones da PWA
├── server/            # API backend (Express)
└── shared/            # Código compartilhado
```

## 🎯 Página de Detalhes do Frete

A página principal (`/`) exibe:

- **Informações da Rota**: Origem, destino e timeline
- **Detalhes da Carga**: Tipo, peso, volume e unidades
- **Compatibilidade**: Verificação de compatibilidade do veículo
- **Taxa de Serviço**: Valor e opção VIP
- **Informações do Transportador**: Avaliações e tempo de atividade
- **Formas de Pagamento**: Opções disponíveis
- **Garantia de Volta**: Fretes de retorno disponíveis
- **Ação Rápida**: Botão de conversa fixo no rodapé

## 🔧 Tecnologias Utilizadas

- **React 18**: Biblioteca UI
- **TypeScript**: Tipagem estática
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework de estilos
- **Express**: Backend API
- **Lucide React**: Ícones
- **React Router**: Roteamento
- **React Query**: Gerenciamento de estado servidor

## 📦 Build e Deploy

```bash
# Build de produção
pnpm build

# O build gera:
# - dist/spa/: Assets do frontend
# - dist/server/: Build do servidor
```

## 🌐 Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para o funcionamento básico da aplicação.

## 📄 Licença

Este projeto é privado e proprietário.

## 🤝 Suporte

Para questões e suporte, entre em contato através dos canais oficiais da Fretebras.
