<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Project setup NextJS 

```bash
# Create project
$ npm i -g @nestjs/cli
$ nest new project-name

# Generating a new resource
$ nest g res

```

## Compile and Run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```


## Docker

```bash
# Build + Run
$ docker-compose up --build

# Run docker compose & Stop
$ docker-compose up -d
$ docker-compose down

# View running containers
$ docker ps -a

# Check container
$ docker ps

# Check logs
$ docker-compose logs -f
```

## Database postgresql to env

```bash
# Setup
$ DATABASE_URL="postgresql://postgres:<username>@localhost:<port>/<db>?schema=public"
```