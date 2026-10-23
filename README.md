# Desbrave Chapecó

Portal de turismo de Chapecó/SC. Site estático feito com Astro, Tailwind CSS v4 e Pagefind, sem JavaScript de framework no cliente.

## Comandos

| Comando           | O que faz                                              |
| ----------------- | ------------------------------------------------------ |
| `npm install`     | Instala as dependências                                |
| `npm run dev`     | Servidor de desenvolvimento em `localhost:4321` (sem busca) |
| `npm run build`   | Gera `dist/` e o índice de busca (Pagefind)            |
| `npm run preview` | Serve o `dist/`, com busca funcionando                 |
| `npm run check`   | Checagem de tipos (Astro + TypeScript)                 |
| `npm run format`  | Prettier                                               |

## Conteúdo

Todo o conteúdo fica em Markdown em `src/content/`:

- `lugares/`: hospedagem, gastronomia, atrativos e serviços. `section` e `category` precisam existir em `src/site.ts`; o build falha se não existirem.
- `experiencias/`: rotas e roteiros (`order` define a ordem).
- `eventos/`: agenda. Eventos com data passada saem do site no próximo build.

Para usar uma foto real, coloque o arquivo ao lado do `.md` e adicione `image: ./foto.jpg` no frontmatter. Sem `image`, o site usa a foto provisória de `src/assets/placeholders/<id>.jpg`.

Seções, categorias e menu são definidos em `src/site.ts`.

> O conteúdo atual (textos, eventos e fotos) é provisório e deve ser revisado antes de publicar. Procure por `TODO` nos arquivos `.md`.

## Deploy

Gera um site 100% estático em `dist/`, que pode ir para Vercel, Netlify, Cloudflare Pages ou qualquer CDN. Para a agenda de eventos ficar em dia, agende um rebuild diário (por exemplo, um deploy hook com cron).
