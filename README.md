# Astro basic architecture with accessibility testing

## Installation

```sh
npm create astro@latest -- --template albertesc/astro-architecture
```

![just-the-basics](https://github.com/albertesc/astro-architecture/blob/main/screen.png)

## Requeriments

* Node.js - v18.17.1 or v20.3.0 or higher. ( v19 is not supported.)
* Text editor - We recommend VS Code with our Official Astro extension.
* Terminal - Astro is accessed through its command-line interface (CLI).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                             |
| :------------------------ | :--------------------------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                                              |
| `npm run dev`             | Starts local dev server at `localhost:4321`                                        |
| `npm run dev:host`        | Starts local dev server at `localhost:4321` with host `http://192.168.1.136:4321/` |
| `npm run build`           | Build your production site to `./dist/`                                            |
| `npm run build:test`      | Build your production site to `./dist/` with accessibility test                     |
| `npm run preview`         | Preview your build locally, before deploying                                       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                                   |
| `npm run astro -- --help` | Get help using the Astro CLI                                                       |

## Want to learn more?

Feel free to check [astro documentation](https://docs.astro.build).

---

Made with 🤍 by [Albert Escamilla](https://albertesc.dev).