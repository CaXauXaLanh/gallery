import express from "express"
const app = express()
import initWebRouter from "./routes/web"
import configViewEngine from "./configs/viewEngine"
import connection from "./configs/connectDB"

require('dotenv').config()
const port = process.env.PORT

configViewEngine(app)

initWebRouter(app)



app.listen(port, () => {
    console.log(`http:localhost:${port}`)
})