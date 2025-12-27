# 📸 GUIA COMPLETO: Como Adicionar as Imagens

## ⚠️ IMPORTANTE

As imagens **precisam ser adicionadas manualmente** nas pastas do projeto. Os componentes já estão prontos e funcionando - quando você adicionar as imagens, elas aparecerão automaticamente!

---

## 📁 PASSO A PASSO

### 1️⃣ Depoimentos (Screenshots WhatsApp)

**Localização:** `public/images/escola/depoimentos/`

**Arquivos necessários:**
- `depoimento-1.jpg` - Primeiro screenshot do WhatsApp
- `depoimento-2.jpg` - Segundo screenshot
- `depoimento-3.jpg` - Terceiro screenshot
- `depoimento-4.jpg` - Quarto screenshot
- `depoimento-5.jpg` - Quinto screenshot (opcional)
- `depoimento-6.jpg` - Sexto screenshot (opcional)

**Como fazer:**
1. Abra o WhatsApp no celular
2. Tire screenshots dos depoimentos
3. Salve na pasta `public/images/escola/depoimentos/`
4. Renomeie para `depoimento-1.jpg`, `depoimento-2.jpg`, etc.

---

### 2️⃣ Foto da Instrutora (Mariana Silva)

**Localização:** `public/images/escola/instrutora/`

**Arquivo necessário:**
- `mariana-silva.jpg` - Foto profissional da Mariana

**Como fazer:**
1. Pegue a melhor foto da Mariana
2. Salve na pasta `public/images/escola/instrutora/`
3. Renomeie para `mariana-silva.jpg`

---

### 3️⃣ Badge de Garantia (OPCIONAL)

**Localização:** `public/images/escola/`

**Arquivo:** `garantia-badge.png`

**Nota:** Se você não adicionar, o componente mostrará automaticamente um badge bonito.

---

## ✅ DEPOIS DE ADICIONAR

1. **Salve os arquivos** nas pastas corretas
2. **Recarregue a página** (F5 ou Cmd+R)
3. **As imagens aparecerão automaticamente!** ✨

---

## 📋 CHECKLIST

- [ ] Adicionei `depoimento-1.jpg` em `public/images/escola/depoimentos/`
- [ ] Adicionei `depoimento-2.jpg` em `public/images/escola/depoimentos/`
- [ ] Adicionei `depoimento-3.jpg` em `public/images/escola/depoimentos/`
- [ ] Adicionei `depoimento-4.jpg` em `public/images/escola/depoimentos/`
- [ ] Adicionei `mariana-silva.jpg` em `public/images/escola/instrutora/`
- [ ] (Opcional) Adicionei `garantia-badge.png` em `public/images/escola/`

---

## 🔍 ESTRUTURA FINAL ESPERADA:

```
estofados-lucrativos/
└── public/
    └── images/
        └── escola/
            ├── depoimentos/
            │   ├── depoimento-1.jpg ✅
            │   ├── depoimento-2.jpg ✅
            │   ├── depoimento-3.jpg ✅
            │   └── depoimento-4.jpg ✅
            ├── instrutora/
            │   └── mariana-silva.jpg ✅
            └── garantia-badge.png (opcional)
```

---

## 💡 DICAS

- **Formato:** JPG ou PNG funcionam
- **Tamanho:** Até 2MB por imagem é ideal
- **Nomes:** Devem ser **EXATAMENTE** como mostrado acima (case-sensitive)
- **Qualidade:** Screenshots do WhatsApp já funcionam perfeitamente

---

## 🚀 Quando tudo estiver pronto

Faça commit das imagens:

```bash
git add public/images/escola/
git commit -m "feat: adicionar imagens da Escola Essência Criativa"
git push
```

E pronto! As imagens aparecerão no site! 🎉
