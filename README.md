# demoshop
Demo web app using Next.js, React, Node.js, PostgreSQL, Docker

## Run locally

```bash
docker-compose up 
docker-compose exec backend ./node_modules/.bin/knex migrate:latest --cwd database
docker-compose exec backend ./node_modules/.bin/knex seed:run --cwd database
```

## Local development

For example:

```bash
docker-compose up backend

docker-compose exec backend ./node_modules/.bin/knex migrate:latest --cwd database
docker-compose exec backend ./node_modules/.bin/knex seed:run --cwd database

BACKEND_HOST=0.0.0.0 BACKEND_PORT=8000 yarn run dev
```
