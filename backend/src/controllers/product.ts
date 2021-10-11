import { Request, Response } from "express";

import { getAllProducts } from "../repositories/productRepo";

export async function index(req: Request, res: Response): Promise<void> {
  const products = await getAllProducts();

  res.status(200).json({ data: products });
}
