import express from "express"
import "express-async-errors"
import { errors } from "./middlewares/errors"
import { routes } from "./routes"

export const app = express()

app.use(express.json())
app.use(routes)
app.use(errors)

