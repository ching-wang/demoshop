# Database

```bash
cd backend/src/database
```

## Migrations

Run migrations:

```bash
docker-compose exec backend ./node_modules/.bin/knex migrate:latest --cwd database
```

Make a new migration:

```bash
NODE_ENV=development ../../node_modules/.bin/knex migrate:make foo_migration_name
```
