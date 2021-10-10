type Config = {
    backEndHost: string;
    backEndPort: number;
}

let _config: Config
export function config(): Config {
    return _config || (_config = {
        backEndHost: process.env.BACKEND_HOST || "backend",
        backEndPort: Number(process.env.BACKEND_HOST) || 8000
    })
}
