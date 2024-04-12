import Fastify from "fastify";
import cors from "@fastify/cors";
import { createUser, getUsers } from "./lib/conn.js";

const app = Fastify();
const port = 3333;
const host = "0.0.0.0"

app.register(cors, {
    origin: true,
})

app.get('/users', getUsers);
app.post('/users', createUser);

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
