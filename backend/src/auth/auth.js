import express from "express"
import cookieParser from "cookie-parser"
import prisma from "../db/db_client.js"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import bcrypt from "bcrypt"

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

		const hashed_password = await bcrypt.hash(req.body.password, 10)

		const user = await prisma.user.create({
			data: {
				name: req.body.name,
				email: req.body.email,
				password: hashed_password
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


/*
 * Request Body Params
 *	- email
 *	- password
 */
auth_router.post("/authenticate_user", async (req, res) => {

	try {

		const user = await prisma.user.findUniqueOrThrow({
			where: {
				email: req.body.email
			}
		})
		if (await bcrypt.compare(req.body.password, user.password)) {
			res.status(200).send("Successfully Authenticated")
		} else {
			res.status(401).send("Authentication Failure")
		}

	} catch(e) {

		if (e instanceof PrismaClientKnownRequestError) {
			if (e.code === "P2025") {
				res.status(404).send("User with email " + req.body.email + " not found")
			}
		}

	}
})


export default auth_router
