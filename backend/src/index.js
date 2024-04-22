import { PrismaClient } from "@prisma/client";
import express from "express"
import auth_router from "./auth/auth.js"

const app = express();
const port = 4000;

const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.send('Hello World')
	console.log("hello")
})

app.use("/auth", auth_router)

app.listen(port);
