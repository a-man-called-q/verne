# Verne (Vite App)

This is a Vite application within the Verne monorepo. It serves as a modern starter template featuring React, TypeScript, and Tailwind CSS.

## Features

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Monorepo**: Powered by [pnpm workspaces](https://pnpm.io/workspaces) and [Turbo](https://turbo.build/)
- **Shared Assets**: Centralized assets and fonts via `@verne/assets`
- **Shared Utils**: Common utilities via `@verne/utils`

## Development

To start the development server:

```bash
pnpm dev
```

## Build

To build for production:

```bash
pnpm build
```

## Project Structure

- `src/app.tsx`: Main application component
- `src/main.tsx`: Entry point
- `src/assets/global.css`: Global styles and Tailwind configuration
- `vite.config.ts`: Vite configuration with custom plugins
