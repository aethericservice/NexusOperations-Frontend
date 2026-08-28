# AI Business Operations Platform

Colorful, responsive Angular 20 starter for a multi-tenant AI operations SaaS product. It includes 21 routed screens, reusable components, core services, guards, an HTTP interceptor, and mock business data.

## Run

```bash
npm install
npm start
```

Open `http://localhost:4200`. Use `demo@acme.ai` / any password on the demo login screen.

## Architecture

- `core/`: singleton services, authentication, API, guards and interceptors
- `shared/`: reusable UI, models, directives and pipes
- `layout/`: application shell, sidebar, header and footer
- `features/`: lazy-loaded business screens

## Angular 20 implementation

- Standalone components and `bootstrapApplication`—no `NgModule` dependency
- Route-level lazy loading with `loadComponent()` dynamic imports
- Functional route guards and functional HTTP interceptors
- Signals with `signal()`, `computed()`, signal inputs and signal outputs
- Built-in template control flow using `@if`, `@for` and `@empty`
- Zoneless change detection with `provideZonelessChangeDetection()`
- Router component-input binding and native view transitions
- SCSS modules, design tokens, mixins and responsive breakpoint utilities

The public landing, login and organization pages are separate lazy chunks. The authenticated
application shell, dashboard and shared workspace renderer are also downloaded only when their
routes are visited.
