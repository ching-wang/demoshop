import { Knex } from "knex";
import Config = Knex.Config;
const path = require("path");

const config: Config = {
  client: "postgresql",
  connection: {
    host: process.env.DB_HOST || "0.0.0.0",
    port: Number(process.env.DB_PORT || 5432),
    user: process.env.DB_USER || "demoshop",
    password: process.env.DB_PASSWORD || "topsecret",
    database: process.env.DB_DATABASE || "demoshop",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.join(__dirname, "migrations"),
  },
  seeds: {
    directory: path.join(__dirname, "seeds"),
  }
};

module.exports = config;
