import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
// users
let users =[];

// get all users from /users routes
router.get("/", (req, res) => {
  res.send(users);
});

// add new user using post api
router.post("/", (req, res) => {
  const user = req.body;
//   console.log(user,"Users are here")
  users.push({ ...user, id: uuidv4()});
  res.send(`the user ${user.name} has been added in database`);
});

// get single user 
router.get("/:id",(req,res)=>{
    const {id} = req.params;
    const singleUser = users.find(user=>user.id === id)
    res.send(singleUser)
    console.log("single users")
})

// delete user 
router.delete("/:id",(req,res)=>{
    const {id} = req.params;
     users = users.filter(user=>user.id !== id)
    res.send(`user with the id ${id} is deleted `)
})



export default router;
