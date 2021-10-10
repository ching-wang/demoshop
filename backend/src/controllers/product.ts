import { Request, Response } from "express";

export async function index(req: Request, res: Response): Promise<void> {
    res.status(200).json({ PRODUCTS: "OK" });
}
