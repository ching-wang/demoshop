import { Knex } from "knex";

const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

export async function seed(knex: Knex): Promise<void> {
  // Products.
  const productRows: ProductCSVRow[] = await loadProductsFromCSV();
  await knex("products")
    .insert(
      productRows.map((productRow) => ({
        id: Number(productRow.ID),
        name: productRow.NAME,
        description: productRow.DESCRIPTION,
        created_at: new Date(Date.parse(productRow.CREATION_DATE)),
        updated_at: new Date(Date.parse(productRow.UPDATE_DATE)),
      }))
    )
    .onConflict("id")
    .merge(["id", "name", "description"]);

  // Categories.
  const categoryRows: CategoryCSVRow[] = await loadCategoriesFromCSV();
  await knex("categories")
    .insert(
      categoryRows.map((categoryRow) => ({
        id: Number(categoryRow.ID),
        name: categoryRow.CATEGORY_NAME,
      }))
    )
    .onConflict("id")
    .merge(["id", "name"]);

  // Purchases.
  await knex("purchases").insert(
    productRows.map((productRow) => ({
      product_id: productRow.ID,
      created_at: new Date(Date.parse(productRow.LAST_PURCHASED_DATE)),
    }))
  );

  // Product-Category pivot.
  await knex("product_category").insert(
    productRows.map((productRow) => ({
      product_id: productRow.ID,
      category_id: productRow.CATEGORY_ID,
    }))
  );
}

type ProductCSVRow = {
  ID: string;
  NAME: string;
  DESCRIPTION: string;
  CATEGORY_ID: string;
  CREATION_DATE: string;
  UPDATE_DATE: string;
  LAST_PURCHASED_DATE: string;
};

function loadProductsFromCSV(): Promise<ProductCSVRow[]> {
  const rows: ProductCSVRow[] = [];
  return new Promise((resolve) => {
    fs.createReadStream(path.join(__dirname, "products.csv"))
      .pipe(csv())
      .on("data", (row: ProductCSVRow) => rows.push(row))
      .on("end", () => {
        resolve(rows);
      });
  });
}

type CategoryCSVRow = {
  ID: string;
  CATEGORY_NAME: string;
};

function loadCategoriesFromCSV(): Promise<CategoryCSVRow[]> {
  const rows: CategoryCSVRow[] = [];
  return new Promise((resolve) => {
    fs.createReadStream(path.join(__dirname, "categories.csv"))
      .pipe(csv())
      .on("data", (row: CategoryCSVRow) => rows.push(row))
      .on("end", () => {
        resolve(rows);
      });
  });
}
