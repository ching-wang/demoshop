import Knex from 'knex';

let _knexClient: Knex.QueryBuilder

export function knexQueryBuilder(): Knex.QueryBuilder {
    return _knexClient || (_knexClient = Knex({
        client: 'pg',
        version: '14.0',
        connection: {
            host: process.env.DB_HOST || "0.0.0.0",
            port: Number(process.env.DB_PORT || 5432),
            user: process.env.DB_USER || "demoshop",
            password: process.env.DB_PASSWORD || "topsecret",
            database: process.env.DB_DATABASE || "demoshop",
        },
        seeds: {
            directory: "./seeds/"
        }
    }))
}
