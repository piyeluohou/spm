# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000). Uses Turbopack.
- `npm run build` — production build. Note: **build does not run linting** (Next 16 removed `next lint`).
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`). Run this separately from `build`.
- `npm start` — serve the production build.
- No test runner is configured; there are no tests in the repo.

## Critical: this is Next.js 16, not the version you know

The bundled docs in `node_modules/next/dist/docs/` are the authoritative reference for the installed version — read them before writing code that touches Next.js APIs, conventions, or config. Notable breaking changes vs. earlier versions:

- **Async request APIs are mandatory.** `params`, `searchParams`, `cookies()`, `headers()`, and `draftMode()` are all promises and must be awaited; synchronous access was removed in v16. Server Component props like `params`/`searchParams` are typed as promises — see `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`.
- **Typed props helpers.** `PageProps`, `LayoutProps`, etc. are global type helpers — no import needed. Example: `export default function Layout({ children }: LayoutProps<"/">)` (see [app/layout.tsx](app/layout.tsx:20)).
- **Caching model is Cache Components.** [next.config.ts](next.config.ts) enables `cacheComponents: true` and `partialPrefetching: true`. The current caching docs are under `01-app/01-getting-started/08-caching.md`; anything labeled needing `unstable_` prefixes or the older model is stale. `cacheLife`/`cacheTag` are stable (no `unstable_` prefix).
- **`next lint` no longer exists**; ESLint runs directly. The default eslint config ignores `.next/**`, `out/**`, `build/**`, `next-env.d.ts`.

## Architecture

- App Router project (`app/` dir), React 19, TypeScript, Tailwind CSS v4. `@/*` path alias maps to the repo root (see `tsconfig.json`).
- **Tailwind v4**: CSS-first config — no `tailwind.config.*` file. Theme tokens are declared in [app/globals.css](app/globals.css) via `@theme inline`; the `@tailwindcss/turbopack` loader is wired in `next.config.ts` under `turbopack.rules`.
- **React Compiler** is enabled (`reactCompiler: true` in `next.config.ts`) — components are auto-optimized; don't manually memoize unless profiling shows a need.
- Fonts: Geist fonts via `next/font/google`, exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`) and mapped to Tailwind theme tokens in `globals.css`.
- Layout content is currently the stock `create-next-app` starter; no routes, components, or data-fetching layers exist yet beyond the root layout and page.