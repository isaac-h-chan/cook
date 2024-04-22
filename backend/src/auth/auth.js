import express from "express"
import cookieParser from "cookie-parser"
import { warnEnvConflicts } from "@prisma/client/runtime/library"

const auth_router = express.Router()

// middlewares
auth_router.use(express.json())
auth_router.use(cookieParser())


// endpoints
auth_router.get("/", (req, res) => {
	res.json({"status": "success"})
})

auth_router.post("/signup", (req, res) => {

	res.json({
		"email": req.body.email,
		"password": req.body.password,
		"name": req.body.name,
		"dob": req.body.dob,
	})

})


export default auth_router
