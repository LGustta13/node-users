import Fastify from "fastify";
import cors from "@fastify/cors";
import { getUsers } from "./lib/conn.js";

const app = Fastify();
const port = 3333;
const host = "0.0.0.0"

app.register(cors, {
    origin: true,
})

app.get('/users', getUsers)

try {
    app.listen({
        port,
        host
    }).then(() => {
        console.log("HTTP server running")
    })
} catch (err) {
    console.log(err)
}
