process.env.DB_USER = "demoshop";
process.env.DB_PASSWORD = "topsecret";
process.env.DB_HOST = "0.0.0.0";
process.env.DB_PORT = "65432";
process.env.DB_DATABASE = "demoshop";

import {db} from "../src/database/db.config";

beforeAll(async () => {
    await db.migrate.latest()
    await db.seed.run()
})
