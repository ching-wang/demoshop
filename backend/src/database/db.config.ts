// let dbInstance
// export function getDb() {
//   if (!dbInstance) {
//     dbInstance = require("knex")(require("knexfile"));
//   }
//   return dbInstance
// }

const config = require("./knexfile")

export const db = require("knex")(config);
