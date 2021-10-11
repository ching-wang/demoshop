import {db} from "../database/db.config";

export type Product = {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}

export async function getAllProducts(): Promise<Product[]> {
    return db
        .select("*")
        .limit(100)
        .from("products");
}
