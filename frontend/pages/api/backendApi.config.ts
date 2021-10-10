import axios, { AxiosInstance } from "axios";
import { config } from "./config";

let _client: AxiosInstance;

export function backendApi(): AxiosInstance {
  return (
    _client ||
    (_client = axios.create({
      baseURL: `http://${config().backEndHost}:${config().backEndPort}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }))
  );
}
