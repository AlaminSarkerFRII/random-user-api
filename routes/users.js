import express from "express"
const router = express.Router()

// users 

const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
        }
]

// get all users from /users routes
router.get("/",(req,res)=>{
    console.log(users)
    res.send(users)
})

// add new user using post api

router.post("/",(req,res)=>{
    console.log("Post is Reached")
    res.send("POst is Reached")
})

export default router;