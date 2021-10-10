// Update with your config settings.

module.exports = {

  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./dev.sqlite3"
  //   }
  // },

  development: {
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
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }

};
