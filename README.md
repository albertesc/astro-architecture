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

| Command                   | Action                                                             |
| :------------------------ | :----------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                              |
| `npm run dev`             | Starts local dev server at `localhost:4321`                        |
| `npm run dev:host`        | Starts local dev server at `localhost:4321` with host IP           |
| `npm run build`           | Build your production site to `./dist/`                            |
| `npm run build:test`      | Build your production site to `./dist/` with accessibility test    |
| `npm run preview`         | Preview your build locally, before deploying                       |
| `npm run test`            | Accessibility testing **(Required for generating test reports)**   |
| `npm run create:icons`    | Create library icons from folder `public/assets/icons`             |

## Configuration File

The configuration file is located in the folder `/src/data/config.json`. In this file, you can modify global configurations of your project:

*Project Name:*

```json
{
    "project": {
        "name": "My Project"
    }
}
```

*Dark Mode*

```json
{
    "project": {
        "darkmode": false
    }
}
```

## Index page

![index-page](https://github.com/albertesc/astro-architecture/blob/main/index-page.png)

On the project's main screen, you will find a list that will serve as a guide to see the status of your project. In case you want to modify this information, you will find all the data in the folder `src/data/`. There are `.json` documents where you can modify the state of your components, screens and more.

### Add components

Change this file from src/data/components.json

```json
{
    "components": [
        {
            "name": "Colors",
            "path": "",
            "docs": "docs/colors",
            "status": "done"
        },
        {
            "name": "Icons",
            "path": "",
            "docs": "docs/icons",
            "status": "done"
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

### Add pages

Change this file from src/data/pages.json

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

### Add project colors

Change this file from src/data/colors.json

```json
{
    "colors": {
        "primary": "#D0315D",
        "alternative": "#5E48E8"
    }
}
```

## Icon component

This architecture provides a simple way to create icons using the `Icon` component. To add icons, simply place the SVG files in the `/public/assets/icons/` folder and run the command:

```bash
npm run create:icons
```

You can use the `Icon` component by importing it from `@components/Icon/icon.astro` and rendering it as a normal Astro Component.

```html
---
import Icon from '@components/Icon/icon.astro'
---

<!-- Embed the contents of the `/public/assets/icons/logo.svg` file -->
<Icon name="logo" />
```

**Props**

The Icon component accepts the following properties:

```javascript
interface Props {
    /** The name of the icon to include */
    name: string;

    /** Shorthand for setting width and height */
    size?: number;
    width?: number;
    height?: number;
}
```


| Property | Type    | Required | Description                                                                |
|----------|---------|----------|----------------------------------------------------------------------------|
| name     | string  | Yes      | The name of the icon to be used.                                           |
| width    | number  | No       | The width of the icon. If not provided, the `size` value is used.          |
| height   | number  | No       | The height of the icon. If not provided, the `size` value is used.         |
| size     | number  | No       | The size of the icon. It is used if `width` and `height` are not provided. |

```html
---
import Icon from '@components/Icon/icon.astro'
---

<Icon name="icon-name" width={16} height={16} />
<Icon name="icon-name" size={16} />
```

---

## Want to learn more about Astro?

Feel free to check [astro documentation](https://docs.astro.build).

---

Made with 🤍 by [Albert Escamilla](https://albertesc.dev).