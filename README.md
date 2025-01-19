# mailerlite-technical-test

Build a simple drag & drop landing page builder using any of Vue.js, Angular, React. Extra points for using Vue.js.

Requirements:
- Create 2 draggable blocks: Text and Image.
- The content of Text block should be editable.
- Image block can be edited by selecting one of the 3-4 predefined images.
- The user should be able to rearrange, duplicate and delete blocks.
- Landing page data like the text content, links to images, block order, etc. should be exported to a JSON format when the user clicks the  “Save” button (console.log is enough).
- Style the application using CSS or a CSS framework of your choice (e.g., Tailwind CSS).
- The application should be responsive.
- Test cases are a bonus.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
pnpm build

# Runs the end-to-end tests
pnpm test:e2e
# Runs the tests only on Chromium
pnpm test:e2e --project=chromium
# Runs the tests of a specific file
pnpm test:e2e tests/example.spec.ts
# Runs the tests in debug mode
pnpm test:e2e --debug
```