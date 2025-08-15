# CRUSH Configuration

## Package Manager

pnpm

## Build

```bash
pnpm run build
```

## Lint

```bash
pnpm run lint
```

## Test

```bash
pnpm run test
```

### Single Test

```bash
pnpm run test --testName "specific test name"
```

## Code Style Guidelines

-   Favor kebab-case over camelCase for file names.
-   Include the type of the file in the name (e.g., `grouped-galleries.component.tsx`).
-   Favor named exports over default exports.
-   Follow the existing Cursor/Copilot rules (if any).

## Ignore File

Add `.crush` to `.gitignore`.