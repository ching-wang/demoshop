import { Knex } from "knex";

const TABLE_NAME = "product_category";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.integer("product_id").index();
        table.foreign("product_id").references("id").inTable("products");
        table.integer("category_id").index();
        table.foreign("category_id").references("id").inTable("categories");
        table.primary(["product_id", "category_id"]);
        table.timestamps(false, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(TABLE_NAME);
}
