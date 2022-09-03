import express from "express"
import userRoutes from "./routes/users.js"
const app = express()
const PORT = 5000


// middleware 
app.use(express.json())


// all users with this routes
app.use("/users",userRoutes);


// local server 
app.get("/",(req,res)=>{
    res.send("Hello From Home Page")
})

// listen
app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}`)
})