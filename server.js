import express from "express"
import mongoose from "mongoose"
import { config } from "dotenv"
import { authorRouter } from "./src/routes/author.routes.js"
import { categoryRouter } from "./src/routes/category.routes.js"
import { adminRouter } from "./src/routes/admin.routes.js"

config()
const port = process.env.PORT

const app = express()
app.use(express.json())

app.use("/itinfo/author", authorRouter)
app.use("/itinfo/category", categoryRouter)
app.use("/itinfo/admin", adminRouter)

app.use((err, req, res, next) => {
    if(err)
        return res.status(401).send(err.message)
    res.status(500).send("Server isn't working!")
})

app.listen(port, () => {
    try {
        console.log(`Server is running on ${port}-port`)
        console.log("connecting to database")
        mongoose.connect(process.env.DB_URI)
        console.log("connected")
    } catch (error) {
        console.log(error.message)        
    }
})