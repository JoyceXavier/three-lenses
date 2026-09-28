# Three Lenses

Portfólio profissional público organizado por três perspectivas:
**Tecnologia**, **Produto** e **Processos**.

## Stack

- HTML5, CSS3 e JavaScript estáticos;
- servidor local em Node.js, sem dependências externas;
- conteúdo responsivo e executado diretamente no navegador.

## Executar localmente

Requisito: Node.js 18 ou superior.

```bash
cd web
npm run check
npm run dev
```

O site estará disponível em `http://localhost:4173`. Para usar outra porta:

```bash
PORT=3000 npm run dev
```

## Estrutura pública

```text
.
├── README.md
└── web/
    ├── *.html       páginas do portfólio
    ├── styles.css   identidade visual e responsividade
    ├── cases.js     conteúdo público dos cases
    ├── favicon.*    identidade da marca
    ├── server.mjs   servidor local
    └── package.json comandos de execução e verificação
```

## Status

V1 funcional e responsiva, com páginas de apresentação profissional,
experiência, formação, competências, conteúdos, contato e seis cases
sanitizados. O projeto não utiliza backend, banco de dados ou bibliotecas
externas nesta versão.
