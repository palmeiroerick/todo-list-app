import express, { Express, Router, Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config();

const app: Express = express()
const port: string | undefined = process.env.PORT;
const route: Router = Router()

app.use(express.json())

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" })
})

app.use(route)

app.listen(port, () => { })
