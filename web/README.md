# Three Lenses // Web

V1 executável do Three Lenses, identidade técnica do portfólio organizada pelas
perspectivas Tecnologia, Produto e Processos. O site é estático e não depende
de bibliotecas externas, API ou banco de dados.

## Executar localmente

Requisito: Node.js 18 ou superior.

```bash
npm run dev
```

Abra `http://localhost:4173` no navegador. Para usar outra porta:

```bash
PORT=3000 npm run dev
```

## Verificação rápida

```bash
npm run check
```

## Escopo atual

- página inicial responsiva e acessível;
- base escura com acentos em azul e verde;
- identidade Three Lenses com Tecnologia, Produto e Processos;
- componentes e tokens visuais reutilizáveis;
- seção com seis previews de cases e páginas de detalhe navegáveis;
- páginas de Sobre, Experiência, Formação, Competências, Conteúdos e Contato;
- metadados básicos por página, favicon minimalista e página 404 estática;
- conteúdo público sanitizado, sem dados de ambientes ou regras internas;
- documentos completos mantidos em `../docs/cases/` como fonte e checkpoint.

Cada CTA `Ver detalhes` abre uma visão estática em `case.html?id=01` até
`case.html?id=06`. O conteúdo da interface está concentrado em `cases.js`, sem
API, banco de dados ou dependências externas.

O backend permanece desnecessário nesta etapa. A direção técnica já registrada
— Next.js, TypeScript e Tailwind — continua preservada como próximo passo. A
migração deve ocorrer quando houver requisitos de conteúdo dinâmico, rotas de
cases ou integrações que justifiquem essa complexidade.
