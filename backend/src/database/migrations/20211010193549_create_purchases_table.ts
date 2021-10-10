import { Knex } from "knex";

const TABLE_NAME = "purchases";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id");
    table.integer("product_id").index();
    table.foreign("product_id").references("id").inTable("products");
    table.timestamps(false, true);
    table.index(["created_at"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TABLE_NAME);
}
