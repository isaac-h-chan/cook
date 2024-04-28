import express from "express"
import cookieParser from "cookie-parser"
import prisma from "../db/db_client.js"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

const auth_router = express.Router()

// middlewares
auth_router.use(express.json())
auth_router.use(cookieParser())


// endpoints
auth_router.get("/", (req, res) => {
	res.json({"status": "success"})
})

auth_router.post("/signup", async (req, res) => {

	try {
		const user = await prisma.user.create({
			data: {
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			}
		})

		console.log(user)
		res.status(201).send("Successfully created user")

	} catch(e) {
		if (e instanceof PrismaClientKnownRequestError) {
			if (e.code === "P2002") {

				console.log(req.body.email + " is already associated with a user")
				res.status(422).send("email must be unique")

			}
		}
	}

})


export default auth_router
