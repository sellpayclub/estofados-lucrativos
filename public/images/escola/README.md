# 📸 Imagens da Escola Essência Criativa

## Como adicionar as imagens:

1. **Depoimentos (Screenshots WhatsApp)**
   - Pasta: `depoimentos/`
   - Arquivos: `depoimento-1.jpg`, `depoimento-2.jpg`, `depoimento-3.jpg`, etc.
   - Formato: JPG ou PNG
   - As imagens aparecerão automaticamente no carrossel quando você adicionar

2. **Foto da Instrutora**
   - Pasta: `instrutora/`
   - Arquivo: `mariana-silva.jpg`
   - Formato: JPG ou PNG (quadrada ou retrato funciona melhor)

3. **Badge de Garantia**
   - Arquivo direto na pasta `escola/`: `garantia-badge.png`
   - Ou pode deixar sem - o componente mostra um badge automático se não tiver a imagem

## Estrutura final:

```
public/images/escola/
├── depoimentos/
│   ├── depoimento-1.jpg
│   ├── depoimento-2.jpg
│   ├── depoimento-3.jpg
│   └── depoimento-4.jpg (ou mais)
├── instrutora/
│   └── mariana-silva.jpg
└── garantia-badge.png (opcional)
```

**Importante:** 
- Nomes dos arquivos devem ser EXATAMENTE como acima
- Após adicionar as imagens, elas aparecerão automaticamente na página
- Se alguma imagem não existir, o componente mostrará um placeholder seguro
