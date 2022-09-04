const express = require('express');
const userRoutes =  require("./routes/users.js")
const app = express()
const PORT = process.env.PORT || 5000


// middleware 
app.use(express.json())
// app.use(express.static("public"))

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