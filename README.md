# intlytics-ui

[![CI](https://github.com/rangertaha/intlytics-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/rangertaha/intlytics-ui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D20.19-brightgreen.svg)](.nvmrc)

Analytics dashboard UI, built with **Vite + React 19 + TypeScript**.

## Requirements

- Node.js **20.19+** or **22.12+** (required by Vite 8 — see [`.nvmrc`](.nvmrc))
- npm 10+

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
```

## Scripts

| Command                | Description                                   |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR            |
| `npm run build`        | Type-check and build for production (`dist/`) |
| `npm run preview`      | Preview the production build locally          |
| `npm run typecheck`    | Type-check without emitting                   |
| `npm run lint`         | Lint with ESLint                              |
| `npm run format`       | Format the codebase with Prettier             |
| `npm run format:check` | Check formatting without writing changes      |

## Project structure

```
src/
  app/          App shell: providers, router
  components/   Shared UI (layout, …)
  features/     Feature modules (dashboard, settings) — UI + data per feature
  lib/          Cross-cutting libs (query client, API client)
  stores/       Zustand client-state stores
  pages/        Standalone pages (404, …)
```

The `@/` alias maps to `src/` (e.g. `import { queryClient } from '@/lib/query-client.ts'`).

## Tech stack

- [Vite](https://vite.dev/) — build tool & dev server
- [React 19](https://react.dev/) — UI library
- [React Router](https://reactrouter.com/) — routing
- [TanStack Query](https://tanstack.com/query) — server-state / data fetching
- [Zustand](https://zustand.docs.pmnd.rs/) — client state
- [TypeScript](https://www.typescriptlang.org/) — typed JavaScript
- [ESLint](https://eslint.org/) (flat config) + [Prettier](https://prettier.io/) — linting & formatting

## Configuration

- `VITE_API_BASE_URL` — backend base URL for the API client (defaults to `/api`).

The dashboard currently renders mock metrics from
`src/features/dashboard/api.ts`; swap `fetchMetrics` to call `apiGet` against
your backend.

## License

[MIT](./LICENSE)
