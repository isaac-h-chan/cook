import express from "express"
import auth_router from "./auth/auth.js"
import primsa from "./db/db_client.js"

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World')
	console.log("hello")
})

app.use("/auth", auth_router)

app.listen(port);
