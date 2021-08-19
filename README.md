# An application for searching for books in the Google Books API

## TODO

- [x] Add docker config
- [x] Add tests
- [ ] Rework fetch function. But, should I?
- [x] Add image component
- [x] Add linting & pre-commit checks

## Tests

For CI tests i use Cypress, also i generate code-coverage reports and it's current 92%

## Stack

- Vite, bundler
- React, library for building UI
- Tailwind, utility-first css framework
- Redux, for state-management
- Cypress, for CI tests

## Install dependencies

```shell
yarn install
```

## Example of .env

```dotenv
GOOGLE_API_KEY=YOUR_KEY
```

## Development

```shell
yarn dev
```

## Building

```shell
yarn build
```

## Preview

```shell
yarn preview
```
