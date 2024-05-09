# Astro architecture with accessibility testing

This project, based on Astro.build, aims to provide an architecture for creating projects with accessibility testing and delivering a static structure of HTML, CSS, and JS.

## Requeriments

* Node.js - v18.17.1 or v20.3.0 or higher. ( v19 is not supported.)
* Text editor - We recommend VS Code with our Official Astro extension.
* Terminal - Astro is accessed through its command-line interface (CLI).

## Installation

```sh
npm create astro@latest -- --template albertesc/astro-architecture
```

![just-the-basics](https://github.com/albertesc/astro-architecture/blob/main/screen.png)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                             |
| :------------------------ | :--------------------------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                                              |
| `npm run dev`             | Starts local dev server at `localhost:4321`                                        |
| `npm run dev:host`        | Starts local dev server at `localhost:4321` with host `http://192.168.1.136:4321/` |
| `npm run build`           | Build your production site to `./dist/`                                            |
| `npm run build:test`      | Build your production site to `./dist/` with accessibility test                    |
| `npm run preview`         | Preview your build locally, before deploying                                       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                                   |
| `npm run astro -- --help` | Get help using the Astro CLI                                                       |
| `npm run test`            | Accessibility testing **(Required for generating test reports)**                   |

## Configuration File

The configuration file is located in the folder `/src/data/config.json`. In this file, you can modify global configurations of your project:

*Project Name:*

```json
{
    "project": {
        "name": "My Project",
        //...
    }
}
```

*Dark Mode*

```json
{
    "project": {
        //...
        "darkmode": false
    }
}
```

## Index page

![index-page](https://github.com/albertesc/astro-architecture/blob/main/index-page.png)

On the project's main screen, you will find a list that will serve as a guide to see the status of your project. In case you want to modify this information, you will find all the data in the folder `/srd/data/`. There are two `.json` documents where you can modify the state of your components and screens.

```json
{
    "components": [
        {
            "name": "Colors",
            "path": "",
            "docs": "docs/colors",
            "status": "in-progress"
        },
        {
            "name": "Button",
            "path": "/src/components/Button/button.astro",
            "docs": "docs/button",
            "status": "in-progress"
        }
    ]
}
```

```json
{
    "pages": [
        {
            "title": "Home page",
            "path": "/src/pages/home.astro",
            "file": "home",
            "slug": "/home",
            "status": "in-progress",
            "accessibility": true
        }
    ]
}
```

---

## Want to learn more about Astro?

Feel free to check [astro documentation](https://docs.astro.build).

---

Made with 🤍 by [Albert Escamilla](https://albertesc.dev).