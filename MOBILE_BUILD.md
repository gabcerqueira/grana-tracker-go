# 📱 Guia para Gerar APK

Seu app está configurado como PWA e pronto para gerar APK/IPA usando Capacitor!

## ✅ O que já está configurado:
- ✅ PWA com suporte offline
- ✅ Ícones do app (192x192 e 512x512)
- ✅ Manifest configurado
- ✅ Capacitor instalado
- ✅ Meta tags mobile otimizadas

## 📱 Opção 1: Instalar como PWA (Mais Simples)

Seu app já pode ser instalado no celular direto do navegador:

**iPhone:**
1. Abra o app no Safari
2. Toque no botão "Compartilhar"
3. Selecione "Adicionar à Tela de Início"

**Android:**
1. Abra o app no Chrome
2. Toque nos 3 pontinhos (menu)
3. Selecione "Adicionar à tela inicial"

## 🚀 Opção 2: Gerar APK/IPA (App Nativo Real)

Para gerar um APK (Android) ou IPA (iOS) e publicar nas lojas:

### Pré-requisitos:
- Node.js instalado
- Android Studio (para Android)
- Xcode e Mac (para iOS)

### Passos:

1. **Exportar o projeto para GitHub:**
   - Clique no botão "Export to Github" no Lovable
   - Clone seu repositório: `git clone seu-repositorio`

2. **Instalar dependências:**
   ```bash
   cd seu-projeto
   npm install
   ```

3. **Adicionar plataformas:**
   ```bash
   # Para Android
   npx cap add android
   
   # Para iOS (apenas em Mac)
   npx cap add ios
   ```

4. **Atualizar dependências nativas:**
   ```bash
   npx cap update android
   # ou
   npx cap update ios
   ```

5. **Build do projeto:**
   ```bash
   npm run build
   ```

6. **Sincronizar com plataformas nativas:**
   ```bash
   npx cap sync
   ```

7. **Abrir no Android Studio ou Xcode:**
   ```bash
   # Para Android
   npx cap run android
   
   # Para iOS
   npx cap run ios
   ```

8. **Gerar APK/IPA:**
   - **Android Studio**: Build → Build Bundle(s) / APK(s) → Build APK(s)
   - **Xcode**: Product → Archive → Distribute App

## 🔄 Atualizando o app após mudanças

Sempre que fizer alterações no código:

```bash
git pull                  # Baixar mudanças do GitHub
npm run build            # Build do projeto
npx cap sync             # Sincronizar com plataformas
npx cap run android      # Testar no Android
```

## 📚 Recursos Úteis

- [Documentação Capacitor](https://capacitorjs.com/docs)
- [Guia de Publicação Android](https://developer.android.com/studio/publish)
- [Guia de Publicação iOS](https://developer.apple.com/app-store/submissions/)

## ⚡ Hot Reload (Desenvolvimento)

O Capacitor já está configurado para hot-reload apontando para:
`https://08501788-6f8c-4993-87e5-3d852a7cb94a.lovableproject.com`

Isso significa que você pode testar mudanças instantaneamente no celular sem rebuild!
