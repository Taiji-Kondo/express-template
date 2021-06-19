# Express × TypeScript

Docker Build:

```bash
# show logs
docker-compose up

# background
docker-compose up -d
```

Express Build:

```bash
# develop (with watch)
yarn dev

# production (output ./.build directory)
yarn build
```

Migration Operations:

```bash
# Generate Migration File
yarn migration:generate

# Migration Run
yarn migration:run
```

Lint and Format:

```bash
# Lint
yarn lint
# auto fixed
yarn lint --fix

# Format
yarn format
```
