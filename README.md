# fangtsai.github.io

My personal portfolio — **[live site →](https://fangtsai.github.io/)**

Terminal-style, bilingual (zh / en). Built with React 18 + Vite 5 and auto-deployed to GitHub Pages on every push to `main`.

## Local

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
```

## Layout

```
src/
├── main.jsx       Entry point
├── data.jsx       Bilingual portfolio content
└── style-b.jsx    UI (single-component file)

public/assets/works/   Project screenshots
.github/workflows/     GitHub Pages deploy workflow
```
