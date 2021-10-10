import { NextApiRequest, NextApiResponse } from "next";
import { backendApi } from "../backendApi.config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const backendRes = await backendApi().get("/products");
  res.status(200).json(backendRes.data);
}
