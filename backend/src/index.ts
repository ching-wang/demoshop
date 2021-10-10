import * as http from "http";

const host = "0.0.0.0";
const port = Number(process.env.API_PORT);

const server = http.createServer((req, res) => {
    console.log("REQUEST")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({HELLO: "WORLD"}));
});
server.listen(port, host, () => {
    console.log(`3 Server is running on ${host}:${port}`);
});
