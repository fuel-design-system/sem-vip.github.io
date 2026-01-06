# 🚀 Guia de Deploy - GitHub Pages

## Passo a Passo para Deploy

### 1️⃣ Fazer Push das Alterações

Clique no botão **"Push"** no canto superior direito da tela do Builder.io

### 2️⃣ Configurar GitHub Pages

1. Vá para o repositório no GitHub: `https://github.com/fuel-design-system/transacional.github.io`

2. Clique em **Settings** (Configurações)

3. No menu lateral esquerdo, clique em **Pages**

4. Em **"Build and deployment"**:
   - **Source**: Selecione **"GitHub Actions"**

5. Salve as configurações

### 3️⃣ Aguardar o Deploy

Após fazer push, o GitHub Actions automaticamente:
- ✅ Instala as dependências
- ✅ Faz o build do projeto
- ✅ Faz deploy no GitHub Pages

Você pode acompanhar o progresso em:
`https://github.com/fuel-design-system/transacional.github.io/actions`

### 4️⃣ Acessar o Site

⚠️ **IMPORTANTE**: Como seu repositório se chama `transacional.github.io`, existem duas possibilidades:

**Opção A** - Se for repositório principal da organização:
- URL: `https://transacional.github.io/`

**Opção B** - Se for repositório de projeto:
- URL: `https://fuel-design-system.github.io/transacional.github.io/`

## 🔧 Se o site não carregar na Opção B

Se você acessar em `https://fuel-design-system.github.io/transacional.github.io/` e der erro 404 nos arquivos, você precisará atualizar o `base` no `vite.config.ts`:

```typescript
base: mode === 'production' ? '/transacional.github.io/' : '/',
```

E depois fazer um novo build e push.

## ✅ Arquivos Configurados

- ✅ `.github/workflows/deploy.yml` - Workflow de deploy automático
- ✅ `public/.nojekyll` - Configuração do GitHub Pages
- ✅ `vite.config.ts` - Base path configurado
- ✅ `dist/spa/` - Build gerado e pronto

## 📝 Troubleshooting

### Erro 404 nos arquivos CSS/JS

Se você ver erros como:
```
Failed to load resource: the server responded with a status of 404 ()
```

**Solução**: Verifique se o `base` no `vite.config.ts` está correto para o caminho do seu repositório.

### Deploy não acontece automaticamente

**Solução**: Verifique se a opção **GitHub Actions** está selecionada em Settings → Pages → Source

## 🎯 Próximos Passos

Após o deploy com sucesso:
1. Teste todas as funcionalidades do site
2. Verifique se os links internos funcionam
3. Teste em dispositivos móveis
4. Configure um domínio personalizado (opcional)
